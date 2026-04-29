---
trigger: always_on
---

# architecture.md
*Fully aligned with AGENTS.md: matches tech stack, folder structure, business rules, non-negotiables, and edge cases.*

## Product Overview

Echez Tech Hub is a conversion-focused, frontend-only React MVP for a cohort-based tech academy. Primary goal: turn visitors into enrolled students via a fast, clear, trust-driven flow with no backend complexity.

Core Promise: **Start building real tech skills that pay.**  
Aligns with AGENTS.md principles: conversion-first, simplicity-first, mobile-first, fast loading.

---

## Tech Stack
### Use Only:
- React
- JavaScript
- HTML5
- CSS3

### Recommended Tools:
- Vite (preferred over CRA)
- React Router (page routing)
- Paystack Inline / Popup Integration
- Local JSON / JS data files

### Do NOT Use (AGENTS.md Non-Negotiables):
- Tailwind CSS
- Backend frameworks
- Databases
- Node server logic
- Authentication systems
- Dashboards
- Unnecessary dependencies

---

## System Architecture

Frontend SPA (Single Page Application) with no server/backend/database/auth.

Full User Flow (per AGENTS.md):
User Browser → React App → Local Bootcamp Data → Paystack Payment Popup → Success Page → Private Community

Payment is Paystack-only; no other payment gateways.

---

## App Pages (4 Total, No Extra Pages)
1. **Home**: Hero, bootcamp previews, CTAs, trust sections
2. **Bootcamps List**: All available bootcamps
3. **Bootcamp Details**: Full bootcamp info, Enroll CTA
4. **Success / Group Link**: Mandatory content per AGENTS.md:
   - Congratulations message
   - Purchased bootcamp name
   - Join private community button
   - Next steps message

---

## Folder Structure (Exact Match to AGENTS.md)
```
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── BootcampCard.jsx
│   ├── CTASection.jsx
│   ├── TestimonialCard.jsx
│   ├── FAQ.jsx
│   ├── SuccessCard.jsx
│
├── data/
│   ├── bootcamps.js
│   ├── testimonials.js
│   ├── faqs.js
│
├── pages/
│   ├── Home.jsx
│   ├── Bootcamps.jsx
│   ├── BootcampDetails.jsx
│   ├── Success.jsx
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   ├── components.css
│
├── utils/
│   ├── paystack.js
│   ├── helpers.js
│
├── App.jsx
├── main.jsx
└── routes.jsx
```

---

## Component Architecture
### Shared Components (Exact AGENTS.md List):
- Navbar
- Footer
- Hero
- BootcampCard
- CTASection
- TestimonialCard
- FAQ
- SuccessCard

### Page Components:
- Home
- Bootcamps
- BootcampDetails
- Success

---

## Routing Structure
| Path               | Page               | Notes                                  |
|---------------------|--------------------|----------------------------------------|
| `/`                 | Home               |                                        |
| `/bootcamps`        | Bootcamps List     |                                        |
| `/bootcamps/:slug`  | Bootcamp Details   | Invalid slug → redirect to `/bootcamps` with "Bootcamp not found" message |
| `/success`          | Success            | Only accessible after valid payment    |

---

## Data Source
- Local JS/JSON files in `/data` (no backend/database)
- Follows AGENTS.md Data Models for bootcamps, testimonials, FAQs
- Payment Session Model stored temporarily in React state (no persistence)

---

## State Management
- React local state only: `useState`, `useEffect`, `useMemo` (if needed)
- No Redux, Context API, or heavy state libraries
- No auth state, no backend-synced state

---

## Environment Variables (Frontend-Safe Only)
```
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
VITE_SITE_NAME=Echez Tech Hub
VITE_SUPPORT_EMAIL=support@echeztechhub.com
VITE_WHATSAPP_LINK=https://wa.me/xxxxxxxxxxx
VITE_GROUP_LINK=https://chat.whatsapp.com/your-group-link
```
*Do NOT store secret keys in frontend code.*

---

## Performance Rules
- Mobile-first responsive design mandatory
- Lazy load images, compress all assets
- Reuse components, keep bundle lean
- Avoid unnecessary packages
- Optimize for slow mobile networks
- Code split routes (Vite dynamic imports)

---

## Error Handling & Edge Cases (Per AGENTS.md)
### Error States:
- Payment Failed: Show message + Retry CTA
- Network Failure: Show connection message + Retry button
- Invalid Bootcamp Slug: Redirect to /bootcamps with "Bootcamp not found"
- Missing Data: Hide broken sections gracefully
- Paystack Callback Failure: Show "Payment received, check pending" + contact support with reference

### Edge Cases Handled:
- User closes tab after payment
- Payment success but redirect interrupted
- Duplicate payment clicks
- Empty bootcamp list
- Long bootcamp titles, missing images
- Success page opened without payment context
- User refreshes success page

---

## Build Priority Order (Mobile-First From Start)
1. Project setup (Vite + environment variables)
2. Routing setup (all 4 pages, error redirects)
3. Global styles + mobile-first base styles
4. Shared components (all, built mobile-first)
5. Home page
6. Bootcamps page
7. Bootcamp Details page
8. Paystack integration + error handling
9. Success page
10. Final QA (edge cases, mobile testing, conversion flow check)
