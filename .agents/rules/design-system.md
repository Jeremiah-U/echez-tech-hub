---
trigger: always_on
---

# design-system.md

_Aligned with `Style Tokens/tokens.css` as the style root; all CSS custom properties reference variables defined in that file._

## Brand Direction

Modern, premium, youthful, trustworthy.

Target audience is ambitious young learners.

Aligns with AGENTS.md core principles: conversion-first, simplicity, mobile-first.

---

## Color System

_All values reference `tokens.css` CSS variables; hex values shown for reference._

Primary:

- `var(--color-primary-default)` (#2bbb11)

Secondary:

- `var(--color-secondary-default)` (#FFE600)

Tertiary (replaces legacy "Accent"):

- `var(--color-tertiary-default)` (#1C5EB0)

Neutral:

- `var(--color-neutral-white)` (#FFFFFF)
- `var(--color-neutral-99)` (#FCFCFC)
- `var(--color-neutral-98)` (#FAFAFA)
- `var(--color-neutral-95)` (#F2F2F2)
- `var(--color-neutral-90)` (#E6E6E6)
- `var(--color-neutral-50)` (#808080)
- `var(--color-neutral-10)` (#1A1A1A)

Error (replaces legacy "Danger"):

- `var(--color-error-default)` (#AC2420)

---

## Typography

_Font stack and scales use `tokens.css` definitions exclusively._

Font Recommendation:

- Inter (only, per `tokens.css`)
- Fallback: sans-serif
- _Remove legacy references to Plus Jakarta Sans/Manrope_

---

## Type Scale

_Maps to `tokens.css` typography roles; uses token variables._

Display Large: `var(--typography-display-large-font-size)` / `var(--typography-display-large-line-height)` (54px/64px)
Display Medium: `var(--typography-display-medium-font-size)` / `var(--typography-display-medium-line-height)` (45px/54px)
Display Small: `var(--typography-display-small-font-size)` / `var(--typography-display-small-line-height)` (36px/45px)
Headline Large: `var(--typography-headline-large-font-size)` / `var(--typography-headline-large-line-height)` (32px/38px)
Headline Medium: `var(--typography-headline-medium-font-size)` / `var(--typography-headline-medium-line-height)` (28px/32px)
Headline Small: `var(--typography-headline-small-font-size)` / `var(--typography-headline-small-line-height)` (24px/28px)
Tittle Large: `var(--typography-tittle-large-font-size)` / `var(--typography-tittle-large-line-height)` (22px/26px)
Tittle Medium: `var(--typography-tittle-medium-font-size)` / `var(--typography-tittle-medium-line-height)` (16px/20px)
Tittle Small: `var(--typography-tittle-small-font-size)` / `var(--typography-tittle-small-line-height)` (14px/16px)
Body Extra Large: `var(--typography-body-extra-large-font-size)` / `var(--typography-body-extra-large-line-height)` (20px/24px)
Body Large: `var(--typography-body-large-font-size)` / `var(--typography-body-large-line-height)` (18px/22px)
Body Medium: `var(--typography-body-medium-font-size)` / `var(--typography-body-medium-line-height)` (16px/20px)
Body Small: `var(--typography-body-small-font-size)` / `var(--typography-body-small-line-height)` (14px/16px)
Label Large: `var(--typography-label-large-font-size)` / `var(--typography-label-large-line-height)` (14px/16px)
Label Medium: `var(--typography-label-medium-font-size)` / `var(--typography-label-medium-line-height)` (12px/14px)
Label Small: `var(--typography-label-small-font-size)` / `var(--typography-label-small-line-height)` (10px/12px)

Mobile should scale down appropriately.

---

## Spacing Scale

*Uses `tokens.css` `--number-*` variables exclusively.*

`var(--number-4)` (4px)
`var(--number-6)` (6px)
`var(--number-8)` (8px)
`var(--number-10)` (10px)
`var(--number-12)` (12px)
`var(--number-14)` (14px)
`var(--number-16)` (16px)
`var(--number-18)` (18px)
`var(--number-20)` (20px)
`var(--number-22)` (22px)
`var(--number-24)` (24px)
`var(--number-26)` (26px)
`var(--number-28)` (28px)
`var(--number-32)` (32px)
`var(--number-36)` (36px)
`var(--number-38)` (38px)
`var(--number-40)` (40px)
`var(--number-45)` (45px)
`var(--number-50)` (50px)
`var(--number-54)` (54px)
`var(--number-56)` (56px)
`var(--number-60)` (60px)
`var(--number-62)` (62px)
`var(--number-64)` (64px)
`var(--number-67)` (67px)
`var(--number-72)` (72px)
`var(--number-80)` (80px)
`var(--number-120)` (120px)

Use consistently.

---

## Border Radius

*Uses `tokens.css` `--corner-radius-*` variables exclusively.*

Buttons: `var(--corner-radius-medium)` (8px)
Cards: `var(--corner-radius-large)` (12px)
Inputs: `var(--corner-radius-medium)` (8px)
Sections: `var(--corner-radius-extra-large)` (20px)
Pill: `var(--corner-radius-pill)` (120px)

_Legacy values (10px, 16px, 24px) removed as not defined in `tokens.css`._

---

## Buttons

_Uses `tokens.css` button state variables._

Primary Button:

- Background: `var(--color-button-primary-bg)` (var(--color-primary-default))
- Text: `var(--color-button-primary-label)` (var(--color-primary-on-primary))
- Hover: `var(--color-button-primary-bg-hover)`
- Pressed: `var(--color-button-primary-bg-pressed)`

Secondary Button:

- Background: `var(--color-button-secondary-bg)` (var(--color-secondary-default))
- Text: `var(--color-button-secondary-label)` (var(--color-secondary-on-secondary))
- Border: `var(--color-button-outline-outline)` (var(--color-secondary-40))
- Hover: `var(--color-button-secondary-bg-hover)`
- Pressed: `var(--color-button-secondary-bg-pressed)`

Error Button (replaces Danger):

- Background: `var(--color-error-default)`
- Text: `var(--color-error-on-error)`

---

## Layout Grid

_No `tokens.css` definitions; aligned with AGENTS.md._

Desktop:

- max-width: 1200px

Tablet:

- max-width: 960px

Mobile:

- full width with padding

Section padding:
80px desktop
56px tablet
40px mobile

---

## Components

_Aligned with AGENTS.md; removed "Pricing blocks"._

Must design:

- Navbar
- Hero
- BootcampCard
- CTASection
- Footer
- SuccessCard

---

## UX Rules

_Aligned with AGENTS.md design principles._

- CTA visible above the fold
- Strong hierarchy
- Scan-friendly text
- High contrast
- Generous whitespace
- Mobile-first

---

## Motion

_No `tokens.css` definitions; aligned with AGENTS.md._

Use subtle transitions only:
0.2s to 0.3s ease

No flashy animations.
