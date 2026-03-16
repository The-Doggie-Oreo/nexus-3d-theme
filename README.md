# Nexus-3D — Shopify Theme

A **Material 3** dark-mode Shopify theme purpose-built for 3D printing studios, maker shops, and custom fabrication storefronts.

![Shopify](https://img.shields.io/badge/Shopify-Online%20Store%202.0-7AB55C?logo=shopify&logoColor=white)
![M3 Design](https://img.shields.io/badge/Material%203-Design%20System-D0BCFF)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

| Feature | Description |
|---|---|
| **M3 Dark Palette** | Primary `#D0BCFF` violet, dark surface `#1C1B1F`, surface variant `#49454F` |
| **Pill Navigation** | Centered segmented header nav — active state: `bg #D0BCFF / text #381E72` |
| **28 px Corner Radius** | `--m3-radius-xl` applied to all cards, containers, and image blocks |
| **Pill-Shaped Buttons** | Every CTA uses `border-radius: 999px` with M3 tonal elevation on hover |
| **Weight-900 Headings** | Inter at max weight for display-level impact |
| **Split-Screen Hero** | Left media panel + right content with live printer status & ship counter |
| **Masonry Portfolio** | Variable-layout grid (tall / wide / square / auto) with glassmorphism overlays |
| **Tech Specs Grid** | Dynamic spec-sheet blocks with material-chip selectors |
| **Personalization Engine** | Design notes, file upload (STL/OBJ/STEP), print preference selectors |
| **Prototyper Bar** | Persistent floating sidebar — Upload STL / Request Quote / Cart |
| **Designer Workbench** | Messenger-style panel with project tracking & quick contact form |

---

## 📂 Theme Structure

```
nexus-3d-theme/
├── assets/
│   ├── nexus-core.css          # Global M3 stylesheet
│   └── nexus-core.js           # Header scroll, mobile menu, animations
├── config/
│   ├── settings_schema.json    # Theme settings (colors, fonts, status, social)
│   └── settings_data.json      # Default preset values
├── layout/
│   └── theme.liquid            # Master layout + CSS custom properties
├── sections/
│   ├── header.liquid           # M3 pill navigation header
│   ├── section-hero-3d.liquid  # Split-screen hero with status dashboard
│   ├── section-masonry-portfolio.liquid  # Masonry grid with filters
│   ├── product-tech-specs.liquid        # Product page + spec grid
│   ├── prototyper-bar.liquid   # Floating action sidebar
│   ├── designer-workbench.liquid # Messenger panel
│   ├── footer.liquid           # Footer with social links
│   ├── main-page.liquid        # Page template section
│   ├── main-collection.liquid  # Collection template section
│   └── main-cart.liquid        # Cart template section
├── snippets/
│   └── snippet-personalization-engine.liquid  # File upload + design notes
└── templates/
    ├── index.json
    ├── product.json
    ├── collection.json
    ├── cart.json
    └── page.json
```

---

## 🎨 M3 Design Tokens

```css
--m3-primary:             #D0BCFF;
--m3-on-primary:          #381E72;
--m3-primary-container:   #4F378B;
--m3-surface-container:   #211F26;
--m3-surface-variant:     #49454F;
--m3-on-surface-variant:  #CAC4D0;
--m3-radius-xl:           28px;
--m3-radius-full:         999px;
--nexus-heading-weight:   900;
```

---

## 🚀 Installation

### Option A — Shopify CLI
```bash
shopify theme push --store your-store.myshopify.com
```

### Option B — Manual ZIP Upload
1. Download this repo as a ZIP
2. Go to **Shopify Admin → Online Store → Themes**
3. Click **Add theme → Upload ZIP file**

---

## 🛠 Development

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/nexus-3d-theme.git
cd nexus-3d-theme

# Serve locally with Shopify CLI
shopify theme dev --store your-store.myshopify.com
```

---

## 📄 License

MIT — free for personal and commercial use.
