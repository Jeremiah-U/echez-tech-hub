# paystack-integration SKILLS.md
*Fully aligned with AGENTS.md, code-style.md, security.md: enforces Paystack-only rule, correct environment variables, Payment Session Model, edge cases, and required utility file usage.*

## Skill Name

Paystack Integration

---

## Purpose

This skill enables the agent to correctly implement Paystack frontend payment flow for Echez Tech Hub, using only Paystack as mandated by AGENTS.md.

The goal is to create a smooth, trusted, low-friction payment experience that converts users after they click **Enroll Now**.

This project uses frontend-only Paystack integration via `src/utils/paystack.js` (per code-style.md: no ad-hoc payment code).

---

## Core Responsibilities

The agent must be able to:

- Trigger Paystack popup/inline checkout (Paystack only, AGENTS.md rule)
- Pass correct payment amount in kobo
- Pass user email
- Generate unique `ETH_` prefixed payment reference
- Handle successful payment callback
- Handle failed / closed checkout states with in-app UI (no `alert()`)
- Redirect user to success page via React Router (`useNavigate`)
- Pass full AGENTS.md Payment Session Model context to success page
- Store payment context in `sessionStorage` for interrupted redirects (AGENTS.md edge case)
- Disable payment button during processing to prevent duplicate clicks

---

## Required Inputs (Aligned to AGENTS.md Payment Session Model)

- User email
- Bootcamp title
- Bootcamp price (in Naira, converted to kobo)
- Bootcamp ID
- Public Paystack key (`VITE_PAYSTACK_PUBLIC_KEY`)

---

## Environment Variables (Per AGENTS.md and security.md)

```env
VITE_PAYSTACK_PUBLIC_KEY=pk_live_or_test_key
```

### Mandatory Utility File (Per code-style.md)

All Paystack logic MUST be in `src/utils/paystack.js`. Never write ad-hoc Paystack code inline.

### Example Flow

- User clicks Enroll Now (button disabled during processing)
- Payment modal opens
- User pays
- Callback returns success
- Store payment context in `sessionStorage`
- Redirect to `/success` via React Router with payment reference
- Success page validates reference before displaying (per security.md)

---

### Example Logic (Corrected, Uses React Router + sessionStorage)

```jsx
import { useNavigate } from "react-router-dom";

const payWithPaystack = ({ email, amount, bootcampId, title }) => {
  const navigate = useNavigate();
  
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // Convert Naira to kobo
    currency: "NGN",
    ref: `ETH_${Date.now()}`,

    callback: function(response) {
      // Store AGENTS.md Payment Session Model in sessionStorage
      const paymentContext = {
        bootcampId,
        title,
        email,
        amount,
        currency: "NGN",
        reference: response.reference,
        status: "success"
      };
      sessionStorage.setItem("paymentContext", JSON.stringify(paymentContext));
      
      // Use React Router navigate instead of window.location
      navigate(`/success?ref=${response.reference}`);
    },

    onClose: function() {
      // Use in-app error UI instead of alert() (AGENTS.md conversion-focused UX)
      // Show: "Payment cancelled. You can retry when ready."
    }
  });

  handler.openIframe();
};
```

---

## Rules

- Payment handled via Paystack only (AGENTS.md Key Business Rule)
- Amount must be in kobo (multiply Naira by 100)
- Currency = NGN (per AGENTS.md Payment Session Model)
- Always create unique `ETH_` prefixed reference
- Success page must display AGENTS.md mandated content: congratulations, bootcamp name, join community button, next steps
- Never expose secret Paystack keys (use `VITE_` prefixed only, per security.md)
- Handle modal close gracefully with in-app UI (no `alert()`)
- Prevent double clicking payment button (disable CTA during processing)
- Use `src/utils/paystack.js` for all Paystack logic (code-style.md rule)
- Validate payment references before displaying on Success page (security.md rule)
- Redirect Success page without payment context to home (AGENTS.md edge case)

---

## UX Rules (Aligned with AGENTS.md Conversion-First Principle)

- Show loading state when starting payment
- Disable CTA while processing (prevent duplicate clicks)
- Use trust copy near payment button:
  - "Secure payment powered by Paystack"
  - "Instant access after payment"
- Keep process short, no unnecessary steps

---

## Error States (Per AGENTS.md Error State Rules, In-App UI Only)

### Payment Failed
- Show: "Payment failed. Please try again." + Retry Payment CTA

### User Closes Modal
- Show: "Payment cancelled. You can retry when ready."

### Network Failure
- Show: "Connection issue. Please check your network and retry." + Retry button

### Paystack Callback Failure (AGENTS.md Rule)
- Show: "Payment received, check pending. Contact support with reference [ref]"
- Display support email from `VITE_SUPPORT_EMAIL`

### Missing Paystack Script
- Show: "Payment system temporarily unavailable. Please try again later."

### Invalid Amount or Missing Email
- Prevent checkout launch, show validation message

---

## Edge Cases (Per AGENTS.md and code-style.md)

- Double-click payment button → disable button during processing
- User refreshes during checkout → recover context from `sessionStorage`
- User closes tab after payment → recover via `sessionStorage` on return
- Success redirect interrupted → check `sessionStorage` before showing Success page
- No internet → show network failure UI with retry
- Zero price data → prevent checkout, show error
- Missing email → prevent checkout, show validation
- Script load failure → show payment system unavailable
- Success page opened directly without payment context → redirect to home
- User refreshes success page → recheck `sessionStorage` payment context

---

## Security Rules (Per security.md)

- Validate payment references before displaying on Success page
- Clear `sessionStorage` after successful payment + redirect to community
- Never store sensitive data (card info, CVV, passwords)
- Use only `VITE_` prefixed environment variables
- Load Paystack scripts from official sources only

---

## Success Definition

Payment starts fast, completes smoothly, handles all AGENTS.md edge cases, and user reaches Success page with full payment context and community access.
