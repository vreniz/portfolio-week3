# Personal Portfolio — Vanessa Fontalvo

## Description

This project is a personal portfolio website built from scratch using plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no dependencies beyond a few carefully chosen CDN libraries.

The goal was to design and develop a complete, production-quality portfolio that showcases both technical skills and personal identity. The site includes an animated particle background, a live clock widget, a typewriter effect in the About section, interactive project cards with flip animations, a working contact form, and a dedicated bonus page for personal content.

The project prioritizes semantic HTML structure, clean CSS architecture, and readable JavaScript organized across multiple single-responsibility files.

---

## Technologies Used

- HTML5 (Semantic structure, ARIA accessibility attributes)
- CSS3 (Custom properties, Flexbox, Grid, animations, responsive design)
- JavaScript ES6+ (Vanilla — no frameworks)
- [tsParticles Slim](https://github.com/tsparticles/tsparticles) — animated particle background
- [Typed.js](https://github.com/mattboldt/typed.js/) — typewriter effect
- [Ionicons](https://ionic.io/ionicons) — navigation icons
- [Boxicons](https://boxicons.com/) — icons for the pets page
- Google Fonts — Fira Code, Inter, Playfair Display, DM Sans

---

## Project Structure

```bash
week3/
│
├── index.html              # Main portfolio page
├── mascotas.html           # Bonus page: My Pets gallery
│
├── css/
│   ├── styles.css          # Main stylesheet for index.html
│   ├── petstyles.css       # Styles for mascotas.html
│   └── style.min.css       # Minified style reference
│
├── js/
│   ├── script.js           # Main interactivity (toast, form, skills toggle)
│   ├── particles.js        # tsParticles configuration
│   ├── typed.js            # Typewriter effect for the About section
│   ├── clock.js            # Live clock displayed in the hero card
│   ├── menu.js             # Hamburger menu toggle (mobile)
│   └── petscript.js        # All interactivity for mascotas.html
│
├── assets/
│   └── img/                # Project screenshots and pet photos
│
├── .gitignore
└── README.md
```

---

## Pages

### `index.html` — Portfolio

The main page is organized into four sections:

- **Header:** Fixed navigation bar with anchor links and a hamburger toggle for mobile.
- **Hero:** Full-viewport section featuring the developer's name, a tagline, a stats row, and a GitHub-style profile card with a live clock and availability status. An animated particle background (floating dots with connecting lines and mouse repulsion) fills the hero area.
- **About me:** A terminal-style box where a typewriter effect types a short bio using colored `<span>` highlights. Below it, a togglable skills list is revealed by a JavaScript-powered button.
- **Projects:** A horizontally scrollable list of flip cards. Each card shows a project preview image on the front and reveals the project name, description, tech stack, and a link on the back when hovered or tapped.
- **Contact:** A functional contact form with name, email, and message fields. On submission, the button changes text and color to confirm the action, then resets automatically.
- **Footer:** Copyright line and a link to the pets page.

### `mascotas.html` — My Pets 🐾

A standalone bonus page accessible from the main portfolio. It demonstrates the same design system applied to a different content type:

- **Pets Hero:** Page title with a "Did you know?" toggle button that cycles through four animal facts each time it is opened.
- **Gallery — Flex layout:** Three pet cards (Luna, Mango, Perla) arranged using CSS Flexbox with wrapping.
- **Gallery — Grid mosaic:** The same three pets shown again in a CSS Grid layout with a wide card spanning multiple columns, demonstrating a different layout strategy with the same components.
- **Fun Facts:** A styled list of curiosities learned from living with the pets.
- **Footer:** A back-link to the main portfolio.

---

## JavaScript Modules

Each JS file handles a single responsibility:

| File | Responsibility |
|---|---|
| `script.js` | Welcome toast, contact form feedback, skills toggle |
| `particles.js` | tsParticles initialization and configuration |
| `typed.js` | Typewriter animation on the About section (IntersectionObserver triggered) |
| `clock.js` | Live HH:MM:SS clock updated every second |
| `menu.js` | Hamburger toggle and auto-close on link tap |
| `petscript.js` | Welcome toast, Did you know? panel, Like buttons, hamburger (pets page) |

---

## Key Features

- Animated particle background with mouse repulsion, contained behind page content
- GitHub-style profile card with real-time clock (Barranquilla, UTC-5)
- Typewriter effect triggered only when the About section enters the viewport
- Project cards with CSS 3D flip animation revealing details on hover
- Like buttons on pet cards with icon toggle and bounce animation
- Rotating fun fact panel with a show/hide toggle
- Welcome toast notification on page load (both pages)
- Contact form with visual submit feedback
- Skills list with show/hide toggle button
- Mobile hamburger navigation with ARIA attributes
- Semantic HTML throughout (`header`, `main`, `section`, `article`, `footer`, `nav`)
- ARIA roles and labels on interactive elements for accessibility

---

## Responsive Design

Both pages adapt to mobile, tablet, and desktop screen sizes using media queries.
---

## How to Run the Project

### Option 1 — Open directly in the browser

1. Clone or download the repository:

```bash
git clone https://github.com/vreniz/portfolio-week3.git
```

2. Open the project folder and locate `index.html`.
3. Double-click the file or right-click and select "Open with browser".

> Note: some features (like relative asset paths) work best when served from a local server. See Option 2.

---

### Option 2 — Live Server in VS Code (Recommended)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and select **"Open with Live Server"**.

The page will open in your default browser with automatic reloading on file changes.

---

## External Libraries (CDN)

All external dependencies are loaded via CDN — no npm install or build step required:

```html
<!-- tsParticles -->
<script src="https://cdn.jsdelivr.net/npm/@tsparticles/slim@3.3.0/tsparticles.slim.bundle.min.js"></script>

<!-- Typed.js -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.1.0/dist/typed.umd.js"></script>

<!-- Ionicons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

<!-- Boxicons (pets page only) -->
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
```

---

## Notes

- All JavaScript is vanilla ES6+. No frameworks or bundlers are used.
- The particle background uses tsParticles Slim (a lightweight build) to minimize page weight.
- The typewriter effect only starts when the About section is visible, using `IntersectionObserver` to avoid animating off-screen content.
- Pet photos reference local image files under `assets/img/`. Replace them with your own images to personalize the page.
- The contact form does not send data to a server. The submit handler is intercepted with `e.preventDefault()` for demonstration purposes.

---

## Author

**Vanessa Fontalvo Reniz**
Systems and Computing Engineer
Frontend Developer.

GitHub: [@vreniz](https://github.com/vreniz)