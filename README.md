# The Neon Blacksmith

A high-performance, fully responsive barbershop storefront showcasing an intricate **Industrial-Vintage** design aesthetic. Functionally adapted for the Nairobi market, integrating robust frontend mechanisms spanning smooth routing, custom glass-morphic UI paradigms, and complex interaction tracking.

## Technical Stack

*   **Framework**: React (Functional Components) + Vite
*   **Styling**: Tailwind CSS (v4) + Custom CSS Variables + `@theme` mapping
*   **Routing**: React Router DOM (v6)
*   **Animations**: Framer Motion
*   **Form Management & Validation**: React Hook Form + Zod
*   **Icons**: Lucide React

## Key System Features

*   **Industrial Aesthetic**: Custom CSS module structuring enforcing strict color constraints (brass `#e9c349` primaries, true-grain `#131313` darks, omitting pure white or blacks) alongside global static grain overlays blending utilizing `mix-blend-luminosity`.
*   **Complex Booking Wizard**: A custom multi-stage UI funnel capturing service selections, dates, times, and patron identification validated synchronously utilizing `Zod`. Persists payload securely utilizing `localStorage` to emulate state bridging.
*   **Immersive Micro-interactions**: Scroll-reveal rendering via `framer-motion`, adaptive exit-intent sensing widgets, and dynamically scaled components gracefully handling strict structural bounds across microscopic mobile arrays and massive desktop visors.
*   **Asymmetrical Architectures**: Implements sophisticated radius rendering logic simulating raw metal corners against organic curves natively without overriding heavy third-party UI libraries.

## Quick Start

### Installation
Ensure that you are running Node.js (v18 or higher recommended). Execute inside the project root:

```bash
# Install package dependencies
npm install

# Start the local development server utilizing Vite HMR
npm run dev

# Compile the application for production deployment
npm run build
```

## Structure
All UI component segments reside cleanly within `src/components/`, while `src/pages/` orchestrates top-level routing compositions. Heavy constant-mapping arrays powering service lists and location data operate agnostically through `src/content.js`.
