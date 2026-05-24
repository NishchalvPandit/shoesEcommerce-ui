# Kinetic Shoes

React storefront UI built with Vite, Tailwind CSS v4, and React Router. Dark theme, Anton + Sora typography, neon accent styling.

## Scripts

| Command     | Purpose                    |
| ----------- | -------------------------- |
| `npm run dev`     | Start the Vite dev server  |
| `npm run build`   | Production build → `dist/`   |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                 |

---

## Project files

### Root

| File | Role |
| ---- | ---- |
| `package.json` | Dependencies, npm scripts, project metadata. |
| `package-lock.json` | Locked dependency tree for reproducible installs. |
| `vite.config.js` | Vite setup: React plugin and Tailwind v4 Vite plugin. |
| `eslint.config.js` | ESLint flat config for this project. |
| `index.html` | HTML shell: dark class on `<html>`, favicon, fonts (Anton, Sora, Material Symbols), app mount point, Vite entry. |

### `public/`

Static assets copied to the site root at build time (e.g. favicon `logo1.png` referenced from `index.html`).

### `dist/` (after build)

Production output from `npm run build`. Not edited by hand; regenerated each build.

---

## Source (`src/`)

### Entry and shell

| File | Role |
| ---- | ---- |
| `main.jsx` | Bootstraps React: mounts the app into `#root`, wraps in `StrictMode`, loads global CSS. |
| `App.jsx` | App shell: `BrowserRouter`, global layout class, fixed `Navbar`, scrollable `main` with routes, `Footer`. |
| `App.css` | Layout helpers for the app shell (e.g. main padding for fixed header). |
| `index.css` | Global styles: Tailwind, theme tokens, custom utilities (marquee, glass panel, shadows, etc.). |

### Routing

| File | Role |
| ---- | ---- |
| `routes/AppRoutes.jsx` | Declares all routes (`/`, `/shop`, `/product/:id`, `/cart`, `/checkout`, `/login`, `/signup`, `/dashboard`) and a catch-all that shows `Home` for unknown paths. |

### Pages (`src/pages/`)

| File | Role |
| ---- | ---- |
| `pages/index.js` | Re-exports all page components for shorter imports. |
| `pages/Home/Home.jsx` | Landing page: assembles hero, marquee, trending, bento categories, brands strip, testimonials, newsletter. |
| `pages/Shop/Shop.jsx` | Performance catalogue: sort bar, sidebar filters (via `SidebarFilter`), product grid with `ProductCard`, pagination chrome. Anchors `#performance`, `#collections`; `#lifestyle` on filters via `SidebarFilter`. |
| `pages/ProductDetails/ProductDetails.jsx` | Single product route (placeholder or product UI). |
| `pages/Cart/Cart.jsx` | Shopping cart route (placeholder shell). |
| `pages/Checkout/Checkout.jsx` | Checkout route (placeholder or flow UI). |
| `pages/Login/Login.jsx` | Sign-in route. |
| `pages/Signup/Signup.jsx` | Registration route. |
| `pages/ForgotPassword/ForgotPassword.jsx` | Password reset request (email + confirmation state). |
| `pages/Dashboard/Dashboard.jsx` | Account or dashboard route. |

### Components (`src/components/`)

| File | Role |
| ---- | ---- |
| `components/index.js` | Barrel export for shared components. |
| `Navbar/Navbar.jsx` | Top navigation: logo, desktop links, search, cart/login icons, mobile menu. |
| `Footer/Footer.jsx` | Site footer: brand, company/support links, social icons, legal line. |
| `HeroSection/HeroSection.jsx` | Home hero: headline, copy, CTAs, featured imagery. |
| `MarqueeStrip/MarqueeStrip.jsx` | Animated scrolling announcement / ticker strip. |
| `TrendingProducts/TrendingProducts.jsx` | “Trending” section wrapper and grid of product cards. |
| `TrendingProducts/TrendingProductCard.jsx` | One trending product tile (image, name, price). |
| `BentoCategories/BentoCategories.jsx` | Bento-style grid linking into category areas (e.g. Basketball, Running, Casual, Lifestyle). |
| `features/Features.jsx` | Performance pillar labels strip (explosive, responsive, etc.). |
| `Testimonials/Testimonials.jsx` | Customer quotes / social proof section. |
| `NewsletterCTA/NewsletterCTA.jsx` | Email signup call-to-action block. |
| `MaterialSymbol/MaterialSymbol.jsx` | Thin wrapper for Google Material Symbols (Outlined) icon font. |
| `ProductCard/ProductCard.jsx` | Shop catalogue card: radial hero image frame, badges, favourites, overlay CTAs linking to `/product/:id`. |
| `SearchBar/SearchBar.jsx` | Search input UI for catalogue filtering. |
| `SidebarFilter/SidebarFilter.jsx` | Shop left column: Brand, Size, Technical Colors, Price range slider, Rating. |
| `Loader/Loader.jsx` | Loading indicator component. |
| `Modal/Modal.jsx` | Simple modal overlay: title slot, children, click-outside to close. |
| `Buttons/Buttons.jsx` | Shared `Button` and `IconButton` primitives (variant-based styling). |

---

## Tech stack (summary)

- **React** + **Vite**
- **react-router-dom** for client-side routing
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **lucide-react** for vector icons where used (e.g. nav menu icons)
