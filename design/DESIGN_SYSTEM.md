# DESIGN SYSTEM SPECIFICATION

Source: Stitch Project "Advocate Shubham Singh Design System"

---

## 1. Palette & Colors

| Token Name | Hex Code | Visual Reference / Usage |
| :--- | :--- | :--- |
| **Navy (Bedrock Base)** | `#0B1220` | Primary midnight-navy background for hero & body canvas |
| **Charcoal (Surface Container)** | `#151A23` | Cards, structural sections, modular containers |
| **Burgundy (Primary Action)** | `#7A1F3D` | Primary action buttons, badges, key milestone highlights |
| **Burgundy Hover** | `#5C172E` | Hover state for primary buttons |
| **Gold / Brass (Hairlines & Accent)** | `#C6A664` | Borders, category eyebrows, section dividers, seals |
| **Ivory (Breakout Canvas)** | `#F7F4EE` | Light parchment breakout sections (declarations, notices) |
| **Text Primary (Dark Canvas)** | `#E8E6E1` | Main body copy, headings, and primary labels |
| **Text Secondary (Muted Legal)** | `#9EA3B0` | Citations, statutory subtext, metadata |
| **Text Light Canvas** | `#151A23` | Dark text on Ivory background |
| **Border Muted / Input Border** | `#31394A` | Default form field boundaries |

---

## 2. Typography

*Note: Per PROJECT_RULES.md, typography token styles correspond to `Playfair Display` for headings and `Inter` for body/functional UI.*

| Typography Token | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Large** | Playfair Display | 56px (Mobile: 36px) | 600 | 64px (Mobile: 44px) | `0.02em` |
| **Headline XL** | Playfair Display | 40px (Mobile: 28px) | 600 | 48px (Mobile: 36px) | `0.01em` |
| **Headline MD** | Playfair Display | 28px | 500 | 36px | `0.02em` |
| **Subheading Serif** | Playfair Display | 20px | 400 | 28px | `0.04em` |
| **Body LG** | Inter | 18px | 400 | 28px | Standard |
| **Body MD** | Inter | 15px | 400 | 24px | Standard |
| **Body SM** | Inter | 13px | 400 | 20px | Standard |
| **Eyebrow / Category** | Inter | 12px | 700 | 16px | `0.18em` (UPPERCASE) |
| **Label MD** | Inter | 13px | 600 | 18px | `0.08em` (UPPERCASE) |
| **Legal Disclaimer** | Inter | 11px | 400 | 16px | `0.02em` |

---

## 3. Spacing & Grid System

- **Desktop (1200px+)**: 12 columns, 1.5rem (24px) gutters, 3rem (48px) margins, max container width `1280px`.
- **Tablet (768px - 1199px)**: 8 columns, 1.25rem (20px) gutters, 2rem (32px) margins.
- **Mobile (Up to 767px)**: 4 columns, 1rem (16px) gutters, 1.25rem (20px) margins.

### Spacing Tokens
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1.0rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2.5rem` (40px)
- `space-2xl`: `4.0rem` (64px)
- `space-3xl`: `6.0rem` (96px)

---

## 4. Components Specification

### Button Styles
1. **Primary Action**:
   - Background: `#7A1F3D` (Burgundy)
   - Text: `#E8E6E1`
   - Padding: `12px 24px`
   - Border Radius: `0.25rem` (4px)
   - Hover: `#5C172E`
2. **Secondary Outline**:
   - Background: Transparent
   - Border: `1px solid #C6A664` (Antique Gold)
   - Text: `#C6A664`
   - Hover: Fill `#C6A664`, text `#0B1220`
3. **Text Action**:
   - Text: Uppercase 12px Inter, `#C6A664`
   - Icon: `→` horizontal rule suffix

### Card Styles
1. **Dark Container Card**:
   - Background: `#151A23` (Charcoal)
   - Border: `1px solid rgba(198, 166, 100, 0.2)`
   - Border Radius: `4px`
   - Optional Accent: `2px solid #C6A664` left border line
2. **Ivory Parchment Card**:
   - Background: `#F7F4EE`
   - Text: `#151A23`
   - Citations & Metadata: Muted charcoal `#151A23`

### Form Field Styles
- **Input Base**: `#151A23` fill, `1px solid #31394A` border.
- **Input Focus**: Border transitions to `#C6A664` with no glow ring.
- **Labels**: Small uppercase 11px Inter, `#C6A664` or `#9EA3B0` placed directly above input fields.
