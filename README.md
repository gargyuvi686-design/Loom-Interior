# Loom Interiors – Front-End Website

Responsive single-page website for an interior design studio (React + Vite).
Built from the Industrial Training Report, Zeal Web Technologies, Noida.

## 1. What you need installed
- Node.js 18 or newer (https://nodejs.org) – npm comes with it
- Visual Studio Code, Git, Chrome or Edge
- Adobe Photoshop (only for editing your own images)

## 2. Run the project
```bash
cd loom-interiors
npm install          # install packages
npm run dev          # start dev server -> http://localhost:5173
npm run build        # production build into /dist
npm run preview      # test the production build locally
```
The camera feature works on `localhost` and HTTPS only.

## 3. Folder structure
```
loom-interiors/
  public/            favicon
  src/
    assets/          images (placeholders now; replace with Photoshop exports)
    components/      OfferBar, Header, Hero, ScrollIndicator, FitCheck,
                     ContactSection, ConsultForm, ChatWidget
    data/content.js  nav links, hero text, style presets, quick replies, contact
    hooks/           useDraggable, useScrollProgress
    styles/          variables.css (design tokens), layout.css, components.css
    App.jsx          page composition
    main.jsx         entry point
  docs/              requirements, design system, asset guide, test plan, deployment
```

## 4. What to change first
1. `src/data/content.js` – replace the e-mail, phone and WhatsApp number (country code, no `+`).
2. `src/assets/` – replace the `.svg` placeholders with your edited images
   (see docs/PHOTOSHOP_ASSET_GUIDE.md) and update the imports at the top of `content.js`.
3. `src/styles/variables.css` – colours and fonts.

## 5. Features implemented (as in the report)
| Feature | File |
|---|---|
| Offer bar | components/OfferBar.jsx |
| Responsive header, 44px touch targets | Header.jsx, layout.css |
| Hero with CSS Grid, clamp() heading, 01 / 04 counter | Hero.jsx |
| Scroll progress indicator (rAF + passive listener) | ScrollIndicator.jsx, useScrollProgress.js |
| Draggable, closable chat icon with 4 px drag threshold | ChatWidget.jsx, useDraggable.js |
| Quick replies and "Continue to Consultation" pre-fills the form | ChatWidget.jsx, App.jsx |
| Camera preview (getUserMedia), permission-denied fallback, style cards | FitCheck.jsx |
| Validated consultation form, WhatsApp / e-mail / phone | ConsultForm.jsx, ContactSection.jsx |

## 6. Known limitations (same as the report)
No back end: the form validates and logs to the console only. Chat uses fixed quick replies.
Camera preview shows captions only (no AR).
