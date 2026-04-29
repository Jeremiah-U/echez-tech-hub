---
description: Workflow for implementing or updating approved AGENTS.md components only. No new components allowed beyond the 8 approved.
---

# new-component.md
*Fully aligned with AGENTS.md, code-style.md, design-system.md, architecture.md: enforces fixed component list, no new components, and all mandatory rules.*

## Workflow: Implementing/Updating Approved Components Only

Use this process ONLY for the 8 AGENTS.md-approved components: Navbar, Hero, BootcampCard, CTASection, TestimonialCard, FAQ, Footer, SuccessCard. **No new components are allowed** (AGENTS.md Non-Negotiables).

---

## Step 1: Validate Component Approval

Ask:
- Is this component in the AGENTS.md approved list?
- Does it solve a problem aligned with the 8 approved components?

Allowed components only:
- Navbar.jsx
- Hero.jsx
- BootcampCard.jsx
- CTASection.jsx
- TestimonialCard.jsx
- FAQ.jsx
- Footer.jsx
- SuccessCard.jsx

*Prohibited examples (do not create): Button, Card, SuccessHero, SectionHeader, Badge*

---

## Step 2: Name Clearly

Use PascalCase, exact AGENTS.md filename:
- Correct: `BootcampCard.jsx`
- Incorrect: `bootcamp-card.jsx`, `Button.jsx`

---

## Step 3: Choose Folder

All components are stored in:
```
src/components/
```

*No page-specific folders, no subfolders (per architecture.md). Page-specific logic belongs in page components, not shared component folders.*

---

## Step 4: Define Props

Align with AGENTS.md data models only:
- BootcampCard: Use full bootcamp data model (id, slug, title, price, displayPrice, image, etc.)
- TestimonialCard: Use testimonials.js data model
- FAQ: Use faqs.js data model
- SuccessCard: Use Payment Session Model (bootcampId, title, email, reference, status)

Bad:
```jsx
componentDataEverything
```

Good (BootcampCard example):
```jsx
const BootcampCard = ({ bootcamp }) => {}
```

---

## Step 5: Build Markup

- Use functional React components only (code-style.md)
- Use semantic HTML (section, article, nav, button, footer)
- Mimic existing codebase style (code-style.md)
- Use optional chaining for undefined data: `bootcamp?.title`
- Guard against missing images with fallbacks (AGENTS.md edge case)

---

## Step 6: Add Styling Hooks

- Use plain CSS only (no Tailwind CSS, AGENTS.md Non-Negotiables)
- Mandatory BEM double-underscore syntax (fix legacy single `*` typo):
  ```css
  .hero {}
  .hero__title {}
  .hero__cta {}
  ```
- Use CSS custom properties from `src/styles/variables.css` and `Style Tokens/tokens.css` for all values (no hardcoded hex/px, code-style.md)
- No per-component CSS files (e.g., no Button.css). All styles go in `src/styles/components.css` (code-style.md)
- No inline styles unless dynamic necessity (e.g., Paystack button state)

---

## Step 7: Make Responsive (Mobile-First Mandatory)

Align with AGENTS.md and code-style.md:
- Write base styles for mobile (smallest screens) first
- Use `min-width` media queries for tablet/desktop breakpoints only
- Never use `max-width` media queries for base layouts
- Check mobile stacking, tablet spacing, desktop alignment

---

## Step 8: Add States (AGENTS.md Edge Cases)

Handle all required states:
- Loading: Disable payment buttons during processing (prevent duplicate clicks)
- Empty: Handle empty bootcamp lists, missing data (hide broken sections gracefully)
- Error: Payment failed, network error, invalid slug redirects
- Active/Hover: Strong hover states for CTAs per design-system.md
- Missing image: Fallback to `/assets/images/fallback.jpg`

---

## Step 9: Accessibility Check

Confirm (code-style.md/design-system.md):
- Keyboard usable controls
- Readable labels for inputs
- Alt text for all images
- High contrast text per design system
- Buttons for actions, links for navigation

---

## Step 10: Reusability Check (Approved Components Only)

Ask:
- Is this an approved shared component?
- Are props simplified and decoupled from page logic?

*No new shared components allowed. Reusability only applies to the 8 approved shared components.*

---

## Step 11: Final QA

Check against all aligned rules:
- No console errors
- Clean 2-space indentation (code-style.md)
- Correct typography using design-system.md tokens
- Responsive behavior (mobile-first, min-width breakpoints)
- Matches design system tokens (no hardcoded values)
- Aligns with AGENTS.md Non-Negotiables: no Tailwind, no backend, no unnecessary dependencies
- Uses `src/utils/paystack.js` for payment logic (code-style.md)
- Props align with AGENTS.md data models

---

## Example Output (Approved Component Only)

Update existing:
```
src/components/BootcampCard.jsx
src/styles/components.css
```

Props (aligned to AGENTS.md bootcamp model):
```jsx
const BootcampCard = ({ bootcamp }) => {}
```

*No per-component CSS files. All styles in `src/styles/components.css`.*

---

## Non-Negotiables (AGENTS.md + Aligned Rules)

- No new components beyond the 8 approved
- No bloated components
- No unclear prop names
- No broken mobile layouts
- No duplicated UI patterns
- No Tailwind CSS
- No backend logic, auth, or databases
- No unnecessary dependencies
- No hardcoded design values (use tokens)
- No sacrificing mobile UX

---

## Success Definition

The component:
- Is one of the 8 AGENTS.md approved components
- Uses only approved props aligned to data models
- Is fully responsive (mobile-first)
- Handles all AGENTS.md edge cases
- Uses only design system tokens for styling
- Follows all code-style.md and security.md rules
- Converts visitors to students effectively

```
