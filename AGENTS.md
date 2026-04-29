# AGENTS.md — Echez Tech Hub Website

## What This Product Is

Echez Tech Hub is a conversion-focused frontend website for a cohort-based tech academy. Its main purpose is to turn website visitors into enrolled students through a fast, clear, trust-driven experience.

The website helps users:

- Discover available tech bootcamps
- Understand course outcomes quickly
- Trust the academy brand
- Make payment seamlessly using Paystack
- Gain immediate access to the private academy community after payment

This is an MVP website with lean scope and no backend complexity.

The product must feel modern, credible, beginner-friendly, and conversion-driven.

---

## Core Promise

**Start building real tech skills that pay.**

Echez Tech Hub helps ambitious learners move from interest to action through practical cohort bootcamps designed for career growth.

---

## Tech Stack

Use only:

- React
- JavaScript
- HTML5
- CSS3

Recommended tools:

- React Router (for page routing)
- Paystack Inline / Popup Integration
- Local JSON / JS data files
- Vite or CRA (preferred: Vite)

Do NOT use:

- Tailwind CSS
- Backend frameworks
- Databases
- Node server logic
- Authentication systems
- Dashboards
- Unnecessary dependencies

---

## Folder Structure

```txt
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

---

## Data Models

{
  id: 1,
  slug: "frontend-development",
  title: "Frontend Development Bootcamp",
  category: "Development",
  price: 50000,
  displayPrice: "₦50,000",
  duration: "8 Weeks",
  level: "Beginner",
  startDate: "2026-06-10",
  image: "/assets/images/frontend.jpg",
  shortDescription: "Learn modern frontend development from scratch.",
  fullDescription: "Hands-on training covering HTML, CSS, JavaScript and React.",
  curriculum: [
    "HTML Foundations",
    "CSS Layouts",
    "JavaScript Basics",
    "React Fundamentals"
  ],
  outcomes: [
    "Build real projects",
    "Portfolio ready",
    "Freelance readiness"
  ],
  instructor: "ETH Mentor Team",
  featured: true
}
```

## Payment Session Model

{
bootcampId: 1,
title: "Frontend Development Bootcamp",
email: "user@email.com",
amount: 50000,
currency: "NGN",
reference: "ETH_123456",
status: "success"
}

## Key Business Rules

- Only four pages exist:
- Home
- Bootcamps List
- Bootcamp Details
- Payment Success / Group Link
- Every page must drive clarity or conversion.
- User should understand the value proposition within first 5–10 seconds.
- CTA buttons must be visible above the fold where relevant.
- Payment is handled via Paystack only.
- After successful payment, redirect user to Success page.
- Success page must contain:
- Congratulations message
- Purchased bootcamp name
- Join private community button
- Next steps message
- No login/signup system.
- No backend database required.
- Bootcamp content is stored locally in JS/JSON.
- Mobile-first responsive design is mandatory.
- Website should feel trustworthy, modern, premium, and simple.

## Environment Variables Required

VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
VITE_SITE_NAME=Echez Tech Hub
VITE_SUPPORT_EMAIL=support@echeztechhub.com
VITE_WHATSAPP_LINK=https://wa.me/xxxxxxxxxxx
VITE_GROUP_LINK=https://chat.whatsapp.com/your-group-link

Only expose frontend-safe public values.

Do NOT store secret keys in frontend code.

## User Flows

### Visitor lands on Home

- Reads hero section
- Clicks Browse Bootcamps
- Opens Bootcamps page
- Selects bootcamp
- Opens Bootcamp Details page
- Clicks Enroll Now
- Paystack popup opens
- User pays
- Redirect to Success page
- Click Join Community

### Visitor lands directly on Bootcamp Details page

- Reads offer
- Pays
- Redirect to Success page

## Error State

### Payment Failed

- Show Payment failed message
- Retry payment CTA
- Retry payment CTA

### Network Failure

- Show connection issue message
- Retry button

### Invalid Bootcamp Slug

- Redirect to Bootcamps page with message: Bootcamp not found

### Missing Data

- Hide broken sections gracefully.

### Paystack Callback Failure

- Show Payment received check pending
- Contact support with reference

## Edge Cases the Agent Must Handle

- User closes tab after payment.
- Payment successful but redirect interrupted.
- Duplicate payment click attempts.
- Invalid bootcamp route URL.
- Empty bootcamp list.
- Very slow mobile network.
- User opens site on small screens.
- Long bootcamp titles breaking cards.
- Missing image assets.
- Payment success page opened directly without payment context.
- User refreshes success page.
- External links fail to open.

## Design Direction for Agent

### Build with these principles:

- Conversion first
- Simplicity first
- Fast loading
- Strong hierarchy
- Scan-friendly layout
- Premium spacing
- Clear typography
- Obvious CTA buttons
- Trust-building sections
- Minimal friction

## Non-Negotiables

- Do not add backend systems.
- Do not add unnecessary pages.
- Do not overengineer the MVP.
- Do not create confusing flows.
- Do not use Tailwind CSS.
- Do not clutter UI.
- Do not sacrifice mobile UX.

## Success Definition

### The website is successful when users can:

- Understand the offer instantly
- Browse bootcamps easily
- Trust the academy
- Pay smoothly
- Join community immediately
- Use the site comfortably on mobile
