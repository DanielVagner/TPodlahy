# ✅ Setup Checklist - T-Podlahy

## 📋 Kontrola před spuštěním

### Základní soubory
- [x] `/index.html` - HTML entry point
- [x] `/src/main.tsx` - React entry point
- [x] `/src/app/App.tsx` - Hlavní komponenta
- [x] `package.json` - npm skripty a závislosti
- [x] `tsconfig.json` - TypeScript konfigurace
- [x] `vite.config.ts` - Vite konfigurace
- [x] `.gitignore` - Git ignore soubor
- [x] `.npmrc` - NPM konfigurace

### Styling
- [x] `/src/styles/fonts.css` - Google Fonts (Inter + Poppins)
- [x] `/src/styles/index.css` - CSS imports
- [x] `/src/styles/tailwind.css` - Tailwind v4 konfigurace
- [x] `/src/styles/theme.css` - Theme variables

### Komponenty
- [x] `Header.tsx` - Navigace + dark mode toggle
- [x] `Hero.tsx` - Hero sekce s Unsplash obrázkem
- [x] `Services.tsx` - Služby (vinyl, laminát, schody)
- [x] `Gallery.tsx` - Galerie 6 projektů
- [x] `About.tsx` - O firmě
- [x] `Contact.tsx` - Kontaktní formulář s Azure API
- [x] `Footer.tsx` - Footer s odkazy

### Contexts
- [x] `ThemeContext.tsx` - Dark/Light mode s localStorage

### NPM Skripty
- [x] `npm run dev` - Dev server (port 5173)
- [x] `npm run build` - Production build
- [x] `npm run preview` - Preview produkční verze

### Závislosti
- [x] `react` + `react-dom` - Core React
- [x] `typescript` - Type safety
- [x] `vite` - Build tool
- [x] `tailwindcss` - Styling
- [x] `lucide-react` - Ikony
- [x] `motion` - Animace

## 🚀 Spuštění projektu

```bash
# 1. Instalace závislostí
npm install

# 2. Spuštění dev serveru
npm run dev

# 3. Otevři prohlížeč na http://localhost:5173
```

## 🎨 Funkce webu

### ✅ Implementováno
- [x] Responzivní design (mobile, tablet, desktop)
- [x] Dark/Light mode s přepínačem
- [x] Smooth scroll navigace
- [x] Mobilní hamburger menu
- [x] Funkční kontaktní formulář (Azure API)
- [x] Galerie s 6 projekty
- [x] Teplé podlahářské barvy (amber-700, stone-900)
- [x] Google Fonts (Inter + Poppins)
- [x] Loading stavy na formuláři
- [x] Error handling
- [x] Success messages

### 🔧 Konfigurace

**Email API endpoint:**
```
https://tpodlahy.azurewebsites.net/api/email/send-email
```

**Barvy:**
- Light mode: `bg-amber-50` (krémová)
- Dark mode: `bg-stone-900` (teplá hnědá)
- Primární: `amber-700` (jantarová)

## 📝 Poznámky

1. **Fonts**: Google Fonts se načítají z `/src/styles/fonts.css`
2. **Images**: Hero používá ImageWithFallback komponentu
3. **Theme**: Persistence v localStorage jako 'theme'
4. **API**: POST request s JSON payload {name, email, subject, message}

## 🐛 Troubleshooting

**Port již používán?**
```bash
# Vite použije další volný port automaticky
# Nebo změň port v package.json:
"dev": "vite --port 3000"
```

**Chyby TypeScript?**
```bash
# Smazat cache a node_modules
rm -rf node_modules package-lock.json
npm install
```

**Tailwind nefunguje?**
```bash
# Zkontroluj, že máš správně @tailwindcss/vite v devDependencies
npm ls @tailwindcss/vite
```

## ✨ Hotovo!

Všechno je připravené! Spusť `npm run dev` a začni kódovat. 🚀
