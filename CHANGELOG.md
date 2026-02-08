# 📝 Changelog - T-Podlahy

## [1.0.0] - 2026-02-08 ✨ PRODUCTION READY

### ✅ Přidáno (v této finální iteraci)

#### 🏷️ Logo TPodlahy
- Vlastní logo přidáno do Header (40px výška)
- Logo přidáno do Footer (32px výška, invertováno)
- Import pomocí `figma:asset`
- Automatické přizpůsobení Dark mode

#### 🎬 Video sekce
- **NOVÁ SEKCE** mezi Hero a Services
- YouTube video embed s vlastním UI
- Thumbnail obrázek s play tlačítkem
- Autoplay při kliknutí na play
- 3 statistické karty pod videem:
  - 200+ Spokojených zákazníků
  - 15+ Let zkušeností
  - 100% Záruka spokojenosti
- Responzivní 16:9 aspect ratio
- Dark mode support
- Navigace v Header menu (desktop + mobile)

#### 📄 Dokumentace
- `VIDEO_SETUP.md` - Detailní návod na video setup
- `LOGO_VIDEO_SUMMARY.md` - Přehled logo + video implementace
- `FINAL_SUMMARY.md` - Kompletní finální přehled
- `CHANGELOG.md` - Tento soubor
- Aktualizace všech existujících MD souborů

#### 🔧 Komponenty
- `Video.tsx` - Nová video komponenta
- `Header.tsx` - Přidáno logo + Video navigace
- `Footer.tsx` - Přidáno logo
- `App.tsx` - Import Video komponenty

---

## [0.9.0] - 2026-02-08 - Formulář + Setup soubory

### ✅ Přidáno

#### 📧 Funkční kontaktní formulář
- Azure API integrace (`POST /api/email/send-email`)
- Validace povinných polí
- Loading states s Loader2 iconou
- Success messages (zelená notifikace)
- Error messages (červená notifikace)
- Auto-reset formuláře po odeslání
- Auto-hide success message po 5s

#### 📄 Setup soubory
- `index.html` - HTML entry point
- `src/main.tsx` - React entry point
- `package.json` - NPM skripty
- `tsconfig.json` + `tsconfig.node.json`
- `.gitignore`
- `.npmrc`
- `.env.example`
- Všechny dokumentační MD soubory

#### 🎨 Styling
- `fonts.css` - Google Fonts (Inter + Poppins)
- Teplé barevné schéma (amber, stone)
- Dark mode plně implementován

---

## [0.8.0] - Před implementací

### ✅ Základní komponenty
- Header (navigace, dark mode toggle)
- Hero (úvodní sekce)
- Services (3 služby)
- Gallery (6 projektů s modály)
- About (o firmě)
- Contact (basic formulář)
- Footer (odkazy, kontakt)

### ✅ Funkce
- Dark/Light mode s ThemeContext
- Smooth scroll navigace
- Mobilní hamburger menu
- Responzivní design
- Galerie s modálními detaily

---

## 🔮 Budoucí verze (možné)

### v1.1.0 (volitelné)
- [ ] Google Analytics integrace
- [ ] Cookie consent banner
- [ ] SEO meta tags per section
- [ ] Sitemap.xml
- [ ] Robots.txt

### v1.2.0 (volitelné)
- [ ] PWA support
- [ ] Offline mode
- [ ] Service Worker
- [ ] Web Push notifications

### v1.3.0 (volitelné)
- [ ] CMS integrace (Contentful/Strapi)
- [ ] Admin panel
- [ ] Blog sekce
- [ ] Testimonials carousel

---

## 📊 Version History

| Verze | Datum | Hlavní změny |
|-------|-------|--------------|
| **1.0.0** | 8.2.2026 | ✅ Logo + Video + Docs (PRODUCTION) |
| 0.9.0 | 8.2.2026 | Formulář + Setup soubory |
| 0.8.0 | 7.2.2026 | Základní komponenty |

---

## 🎯 Breaking Changes

**Žádné** - První produkční release

---

## 🐛 Bug Fixes

**v1.0.0:**
- Žádné známé bugy

---

## 📝 Migration Guide

### Z 0.9.0 na 1.0.0

**Změny v package.json:**
- Přidán import loga
- Žádné nové dependencies

**Nové soubory:**
- `/src/app/components/Video.tsx`
- `/VIDEO_SETUP.md`
- `/LOGO_VIDEO_SUMMARY.md`
- `/FINAL_SUMMARY.md`
- `/CHANGELOG.md`

**Upravené soubory:**
- `Header.tsx` - Logo + Video navigace
- `Footer.tsx` - Logo
- `App.tsx` - Video import
- Všechny MD dokumenty

**Kroky migrace:**
1. Pull/merge změny
2. `npm install` (žádné nové deps)
3. Změň YouTube Video ID v `Video.tsx`
4. Otestuj `npm run dev`

---

## 🏆 Contributors

- **Figma Make AI** - Complete development
- **User (tomastrejbal)** - Requirements & feedback

---

## 📄 License

Private project - Not for redistribution

---

**Last updated:** 8. února 2026
