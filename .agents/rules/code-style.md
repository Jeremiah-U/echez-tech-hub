---
trigger: always_on
---

# code-style.md
*Fully aligned with AGENTS.md: enforces tech stack, non-negotiables, data models, edge cases, and mobile-first mandates.*

## Philosophy

Write simple, modern, readable, maintainable code aligned with AGENTS.md core principles: conversion-first, simplicity-first, mobile-first, lean MVP scope.

Prefer clarity over cleverness. Mimic existing codebase conventions when editing files.

---

## JavaScript Rules

- Use functional React components only (no class components)
- Use ES6+ syntax
- Use `const` by default, `let` only for reassignment
- Use arrow functions for clean component/utility definitions
- Import local data *only* from `src/data/` (bootcamps.js, testimonials.js, faqs.js) following AGENTS.md defined data models
- Use `src/utils/paystack.js` for all Paystack logic; never ad-hoc payment code
- Use only `VITE_` prefixed environment variables (never hardcode secret keys, never store non-public values in frontend code)
- When editing existing files: mimic the file's existing code style, use existing utilities (e.g., `src/utils/helpers.js`), and follow established patterns

Good:
```jsx
const BootcampCard = ({ bootcamp }) => {}
```

Bad:
```jsx
function BootcampCard(){}
```

---

## Naming Conventions

### Components (`.jsx` files):
- PascalCase, matching AGENTS.md defined component list exactly
- Examples: `Navbar.jsx`, `BootcampCard.jsx`, `TestimonialCard.jsx`, `SuccessCard.jsx`

### Variables / Functions:
- camelCase
- Examples: `bootcampData`, `handlePayment()`, `formatPrice()`

### Constants:
- UPPER_SNAKE_CASE
- Examples: `MAX_FEATURED_BOOTCAMPS`

### Files:
- Match AGENTS.md folder structure exactly; no extra files outside defined directories
- One component per file, keep files focused (<500 lines)

---

## CSS Rules

- Use plain CSS only (AGENTS.md: no Tailwind CSS)
- Mandatory structure:
  - `src/styles/variables.css` (use CSS custom properties from this file + `Style Tokens/tokens.css` for all colors, spacing, typography; no hardcoded hex/px values)
  - `src/styles/global.css`
  - `src/styles/components.css`
- Naming: Use BEM convention (fix original typo: `hero__title` not `hero**title`)
  - Examples:
    ```css
    .hero {}
    .hero__title {}
    .hero__cta-button {}
    ```
- Mobile-first CSS mandatory (AGENTS.md rule):
  - Write base styles for mobile (smallest screens) first
  - Use `min-width` media queries for tablet/desktop breakpoints only
  - Never use `max-width` media queries for base layout styles
- No inline styles, no CSS-in-JS

---

## React Rules

- Adhere to AGENTS.md 4-page structure only: `Home`, `Bootcamps`, `BootcampDetails`, `Success`. No extra pages.
- All routing defined in `src/routes.jsx` using React Router; no inline routing
- Keep components reusable, explicit props matching AGENTS.md data models (e.g., `BootcampCard` receives `bootcamp` object matching the bootcamp data model)
- Page components handle AGENTS.md edge cases:
  - Invalid bootcamp slugs → redirect to `/bootcamps` with "Bootcamp not found"
  - Missing data → hide broken sections gracefully
  - Paystack errors → show appropriate error/retry UI
  - Success page without payment context → redirect to home
- Keep page-specific logic in page components, presentational UI in shared components
- Avoid unnecessary prop drilling; use local state (`useState`, `useEffect`) only as per AGENTS.md

---

## Comments

Only comment when useful, never comment obvious code. Align comments with AGENTS.md edge case handling when relevant.

Bad:
```jsx
// set name
setName(name)
```

Good:
```jsx
// fallback for interrupted Paystack redirect: check session storage for payment context
```

---

## Error Handling

Guard against all AGENTS.md defined edge cases:
- Use optional chaining for undefined data: `bootcamp?.title`
- Guard against missing images: provide fallback assets if needed
- Handle Paystack callback failures: show "Payment received, check pending" + support reference
- Handle duplicate payment clicks: disable Paystack button during processing
- Redirect invalid routes immediately (e.g., invalid slug → `/bootcamps`)

---

## Formatting

- Consistent 2-space indentation
- Logical spacing between code blocks
- Short, single-responsibility functions
- Clear return blocks for JSX/components

---

## Anti-Patterns (Includes AGENTS.md Non-Negotiables)

Do NOT:
- Nest components deeply
- Use inline giant styles
- Duplicate code repeatedly
- Add random/unnecessary libraries
- Write unclear one-letter variables
- Add backend systems, databases, Node server logic, authentication, or dashboards
- Add unnecessary pages beyond the 4 defined
- Overengineer the MVP with extra features
- Use Tailwind CSS
- Clutter UI or create confusing flows
- Sacrifice mobile UX
- Hardcode environment variables or secret keys in frontend code
