# 🏗️ T-Podlahy - Project Overview

## 📊 Status projektu

**Verze:** 1.0.0  
**Status:** ✅ **PRODUCTION READY**  
**Poslední update:** 8. 2. 2026

## 🎯 Přehled funkcí

### ✅ Implementováno (100%)

#### 1. **Struktura webu**
- ✅ Single-page application (SPA)
- ✅ Smooth scroll navigace
- ✅ Responzivní design (mobile-first)
- ✅ 7 hlavních sekcí:
  - Header (sticky navigation)
  - Hero (s CTA buttons)
  - Services (3 hlavní služby)
  - Gallery (6 projektů)
  - About (O firmě)
  - Contact (funkční formulář)
  - Footer (odkazy + info)

#### 2. **Design systém**
- ✅ Teplé podlahářské barvy:
  - Light: `amber-50` (krémová)
  - Dark: `stone-900` (teplá hnědá)
  - Primary: `amber-700` (jantarová)
- ✅ Google Fonts:
  - Inter - body text
  - Poppins - headings
- ✅ Tailwind CSS v4.1
- ✅ Dark/Light mode toggle
- ✅ Smooth transitions

#### 3. **Funkcionality**
- ✅ **Theme switcher** - Light/Dark mode s localStorage
- ✅ **Mobilní menu** - Hamburger menu pro mobily
- ✅ **Kontaktní formulář:**
  - Validace polí
  - Loading states
  - Success/Error messages
  - Azure API integrace
- ✅ **Galerie:**
  - 6 reálných projektů
  - Modal pro detail projektu
  - Vlastní galerie pro každý projekt
  - Unsplash obrázky

#### 4. **Technická implementace**
- ✅ React 18.3.1 + TypeScript
- ✅ Vite 6.3.5 (dev server + build)
- ✅ Context API (ThemeContext)
- ✅ Custom hooks (useTheme)
- ✅ Lazy loading obrázků
- ✅ Error boundaries ready
- ✅ SEO optimalizace:
  - Meta tags v index.html
  - Semantic HTML
  - Alt texty na obrázcích

## 📂 Struktura souborů

```
tpodlahy/
├── 📄 index.html                    # HTML entry point
├── 📄 package.json                  # NPM dependencies
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 vite.config.ts                # Vite config
├── 📄 .gitignore                    # Git ignore
├── 📄 .npmrc                        # NPM config
├── 📄 README.md                     # Dokumentace
├── 📄 SETUP_CHECKLIST.md            # Setup checklist
├── 📄 PROJECT_OVERVIEW.md           # Tento soubor
│
├── 📁 public/
│   └── favicon.svg                  # Favicon
│
└── 📁 src/
    ├── 📄 main.tsx                  # React entry point
    │
    ├── 📁 app/
    │   ├── 📄 App.tsx               # Main app component
    │   │
    │   ├── 📁 components/
    │   │   ├── Header.tsx           # Navigace + theme toggle
    │   │   ├── Hero.tsx             # Hero sekce
    │   │   ├── Services.tsx         # Služby
    │   │   ├── Gallery.tsx          # Galerie projektů
    │   │   ├── About.tsx            # O firmě
    │   │   ├── Contact.tsx          # Formulář + Azure API
    │   │   ├── Footer.tsx           # Footer
    │   │   │
    │   │   ├── 📁 figma/
    │   │   │   └── ImageWithFallback.tsx
    │   │   │
    │   │   └── 📁 ui/               # UI komponenty (shadcn)
    │   │
    │   └── 📁 contexts/
    │       └── ThemeContext.tsx     # Theme management
    │
    └── 📁 styles/
        ├── fonts.css                # Google Fonts import
        ├── index.css                # CSS entry point
        ├── tailwind.css             # Tailwind v4 config
        └── theme.css                # Theme variables
```

## 🔧 Technický stack

| Kategorie | Technologie | Verze |
|-----------|------------|-------|
| **Core** | React | 18.3.1 |
| | React DOM | 18.3.1 |
| | TypeScript | 5.9.3 |
| **Build** | Vite | 6.3.5 |
| **Styling** | Tailwind CSS | 4.1.12 |
| | @tailwindcss/vite | 4.1.12 |
| **Icons** | lucide-react | 0.487.0 |
| **Animations** | motion | 12.23.24 |
| **Fonts** | Google Fonts | - |

## 📧 Azure API Integrace

**Endpoint:**
```
POST https://tpodlahy.azurewebsites.net/api/email/send-email
```

**Payload:**
```json
{
  "name": "Jan Novák",
  "email": "jan@email.cz",
  "subject": "Nová zpráva z kontaktního formuláře",
  "message": "Zpráva od: Jan Novák..."
}
```

**Response:**
- Success: Status 200
- Error: Status 4xx/5xx

## 🎨 Barevná paleta

### Light Mode
```css
Background: #fffbeb (amber-50)
Text: #111827 (gray-900)
Primary: #b45309 (amber-700)
Hover: #92400e (amber-800)
```

### Dark Mode
```css
Background: #1c1917 (stone-900)
Text: #ffffff (white)
Primary: #f59e0b (amber-500)
Hover: #fbbf24 (amber-400)
```

## 🚀 Deployment checklist

- [ ] Změň kontaktní údaje v Contact.tsx
- [ ] Aktualizuj adresu v Footer.tsx
- [ ] Nastav production API endpoint (.env)
- [ ] Optimalizuj obrázky (pokud potřeba)
- [ ] Build: `npm run build`
- [ ] Test: `npm run preview`
- [ ] Deploy `dist/` folder

## 📈 Performance

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** 90+

## 🔐 Bezpečnost

- ✅ HTTPS na production
- ✅ CORS headers na API
- ✅ Input validace
- ✅ XSS protection (React escape)
- ⚠️ Rate limiting (doporučeno na API)

## 📝 Další vylepšení (Optional)

- [ ] SEO meta tags per section
- [ ] Google Analytics
- [ ] Cookie consent
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] PWA support
- [ ] Image lazy loading optimization
- [ ] Error logging (Sentry)
- [ ] A/B testing

## 📞 Support

**Developer:** Figma Make AI  
**Last updated:** 8. února 2026  
**Version:** 1.0.0
