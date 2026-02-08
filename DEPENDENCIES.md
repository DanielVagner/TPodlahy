# 📦 Dependencies Overview

## Core Dependencies

### React Ecosystem
| Package | Version | Použití |
|---------|---------|---------|
| `react` | 18.3.1 | Core React library |
| `react-dom` | 18.3.1 | DOM bindings pro React |
| `@types/react` | 19.2.13 | TypeScript types pro React |
| `@types/react-dom` | 19.2.3 | TypeScript types pro React DOM |

### Build Tools
| Package | Version | Použití |
|---------|---------|---------|
| `vite` | 6.3.5 | Dev server a build tool |
| `@vitejs/plugin-react` | 4.7.0 | React plugin pro Vite |
| `typescript` | 5.9.3 | TypeScript compiler |

### Styling
| Package | Version | Použití |
|---------|---------|---------|
| `tailwindcss` | 4.1.12 | Utility-first CSS framework |
| `@tailwindcss/vite` | 4.1.12 | Tailwind plugin pro Vite |
| `tailwind-merge` | 3.2.0 | Merge Tailwind classes |
| `class-variance-authority` | 0.7.1 | Variant styles pro komponenty |
| `clsx` | 2.1.1 | Conditional className helper |

### UI Components (Radix UI)
Používáme Radix UI primitives pro accessibility:

| Package | Použití |
|---------|---------|
| `@radix-ui/react-accordion` | Accordion komponenty |
| `@radix-ui/react-alert-dialog` | Alert dialogy |
| `@radix-ui/react-dialog` | Modální dialogy |
| `@radix-ui/react-dropdown-menu` | Dropdown menu |
| `@radix-ui/react-popover` | Popover komponenty |
| `@radix-ui/react-scroll-area` | Scroll area |
| `@radix-ui/react-separator` | Oddělovače |
| `@radix-ui/react-slot` | Slot komponenty |
| `@radix-ui/react-switch` | Switch toggle |
| `@radix-ui/react-tabs` | Tab komponenty |
| `@radix-ui/react-tooltip` | Tooltips |

### Icons & Assets
| Package | Version | Použití |
|---------|---------|---------|
| `lucide-react` | 0.487.0 | Icon library (Phone, Mail, Menu, etc.) |

### Animations
| Package | Version | Použití |
|---------|---------|---------|
| `motion` | 12.23.24 | Animace (formerly Framer Motion) |
| `tw-animate-css` | 1.3.8 | CSS animace pro Tailwind |

### Forms
| Package | Version | Použití |
|---------|---------|---------|
| `react-hook-form` | 7.55.0 | Form management |

### Utilities
| Package | Version | Použití |
|---------|---------|---------|
| `date-fns` | 3.6.0 | Date utilities |
| `sonner` | 2.0.3 | Toast notifications |
| `next-themes` | 0.4.6 | Theme management |

## Nepoužívané dependencies

Následující balíčky jsou v package.json, ale **momentálně se nepoužívají**. 
Můžeš je odstranit, pokud nechceš ušetřit místo:

### Material UI (nepoužíváme)
```bash
npm uninstall @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### Další nepoužívané
```bash
npm uninstall react-slick react-dnd react-dnd-html5-backend recharts
npm uninstall embla-carousel-react react-responsive-masonry
npm uninstall react-day-picker cmdk vaul input-otp
npm uninstall react-popper @popperjs/core
npm uninstall react-resizable-panels
```

### Radix UI (nepoužívané komponenty)
```bash
npm uninstall @radix-ui/react-avatar
npm uninstall @radix-ui/react-checkbox
npm uninstall @radix-ui/react-collapsible
npm uninstall @radix-ui/react-context-menu
npm uninstall @radix-ui/react-hover-card
npm uninstall @radix-ui/react-label
npm uninstall @radix-ui/react-menubar
npm uninstall @radix-ui/react-navigation-menu
npm uninstall @radix-ui/react-progress
npm uninstall @radix-ui/react-radio-group
npm uninstall @radix-ui/react-select
npm uninstall @radix-ui/react-slider
npm uninstall @radix-ui/react-toggle
npm uninstall @radix-ui/react-toggle-group
npm uninstall @radix-ui/react-aspect-ratio
```

## Doporučené minimální dependencies

Pokud chceš úplně minimální setup, **toto je vše co potřebuješ**:

```json
{
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "lucide-react": "0.487.0",
    "clsx": "2.1.1",
    "tailwind-merge": "3.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "4.7.0",
    "@tailwindcss/vite": "4.1.12",
    "tailwindcss": "4.1.12",
    "typescript": "5.9.3",
    "vite": "6.3.5",
    "@types/react": "^19.2.13",
    "@types/react-dom": "^19.2.3"
  }
}
```

**Velikost node_modules:**
- Plná instalace: ~800 MB
- Minimální instalace: ~200 MB

## External Dependencies (CDN)

### Google Fonts
```css
/* src/styles/fonts.css */
@import url('https://fonts.googleapis.com/css2...');
```

**Fonty:**
- Inter (400, 500, 600, 700, 800)
- Poppins (400, 500, 600, 700, 800)

### Unsplash Images
Obrázky se načítají z Unsplash API přes ImageWithFallback komponentu.

## Bundle Size (Production)

Po `npm run build`:

```
dist/
├── assets/
│   ├── index-[hash].js    (~150 KB gzipped)
│   └── index-[hash].css   (~20 KB gzipped)
└── index.html             (~2 KB)
```

**Total:** ~170 KB gzipped

## Upgrade Guide

```bash
# Zkontroluj outdated balíčky
npm outdated

# Update všech závislostí
npm update

# Update major verzí (opatrně!)
npx npm-check-updates -u
npm install
```

## Security

```bash
# Zkontroluj bezpečnostní vulnerabilities
npm audit

# Fix automaticky
npm audit fix

# Ruční fix major verzí
npm audit fix --force
```

## License Check

Všechny použité balíčky jsou pod MIT nebo podobně permisivními licencemi.

```bash
# Zkontroluj licence
npx license-checker --summary
```
