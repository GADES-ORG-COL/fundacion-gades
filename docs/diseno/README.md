# GADES Design System

## About GADES

**Fundación GADES** (Fundación para la Gestión Agro Ambiental y el Desarrollo Empresarial y Social) is a Colombian non-profit organization (ONG sin ánimo de lucro) founded in 1997 in Palmira, Valle del Cauca. NIT: 815.000.850-0.

**Tagline:** *"Hacemos Gestión Ambiental con Responsabilidad Social"*

**Core mission:** Environmental management consulting, social development, technical assistance for public and private entities. Areas include: agricultural/environmental project management, watershed protection, basic sanitation, community capacity-building, and business development for rural and marginalized communities.

**Geographic scope:** National (Colombia) — primary implementations in Palmira, Candelaria, Pradera, Florida, El Cerrito, Guacarí, Darién, and Ginebra (Valle del Cauca region).

**Products / Surfaces represented:**
- Institutional presentation deck (PDF/PPTX)
- Pendon/banner material
- Website: www.fundaciongades.org.co (repo: amgallego8/gades_webpage — appeared empty at time of system creation)

**Sources provided:**
- `uploads/Presentacion GADES.pptx` — 17-slide institutional presentation
- `uploads/Pendon GADES.pptx` — banner/pendon with logo assets
- GitHub repo: `amgallego8/gades_webpage` (private, was empty at time of build)

---

## CONTENT FUNDAMENTALS

**Language:** Spanish (Colombian). All institutional copy is in Spanish.

**Tone:** Formal, institutional, technical but accessible. Professional without being cold. Uses first-person plural ("contamos con", "promovemos", "generamos"). Serious and mission-driven.

**Casing:** Headings are typically ALL CAPS or Title Case for section names. Body text is sentence case. GADES is always written in all caps.

**Copy style:**
- Long-form institutional language ("procesos con enfoques productivos sociales y técnicamente viables, económicamente rentables y ambientalmente sostenibles")
- Technical terminology from environmental / social development sectors
- Emphasis on community impact and quantified results (e.g. "11,578 beneficiarios")
- No emoji. No informal language.

**Voice:** Expert, trustworthy, socially committed. Speaks to government entities, NGOs, and international funders.

**Examples:**
- *"Las acciones de hoy construyen el mañana"* (headline)
- *"Ser los mejores facilitadores de procesos relacionados con el fortalecimiento de movimientos sociales"*
- *"Proyectos de Educación Ambiental, control de torrentes y erosión, reforestación urbana y rural"*

---

## VISUAL FOUNDATIONS

### Colors
Primary palette derived from logos and PPTX theme:

| Token | Hex | Usage |
|---|---|---|
| `--color-blue` | `#1A5CA8` | Primary brand blue (GADES wordmark) |
| `--color-green` | `#4F8C1E` | Secondary green ("Fundación" text, globe) |
| `--color-teal` | `#04617B` | Dark teal accent (from theme) |
| `--color-blue-mid` | `#0F6FC6` | Mid blue (links, highlights) |
| `--color-blue-light` | `#5B9BD5` | Light blue (backgrounds) |
| `--color-green-light` | `#7CCA62` | Light green (accent) |
| `--color-dark` | `#1A1A1A` | Near-black text |
| `--color-gray` | `#44546A` | Dark gray (secondary text) |
| `--color-gray-light` | `#E7E6E6` | Light gray (backgrounds) |
| `--color-white` | `#FFFFFF` | White |

**Color vibe:** Cool, environmental blues and greens. Institutional and trustworthy. Not warm or playful.

### Typography
**Original fonts (from PPTX):** Calibri (headings/major), Arial (body/minor)

**Google Fonts substitutes used in this design system:**
- Headings → **Barlow Semi Condensed** (condensed institutional sans, excellent for Spanish)
- Body → **Barlow** (clean readable body, same family for visual harmony)

**Fonts in use:** Barlow Semi Condensed (headings) + Barlow (body). Loaded via Google Fonts CDN. Chosen for: institutional-civic feel, excellent Spanish character support, condensed display variant ideal for long Spanish headlines.

### Backgrounds
Slides use:
- White backgrounds with colored accent bars/borders
- Photo-heavy slides with full-bleed imagery overlaid with text panels
- Blue gradient or solid blue background for title slides
- No patterns or textures — clean and minimal

### Spacing & Layout
- Conservative margins; content-dense slides
- Tables and lists dominate informational slides
- Section header bars use solid blue (`#1A5CA8`) or teal backgrounds with white text
- Logo appears in header/footer of every slide

### Cards & Borders
- Clean flat borders, no rounded corners
- Section dividers use thick colored rules or colored backgrounds
- No drop shadows; flat design aesthetic

### Icons / Imagery
- Photographs: real project photos (agriculture, community meetings, field work) — natural, earthy tones
- Logo symbol: globe with orbital rings and a human figure (blue + green)
- No icon font; no SVG illustrations beyond the logo

### Animation
No animation conventions observed in the materials. Digital outputs should favor subtle, professional transitions if any.

### Corner radii
Essentially 0 — flat, institutional style. If any rounding used, very minimal (2–4px max).

---

## ICONOGRAPHY

The brand uses two primary mark assets:

1. **Logo wordmark** (`assets/logo_text.png`): "Fundación" in green + "GADES" in royal blue. Tagline beneath. Used on banners, headers.
2. **Logo symbol** (`assets/logo_symbol.png`): Globe with orbital rings and a human figure silhouette (blue + green). Used as a standalone emblem.

No icon font or SVG sprite is in use. Icons are not commonly used in the brand materials beyond the logo mark.

**Photography style:** Real project imagery — outdoor fieldwork, community workshops, agricultural plots, water projects. Warm, natural tones. Documentary style.

Key photos in `assets/raw/`:
- `image4.jpeg` – agricultural rows (cabbage crop)
- `image5.jpeg` – community meeting / workshop
- `image6.jpeg` – community gathering outdoors on hillside
- `image7.jpeg` – corn crop on slope

---

## FILE INDEX

```
README.md                  — This file
SKILL.md                   — Agent skill descriptor
colors_and_type.css        — CSS custom properties for colors + typography
fonts/                     — Web fonts (Google Fonts loaded via CDN)
assets/
  logo_text.png            — GADES wordmark (Fundación GADES text logo)
  logo_symbol.png          — GADES globe symbol
  raw/                     — Extracted raw images from PPTXs
preview/
  colors-primary.html      — Primary brand colors
  colors-neutral.html      — Neutral / gray scale
  colors-semantic.html     — Semantic color usage
  type-scale.html          — Typography scale specimen
  type-specimens.html      — Type specimens (headings, body, captions)
  spacing-tokens.html      — Spacing and layout tokens
  components-buttons.html  — Button components
  components-cards.html    — Card components
  components-badges.html   — Badge / tag components
  components-nav.html      — Navigation components
slides/
  index.html               — Slide deck template
ui_kits/
  website/
    index.html             — Website UI kit
```
