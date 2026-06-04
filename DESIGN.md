---
name: Monolith Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  meta-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-padding: 128px
---

## Brand & Style

This design system is built for a Data Science student who operates at the intersection of high-level mathematics and premium storytelling. The aesthetic draws heavily from luxury editorial design and minimalist creative studios, emphasizing intellectual rigor through a "less but better" philosophy. 

The visual language is characterized by:
- **Minimalism:** Extreme reliance on whitespace to allow complex data insights to breathe.
- **Architectural Structure:** A rigorous grid system that mirrors the precision of data science.
- **Intellectual Sophistication:** A high-contrast, monochrome palette that evokes the authority of a legacy publication.
- **Modernity:** Clean, technical sans-serifs paired with high-contrast serifs to bridge the gap between traditional academia and future-facing technology.

The emotional response should be one of quiet confidence, clarity, and uncompromising quality.

## Colors

The color strategy is strictly monochromatic to ensure that the user's data visualizations and portfolio content remain the focal point. 

- **Primary (#000000):** Used for headlines, primary actions, and structural borders. It represents the "ink" of the editorial.
- **Secondary (#FFFFFF):** The canvas. High-brightness white is used to maximize the sense of space and cleanliness.
- **Tertiary (#666666):** A medium-to-deep gray for supporting text and metadata.
- **Neutral (#F5F5F5 / #E5E5E5):** Light grays used for subtle background layering, hairline dividers, and disabled states.

Avoid any use of hue unless it is within the data visualizations themselves, which should follow a similarly desaturated or single-accent color logic.

## Typography

The typography system relies on a high-contrast pairing between **Playfair Display** (Display/Headings) and **Inter** (Body/UI).

- **Headings:** Should be used with tight line-spacing and occasional negative letter-spacing for a "masthead" appearance. Large display sizes are encouraged for impact.
- **Body Text:** Set with generous line-height (at least 1.6x) and slight positive letter-spacing to ensure maximum legibility and a premium, airy feel.
- **Labels:** Small caps with heavy tracking (letter spacing) are used for category labels, breadcrumbs, and eyebrow text to provide a technical, curated look.
- **Numbers:** When displaying data, use Inter with tabular-lining figures to ensure columns of data align perfectly.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** on desktop, centered within the viewport. 

- **Generous Margins:** A minimum of 64px outer margins on desktop creates a "frame" around the content, mimicking a luxury book layout.
- **Section Breathing Room:** Use substantial vertical padding (`section-padding`) between major content blocks to prevent the interface from feeling cluttered.
- **Rhythm:** All spacing must be multiples of 8px. Use larger increments (64px, 128px) for structural layout and smaller increments (8px, 16px) for component internals.
- **Mobile Adaptivity:** On mobile, transition to a 4-column grid with reduced margins (24px) and stack content vertically. High-impact typography should scale down but remain the dominant feature.

## Elevation & Depth

To maintain a minimalist and editorial aesthetic, depth is communicated through **low-contrast outlines** and **tonal layering** rather than traditional shadows.

- **Flat Planes:** Surfaces should feel like sheets of premium paper. Use hairline borders (1px) in light gray (#E5E5E5) to define sections without adding visual weight.
- **Layering:** Use the Neutral background color (#F5F5F5) to distinguish secondary UI areas (like code blocks or sidebars) from the primary canvas.
- **Transitions:** Hover states should use subtle opacity shifts or background color transitions (e.g., from white to a very faint gray) rather than lifting the element with shadows.
- **Ghost Borders:** For buttons and inputs, use a crisp 1px black border to establish presence.

## Shapes

The design system adheres to a **Sharp (0)** roundedness philosophy. 

All buttons, input fields, cards, and image containers must have **0px border radius**. This reinforces the architectural, technical nature of data science and aligns with the "luxury magazine" aesthetic. The sharp corners communicate precision, discipline, and a modern edge. 

Exceptions: Circular elements are permitted only for specific functional UI patterns like radio buttons or small avatar icons, but even these should be avoided where a square alternative exists.

## Components

### Buttons
- **Primary:** Solid black background, white Inter-caps text. No rounded corners.
- **Secondary:** Transparent background, 1px black border. 
- **Interaction:** On hover, the primary button should invert to a white background with a black border.

### Input Fields
- **Styling:** A simple 1px bottom-border (underline style) or a full rectangular border with 0px radius.
- **Focus:** The border weight increases to 2px or transitions to a deep black.
- **Labels:** Always use the `label-caps` style positioned above the input.

### Cards
- **Construction:** No shadows. Use a 1px light gray border or simply rely on whitespace and typography to define the card boundaries.
- **Image Treatment:** Images should be high-contrast or black and white to match the brand. Use a "reveal" animation on scroll for an editorial feel.

### Lists & Data Tables
- **Styling:** Minimalist. No vertical lines; use only horizontal hairline dividers. 
- **Typography:** Use `meta-sm` for secondary data points and ensure tabular figures are used for alignment.

### Chips / Tags
- **Styling:** Small, rectangular boxes with 1px borders and `label-caps` text. Very subtle and unobtrusive.