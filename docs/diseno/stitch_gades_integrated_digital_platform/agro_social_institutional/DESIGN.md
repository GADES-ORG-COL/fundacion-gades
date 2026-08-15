---
name: Agro-Social Institutional
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#424751'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#1e5eaa'
  primary: '#004486'
  on-primary: '#ffffff'
  primary-container: '#1a5ca8'
  on-primary-container: '#c0d6ff'
  inverse-primary: '#a8c8ff'
  secondary: '#346b00'
  on-secondary: '#ffffff'
  secondary-container: '#aef379'
  on-secondary-container: '#377000'
  tertiary: '#004b60'
  on-tertiary: '#ffffff'
  tertiary-container: '#0c647e'
  on-tertiary-container: '#99dffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#004689'
  secondary-fixed: '#b0f57b'
  secondary-fixed-dim: '#95d862'
  on-secondary-fixed: '#0b2000'
  on-secondary-fixed-variant: '#265100'
  tertiary-fixed: '#bbe9ff'
  tertiary-fixed-dim: '#8bd0ee'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d63'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-bold:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is rooted in the intersection of institutional reliability and organic growth. It bridges the gap between high-level environmental management and grassroots community development. The style is **Corporate / Modern** but softened by a friendly, social layer.

The visual language emphasizes transparency and clarity through significant whitespace—mimicking the openness of an ecological landscape. Every interaction should feel intentional and grounded, evoking feelings of trust, sustainability, and collective progress. The interface avoids cold, clinical rigidity in favor of a warm, accessible professionalism that welcomes farmers, social stakeholders, and administrative partners alike.

## Colors

The palette is anchored by "Azul GADES," representing institutional stability. This is complemented by "Green," which serves as the biological heartbeat of the system, signaling growth and sustainability. 

- **Primary & Dark Blue:** Used for core branding, primary actions, and navigational anchors.
- **Pale Blue:** Utilized as a soft alternative to pure white for section backgrounds to reduce eye strain and add depth.
- **Teal Accents:** Dark Teal is reserved for secondary headers to differentiate content hierarchy, while Light Teal provides energetic support for success states or infographics.
- **Neutrals:** Typography uses a high-contrast off-black for readability, while secondary text uses a softer slate blue to maintain a cohesive cool-toned atmosphere.

## Typography

This design system utilizes **Public Sans**, a font originally designed for government and institutional use. It provides the necessary clarity and authority for a foundation while remaining accessible and neutral.

Headlines should be set with tighter letter spacing to create a sense of modern impact. Body text uses a generous line height (1.5 - 1.6) to ensure that dense reports or community updates remain legible. Labels for buttons and metadata are set in semi-bold weights with slight tracking (letter spacing) to improve scanability at smaller sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a 1200px container to maintain an intimate, readable line length. It employs a 12-column structure with 24px gutters.

The spacing philosophy is "Air First." By utilizing the `xxl` (80px) spacing between major sections, the design system avoids the cluttered feel often found in institutional sites. Internal component padding should be generous—prioritizing white space to signal "Environmental Clarity." Small elements use an 8px base unit to maintain mathematical rhythm.

## Elevation & Depth

To maintain a professional and clean aesthetic, this design system uses **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows.

- **Surface Depth:** Interactive cards use a subtle 1px border (#E7E6E6). On hover, they shift to a very soft, diffused ambient shadow tinted with the primary blue (e.g., `rgba(26, 92, 168, 0.08)`).
- **Z-Index Strategy:** Overlays and modals use a soft backdrop blur (Glassmorphism) to keep the user grounded in the context of the environment they are currently viewing.
- **Header Elevation:** The main navigation remains flat but uses a slight tint change (from White to Pale Blue) to distinguish itself from the content during scroll.

## Shapes

The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This specific curvature is chosen to break the rigidity of institutional layouts, making the "GADES" experience feel more human and social.

- **Buttons & Chips:** Use `rounded-lg` (16px) or full pills to feel inviting and soft to the touch.
- **Cards & Modals:** Use the base `rounded` (8px) to provide structure while remaining friendly.
- **Imagery:** Environmental and community photography should also feature rounded corners to blend into the interface.

## Components

- **Buttons:** Primary buttons are Azul GADES with white text. Secondary buttons use the Green palette. All buttons feature a 200ms transition and slightly increased horizontal padding (24px) for a more "approachable" feel.
- **Chips/Tags:** Used for categorizing sustainability topics. These use the Pale Blue background with Azul GADES text, or a light lime background for active "environmental" filters.
- **Cards:** White background with a soft border. Cards used for "Projects" should feature a top-heavy layout with a rounded image, a Teal header, and a clear call to action.
- **Input Fields:** Minimalist design with a focus on clear focus states. The focus ring should use the Primary Blue with a 4px offset.
- **Iconography:** Use line icons with a slightly rounded terminal. Icons should be drawn from agriculture (leaves, seeds, soil), community (people groups, hands, connection), and sustainability (renewable energy, recycling loops).
- **Progress Bars:** For social impact tracking, use the Light Teal for the progress fill to symbolize health and growth.