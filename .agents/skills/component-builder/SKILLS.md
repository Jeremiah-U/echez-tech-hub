# component-builder SKILLS.md
*Fully aligned with AGENTS.md, code-style.md, design-system.md, architecture.md: enforces exact component list, BEM syntax, design system tokens, edge cases, and non-negotiables.*

## Skill Name

React Component Builder

---

## Purpose

Rapidly create clean, reusable, responsive, conversion-focused UI components for Echez Tech Hub that strictly follow AGENTS.md rules, project design system, and aligned code conventions.

---

## Core Responsibilities

The agent must be able to:

- Build reusable React components matching AGENTS.md exact component list
- Accept clean, data model-aligned props (follow AGENTS.md bootcamp/testimonial/FAQ models)
- Maintain mobile-first responsive layouts per code-style.md
- Follow design-system.md tokens (use CSS custom properties from `variables.css`/`tokens.css`)
- Keep components single-purpose and focused
- Avoid duplicate UI code
- Handle AGENTS.md edge cases (missing data, missing images, interrupted payments)
- Mimic existing codebase conventions when creating components (per code-style.md)

---

## Component Standards

Every component must have:

- Clear name matching AGENTS.md component list exactly
- Single purpose, stored in `src/components/` with exact filenames per architecture.md
- Responsive behavior (mobile-first, `min-width` media queries only)
- Reusable props aligned to AGENTS.md data models
- Clean CSS hooks using BEM double-underscore syntax and design system tokens
- Accessible semantic markup
- Guard clauses for undefined data (optional chaining)

---

## Allowed Component Types (Exact AGENTS.md List Only)

- Navbar.jsx
- Hero.jsx
- BootcampCard.jsx
- CTASection.jsx
- TestimonialCard.jsx
- FAQ.jsx
- Footer.jsx
- SuccessCard.jsx

*No extra components (e.g., PricingCard, Badge, Button, SectionHeader are not permitted per AGENTS.md Non-Negotiables)*

---

## Example Component Structure (Aligned to AGENTS.md Data Model)

```jsx
import { Link } from "react-router-dom";

const BootcampCard = ({ bootcamp }) => {
  return (
    <article className="bootcamp-card">
      {bootcamp?.image ? (
        <img 
          src={bootcamp.image} 
          alt={bootcamp.title} 
          className="bootcamp-card__image"
        />
      ) : (
        <img 
          src="/assets/images/fallback.jpg" 
          alt="Bootcamp fallback" 
          className="bootcamp-card__image"
        />
      )}
      <h3 className="bootcamp-card__title">{bootcamp?.title}</h3>
      <p className="bootcamp-card__duration">{bootcamp?.duration}</p>
      <p className="bootcamp-card__price">{bootcamp?.displayPrice}</p>
      {bootcamp?.slug && (
        <Link 
          to={`/bootcamps/${bootcamp.slug}`} 
          className="bootcamp-card__cta"
        >
          View Details
        </Link>
      )}
    </article>
  );
};

export default BootcampCard;
```

---

## Rules

- One component = one responsibility, stored in `src/components/` with exact AGENTS.md filename
- Keep components under 500 lines (per code-style.md)
- Move repeated UI into shared components
- Use semantic HTML, explicit props matching AGENTS.md data models
- Use props over hardcoding, keep JSX readable
- Mimic existing codebase style when creating new components (per code-style.md)
- Guard against undefined data with optional chaining (`bootcamp?.title`)

---

## Styling Rules

- Use plain CSS only (AGENTS.md: no Tailwind CSS)
- Mandatory: Use CSS custom properties from `src/styles/variables.css` and `Style Tokens/tokens.css` for all colors, spacing, typography (no hardcoded hex/px values, per code-style.md/design-system.md)
- BEM naming convention with **double underscores** (fix legacy single underscore typo):
  ```css
  .bootcamp-card {}
  .bootcamp-card__title {}
  .bootcamp-card__cta {}
  ```
- Avoid inline styles unless dynamic necessity exists (e.g., Paystack button state)

---

## Responsive Rules

- Mobile-first mandatory (AGENTS.md rule):
  - Write base styles for mobile (smallest screens) first
  - Use `min-width` media queries for tablet/desktop breakpoints only
  - Never use `max-width` media queries for base layout styles (per code-style.md)
- Support all AGENTS.md breakpoints: mobile, tablet, desktop

---

## Accessibility Rules

- Use buttons for actions, links for navigation (per code-style.md)
- Alt text for all images, labels for inputs
- Keyboard usable controls, semantic HTML
- High contrast text per design-system.md (aligns with AGENTS.md trust principles)

---

## Anti-Patterns (Includes AGENTS.md Non-Negotiables)

Do NOT:

- Create giant all-in-one components
- Hardcode repeated text or design values (use tokens instead)
- Mix business logic heavily into UI components
- Use random spacing values (use `tokens.css` spacing variables)
- Nest components too deeply
- Add non-AGENTS.md components (PricingCard, Badge, etc.)
- Use Tailwind CSS or any non-approved styling tools
- Add backend logic, auth, or unnecessary dependencies
- Sacrifice mobile UX

---

## Success Definition

Components that are:
- Clean, reusable, and under 500 lines
- Fully responsive (mobile-first, `min-width` breakpoints)
- Accessible and semantic
- Aligned to AGENTS.md data models and edge cases
- Using only design system tokens for styling
- Easy to understand, maintain, and convert visitors to students
