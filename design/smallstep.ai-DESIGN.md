---
version: alpha
name: "Smallstep AI – Warm Gradient Hero"
description: "smallstep.ai is an AI product landing page built on Framer. The hero section features a warm blush-to-white radial gradient background, a centered pill-shaped navigation bar with a subtle multi-layer shadow, and a large bold Inter headline. A teal-and-orange logomark anchors the brand identity. Section headings use Inter at extreme weights (700) and large sizes (60–120px), while body copy uses Inter at medium weight. A secondary product name \"MISAL\" is rendered in a heavy orange Inter display style. General Sans appears for subheadings and link labels. The overall palette is restrained: near-black text on white/light surfaces, with orange (#fe911c) and teal (#2ca9a8) as the only chromatic accents."
colors:
  misal-orange: "#fe911c"
  surface-white: "#ffffff"
  teal-accent: "#2ca9a8"
  deep-navy: "#001122"
  ink-black: "#000000"
  light-grey: "#888888"
  mid-grey: "#666666"
  off-black: "#2a2b2b"
  hairline-grey: "#e6e6e6"
typography:
  hero-display:
    fontFamily: "Inter"
    fontSize: "60px"
    fontWeight: "700"
    lineHeight: "72px"
    letterSpacing: "-3.8px"
  mega-display:
    fontFamily: "Inter"
    fontSize: "120px"
    fontWeight: "700"
    lineHeight: "180px"
    letterSpacing: "-0.5px"
  section-heading-large:
    fontFamily: "Inter"
    fontSize: "72px"
    fontWeight: "700"
    lineHeight: "86.4px"
  section-heading-medium:
    fontFamily: "Inter"
    fontSize: "50px"
    fontWeight: "700"
    lineHeight: "60px"
    letterSpacing: "-2.1px"
  subheading:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "43.2px"
  general-sans-subhead:
    fontFamily: "General Sans"
    fontSize: "27px"
    fontWeight: "600"
    lineHeight: "27px"
  general-sans-body:
    fontFamily: "General Sans"
    fontSize: "18px"
    fontWeight: "500"
    lineHeight: "27px"
  ui-label-medium:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: "600"
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  ui-label-small:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: "500"
    lineHeight: "25.6px"
  caption:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "21px"
rounded:
  pill: "30px"
  card: "20px"
  small: "8px"
spacing:
  xs: "4px"
  sm: "10px"
  md: "15px"
  base: "20px"
  lg: "30px"
  xl: "50px"
  2xl: "66px"
  3xl: "100px"
components:
  content-heading-general-sans-subhead:
    textColor: "{colors.off-black}"
    fontSize: "27px"
    fontWeight: "600"
    fontFamily: "General Sans"
    lineHeight: "27px"
  content-heading-h2-default:
    textColor: "{colors.ink-black}"
    fontSize: "18px"
    fontWeight: "700"
    backgroundColor: "transparent"
    rounded: "0px"
  hero-section-h1-display:
    textColor: "{colors.deep-navy}"
    fontSize: "60px"
    fontWeight: "700"
    lineHeight: "72px"
    letterSpacing: "-3.8px"
    padding: "0px"
  hero-section-section-header-container:
    padding: "{spacing.3xl}"
    backgroundColor: "transparent"
  misal-feature-section-display:
    textColor: "{colors.misal-orange}"
    fontSize: "120px"
    fontWeight: "700"
    fontFamily: "Inter"
    letterSpacing: "-0.5px"
  navigation:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    boxShadow: "rgba(186,186,186,0.447) 0px 0.6px 0.6px -1.25px, rgba(186,186,186,0.392) 0px 2.29px 2.29px -2.5px, rgba(186,186,186,0.157) 0px 10px 10px -3.75px"
    padding: "10px 30px 10px 20px"
    textColor: "{colors.ink-black}"
  navigation-link-accent-misal:
    textColor: "{colors.misal-orange}"
    textDecoration: "none"
  navigation-link-current:
    textColor: "#111111"
    textDecoration: "none"
  navigation-link:
    textColor: "{colors.off-black}"
    fontSize: "27px"
    textDecoration: "none"
  page-section-content-block:
    backgroundColor: "transparent"
    padding: "20px 0px 0px"
  page-section-white-surface:
    backgroundColor: "{colors.surface-white}"
    padding: "0px"
---

## Overview

smallstep.ai is an AI product landing page built on Framer. The hero section features a warm blush-to-white radial gradient background, a centered pill-shaped navigation bar with a subtle multi-layer shadow, and a large bold Inter headline. A teal-and-orange logomark anchors the brand identity. Section headings use Inter at extreme weights (700) and large sizes (60–120px), while body copy uses Inter at medium weight. A secondary product name "MISAL" is rendered in a heavy orange Inter display style. General Sans appears for subheadings and link labels. The overall palette is restrained: near-black text on white/light surfaces, with orange (#fe911c) and teal (#2ca9a8) as the only chromatic accents.

**Signature traits:**
- Dual typeface system: Pairs Inter and General Sans across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 30px.
- Layered elevation: Depth comes from 2 validated shadow tokens.

## Colors

The palette uses 9 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **content-text** maps to `ink-black`: Role "text" is grounded by usage context "Primary body text, nav text, default foreground across all zones".
- **action-text** maps to `off-black`: Role "text" is grounded by usage context "Navigation links and secondary heading text".
- **surface-background** maps to `surface-white`: Role "background" is grounded by usage context "Nav pill background, card surfaces, page base".
- **action-background** maps to `misal-orange`: Role "background" is grounded by usage context "MISAL product name display text, nav 'Misal' link highlight, brand accent".

### Text Scale
- **Deep Navy** (#001122): Hero H1 heading text — darkest heading color. Role: text. {authored: rgb(0, 17, 34), space: rgb}
- **Ink Black** (#000000): Primary body text, nav text, default foreground across all zones. Role: text. {authored: rgb(0, 0, 0), space: rgb}
- **Light Grey** (#888888): Footer tertiary text, captions. Role: text. {authored: rgb(136, 136, 136), space: rgb}
- **Mid Grey** (#666666): Footer secondary text, muted labels. Role: text. {authored: rgb(102, 102, 102), space: rgb}
- **Off-Black** (#2a2b2b): Navigation links and secondary heading text. Role: text. {authored: rgb(42, 43, 43), space: rgb}

### Interactive
- **Hairline Grey** (#e6e6e6): Subtle dividers and border hairlines. Role: border. {authored: rgb(230, 230, 230), space: rgb}

### Surface & Shadows
- **Misal Orange** (#fe911c): MISAL product name display text, nav 'Misal' link highlight, brand accent. Role: background. {authored: rgb(254, 145, 28), space: rgb}
- **Surface White** (#ffffff): Nav pill background, card surfaces, page base. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **Teal Accent** (#2ca9a8): Logo dots, teal brand mark element. Role: background. {authored: rgb(44, 169, 168), space: rgb}

## Typography

Typography uses Inter, General Sans across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Inter and General Sans for visual contrast. Weight range spans bold, semi-bold, medium. Sizes range from 14px to 120px.

### Font Roles
- **Headline Font**: Inter
- **Body Font**: Inter

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Primary hero H1 headline — largest display text | Inter | 60px | 700 | 72px | -3.8px | Inter, Inter Placeholder, sans-serif | Extracted token |
| Oversized product name display (MISAL) | Inter | 120px | 700 | 180px | -0.5px | Inter, Inter Placeholder, sans-serif | Extracted token |
| Large section headings | Inter | 72px | 700 | 86.4px | normal | Inter, Inter Placeholder, sans-serif | Extracted token |
| Mid-size section headings | Inter | 50px | 700 | 60px | -2.1px | Inter, Inter Placeholder, sans-serif | Extracted token |
| Sub-section headings | Inter | 36px | 700 | 43.2px | normal | Inter, Inter Placeholder, sans-serif | Extracted token |
| Product/section subheadings, nav brand name | General Sans | 27px | 600 | 27px | normal | General Sans, General Sans Placeholder, sans-serif | Extracted token |
| Body copy, descriptive paragraphs | General Sans | 18px | 500 | 27px | normal | General Sans, General Sans Placeholder, sans-serif | Extracted token |
| UI labels, card titles | Inter | 20px | 600 | 28px | -0.5px | Inter, Inter Placeholder, sans-serif | Extracted token |
| Navigation items, small UI labels | Inter | 16px | 500 | 25.6px | normal | Inter, Inter Placeholder, sans-serif | Extracted token |
| Captions, metadata, fine print | Inter | 14px | 500 | 21px | normal | Inter, Inter Placeholder, sans-serif | Extracted token |

## Layout

Responsive system uses 3 breakpoint tier(s): mobile, tablet, wide.

This system uses a 10px base grid with scale values 4, 10, 15, 20, 30, 50, 66, 100.

### Responsive Strategy
- **mobile (<= 809px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (810-1199px)**: Increase spacing and column structure for medium-width viewports.
- **wide (1440-1919px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 10px | 10 | Extracted spacing token |
| md | 15px | 15 | Extracted spacing token |
| base | 20px | 20 | Extracted spacing token |
| lg | 30px | 30 | Extracted spacing token |
| xl | 50px | 50 | Extracted spacing token |
| 2xl | 66px | 66 | Extracted spacing token |
| 3xl | 100px | 100 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| nav-pill | 3 | 0px 0.602187px 0.602187px -1.25px rgba(186, 186, 186, 0.447) |
| card-elevation | 6 | 0px 0.706592px 0.706592px -0.625px rgba(0, 0, 0, 0.15) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(16px) |
| Light | outline-color | rgb(0, 0, 0) ; rgb(255, 255, 255) ; rgb(0, 17, 34) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1) ; matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0.235833, 0, 1, -0.000833333, -283, 0, 0, 1) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| small | 8px | 8 | Control corner |
| card | 20px | 20 | Card corner |
| pill | 30px | 30 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| pill | 30px | px |
| card | 20px | px |
| small | 8px | px |

## Components

Components should be recreated from token references first, then tuned with variant notes and probe-backed state guidance.
- **Pill Navigation Bar**: Centered floating pill-shaped nav with white background, 30px border-radius, multi-layer soft shadow, brand name on left and nav links on right
- **Hero Heading**: Full-width centered hero with large bold Inter headline, subtitle in General Sans, on a warm blush-to-white gradient background
- **Product Name Display**: Large bold orange product name 'MISAL' rendered at display scale with a Devanagari script illustration alongside
- **Section Subheading**: H2-level subheadings in Inter or General Sans at medium-large sizes
- **Nav Link**: Inline navigation anchor links with hover and current-state color overrides
- **Content Section**: Full-width page section containers with white background and standard padding

### Content Heading

**General Sans Subhead**
- textColor: #2a2b2b
- fontSize: 27px
- fontWeight: 600
- fontFamily: General Sans
- lineHeight: 27px
- State guidance: Used for nav brand name and section subheadings.

**H2 Default**
- textColor: #000000
- fontSize: 18px
- fontWeight: 700
- backgroundColor: transparent
- rounded: 0px
- State guidance: Probe-confirmed: h2.framer-text.

### Hero Section

**H1 Display**
- textColor: #001122
- fontSize: 60px
- fontWeight: 700
- lineHeight: 72px
- letterSpacing: -3.8px
- padding: 0px
- State guidance: Probe-confirmed: h1.framer-text. Deep navy color on gradient background.

**Section Header Container**
- padding: 100px
- backgroundColor: transparent
- State guidance: Probe-confirmed: header.framer-xu6vh1. 100px padding creates generous vertical breathing room.

### MISAL Feature Section

**Display**
- textColor: #fe911c
- fontSize: 120px
- fontWeight: 700
- fontFamily: Inter
- letterSpacing: -0.5px
- State guidance: Orange brand accent color used exclusively for product name at mega display scale.

### Navigation

**Default**
- backgroundColor: #ffffff
- rounded: 30px
- boxShadow: rgba(186,186,186,0.447) 0px 0.6px 0.6px -1.25px, rgba(186,186,186,0.392) 0px 2.29px 2.29px -2.5px, rgba(186,186,186,0.157) 0px 10px 10px -3.75px
- padding: 10px 30px 10px 20px
- textColor: #000000
- State guidance: Probe-confirmed: nav.framer-j5GJ5. Brand name 'smallstep.ai' in teal, nav links in near-black, 'Misal' link in orange accent.

### Navigation Link

**Accent (Misal)**
- textColor: #fe911c
- textDecoration: none
- State guidance: Orange accent applied to 'Misal' nav link as brand highlight.

**Current**
- textColor: #111111
- textDecoration: none
- State guidance: CSS variable --framer-link-current-text-color: #111111

**Default**
- textColor: #2a2b2b
- fontSize: 27px
- textDecoration: none
- State guidance: Probe-confirmed: a.framer-text. Near-black default state.

### Page Section

**Content Block**
- backgroundColor: transparent
- padding: 20px 0px 0px
- State guidance: Probe-confirmed: div.framer-7j24qr. Top-padded content block.

**White Surface**
- backgroundColor: #ffffff
- padding: 0px
- State guidance: Probe-confirmed: div.framer-Srdkv. White background content area below hero.

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry, Layered elevation without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Breakpoint 1 | <= 809px | (max-width: 809px) |
| Tablet | 810-1199px | (min-width: 810px) and (max-width: 1199px) |
| Desktop | 1440-1919px | (min-width: 1440px) and (max-width: 1919px) |
| Desktop | >= 1920px | (min-width: 1920px) |

## Agent Prompt Guide

### Example Component Prompts
- Create Content Section variant that preserves Full-width page section containers with white background and standard padding.
- Create Hero Heading variant that preserves Full-width centered hero with large bold Inter headline, subtitle in General Sans, on a warm blush-to-white gradient background.
- Create Nav Link variant that preserves Inline navigation anchor links with hover and current-state color overrides.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
