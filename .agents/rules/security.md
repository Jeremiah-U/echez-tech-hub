---
trigger: always_on
---

# security.md
*Fully aligned with AGENTS.md: enforces payment rules, environment variables, edge cases, and non-negotiables.*

## Security Philosophy

Even though this is a frontend-only MVP with no backend (per AGENTS.md Non-Negotiables), basic security hygiene is mandatory to protect users, payment flow, and brand trust. Aligns with AGENTS.md core principles: trustworthy, premium, conversion-focused.

---

## Payment Security

- Payment handled via Paystack only (AGENTS.md rule: no other payment gateways)
- Use Paystack public key only (`VITE_PAYSTACK_PUBLIC_KEY`)
- Never expose secret keys, admin tokens, or sensitive credentials in frontend code
- All payment processing delegated to Paystack: never handle card data, CVV, or passwords directly
- Disable Paystack button during processing to prevent duplicate payment clicks (AGENTS.md edge case)
- Handle Paystack callback failures securely: show "Payment received, check pending. Contact support with reference [ref]" – never expose internal errors

---

## Environment Variables (Frontend-Safe Only, Per AGENTS.md)

Allowed `VITE_` prefixed variables only:
- `VITE_PAYSTACK_PUBLIC_KEY`
- `VITE_SITE_NAME`
- `VITE_SUPPORT_EMAIL`
- `VITE_WHATSAPP_LINK`
- `VITE_GROUP_LINK`

Do not hardcode any sensitive values in source files. Never store non-public or secret keys in frontend code.

---

## Data Safety

- Collect minimum user data required for payment (only email, bootcamp ID, amount per AGENTS.md Payment Session Model)
- No backend database, no user accounts, no auth system (AGENTS.md Non-Negotiables)
- Never store: card data, CVV, passwords, sensitive identity data, or payment references in persistent frontend storage
- Temporary payment context (e.g., payment reference) may use `sessionStorage`, cleared on successful redirect to Success page

---

## Frontend Security Rules

- Validate all route params (e.g., bootcamp slug) before rendering: invalid slugs → redirect to `/bootcamps` with "Bootcamp not found" (AGENTS.md error state)
- Validate payment references before displaying on Success page
- Sanitize any dynamic HTML; avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Success page opened without payment context → redirect to home immediately (AGENTS.md edge case)
- User refreshes Success page → recheck payment context before displaying sensitive info

---

## Link Security

External links (WhatsApp, group links) use:
```html
target="_blank" rel="noopener noreferrer"
```

- Only load external scripts from official Paystack sources (no unknown CDNs)
- Whitelist allowed redirect routes only (AGENTS.md 4 pages): `/`, `/bootcamps`, `/bootcamps/:slug`, `/success`
- Never allow arbitrary redirects

---

## Dependency Rules

- Only install trusted, necessary packages (React, React Router, Paystack SDK)
- Avoid abandoned or unknown npm packages
- Keep dependencies minimal (AGENTS.md: no unnecessary dependencies)
- Never add backend-related, auth, or database packages (AGENTS.md Non-Negotiables)

---

## Browser Security

- Use HTTPS in production for all pages, especially payment flow
- Never deploy payment flow over HTTP
- Prefer official Paystack inline script sources only

---

## Error Messages

Do not expose technical internals. Align with AGENTS.md error states:
- Payment Failed: "Payment failed. Please retry."
- Network Failure: "Connection issue. Please check your network and retry."
- Paystack Callback Failure: "Payment received, check pending. Contact support with reference [ref]"

Bad:
```
API token invalid line 42
```

Good:
```
Payment could not be completed. Please try again.
```

---

## Incident Rules

If payment flow breaks (per AGENTS.md):
1. Disable payment CTA temporarily
2. Show maintenance notice
3. Provide support contact (`VITE_SUPPORT_EMAIL`)

---

## Final Rule

Trust is part of conversion (AGENTS.md). A secure, reliable experience increases enrollment and brand trust.
