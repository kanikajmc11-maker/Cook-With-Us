**Cook with Us**
> A professional community recipe sharing platform built with React & Vite. <br>
> Browse, filter, and explore 15+ dishes from home cooks across 45 countries.


**About the Project**
Cook with Us is a multi-page recipe discovery web application designed for food enthusiasts. <br>
It features a clean, warm UI with full routing, live filtering, and an interactive community section. <br>
All data is managed locally — no backend required.


**Pages & Features**

**Home** <br>
Animated hero section with floating blobs and a dot pattern background. <br>
Stats bar showing 1,500+ recipes, 200+ contributors, 4.8 rating, and 45+ countries. <br>
Featured recipes grid, tips teaser, and a community call-to-action section.

**Recipes** <br>
Live search by dish name or cuisine. <br>
Category tabs — All, Breakfast, Main Course, Pasta, Soup, Salad, Dessert, Baking. <br>
Filter by cuisine and difficulty level. Sort by top rated or most reviews.

**Tips & Tricks** <br>
Six expandable tip cards — click any card to reveal the full detail. <br>
Filter tips by category: Pasta, Technique, Flavor, Baking, Meat. <br>
Pro chef secrets section covering Mise en Place, Emulsification, and more.

**Community** <br>
Six contributor spotlight cards with follower counts and specialties. <br>
Benefits grid highlighting why users should join. <br>
Join form with live validation and a success confirmation state.

**Global** <br>
Sticky navbar with scroll-aware background blur effect. <br>
Mobile-responsive hamburger menu. Footer with newsletter signup.


**Tech Used**

**React 18** — Component-based UI library <br>
**Vite 5** — Lightning-fast build tool and dev server <br>
**React Router DOM v6** — Client-side routing across 4 pages <br>
**Plain CSS** — Custom properties, animations, and responsive breakpoints <br>
**Google Fonts** — Playfair Display (headings), DM Sans (body) <br>
**Unsplash** — High-quality recipe images <br>
**Pravatar** — Contributor avatar images


**Setup & Installation**

**Prerequisites** — Node.js v16+ and npm must be installed.

```bash
 1. Create a new Vite + React project
npm create vite@latest cook-with-us -- --template react

 2. Move into the project directory
cd cook-with-us

 3. Install all dependencies
npm install && npm install react-router-dom

 4. Delete Vite's default files
 Remove → src/App.jsx | src/App.css | src/index.css

 5. Copy all files from the ZIP into your project folder

 6. Start the development server
npm run dev
```

Open in browser → `http://localhost:5173`

---

**Pages & Routes**

 → Home <br>
recipes → Recipes <br>
tips → Tips & Tricks <br>
community → Community

*© 2025 Cook with Us. All rights reserved.*
