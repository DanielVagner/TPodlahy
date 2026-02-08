# T-Podlahy - Profesionální podlahářské práce

Moderní webová prezentace podlahářské firmy vytvořená v React + Vite + Tailwind CSS v4.

## 🚀 Rychlý start

### Instalace závislostí

```bash
# S použitím npm
npm install

# Nebo s pnpm (doporučeno)
pnpm install

# Nebo s yarn
yarn install
```

### Spuštění dev serveru

```bash
npm run dev
```

Aplikace bude dostupná na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
```

Výsledek bude v adresáři `dist/`

### Preview produkční verze

```bash
npm run preview
```

## ✨ Funkce

- 🎨 **Moderní design** - Teplé barvy inspirované dřevem a podlahami (jantarová hnědá, krémová)
- 🏷️ **Vlastní logo** - TPodlahy logo v Header a Footer
- 🎬 **Video sekce** - Prezentace práce s YouTube embedem
- 🌓 **Dark/Light Mode** - Plně funkční přepínání témat s localStorage persistencí
- 📱 **Responzivní** - Optimalizováno pro mobily, tablety i desktop
- 🖼️ **Galerie projektů** - 6 reálných projektů s vlastními detailními galeriemi
- 📧 **Funkční formulář** - Odesílání emailů přes Azure API endpoint
- ⚡ **Rychlé načítání** - Optimalizováno pomocí Vite
- 🎭 **Smooth scroll** - Plynulá navigace mezi sekcemi
- 🔤 **Google Fonts** - Inter (text) a Poppins (nadpisy)

## 🛠️ Technologie

- **React 18.3.1** - UI framework
- **TypeScript 5.9+** - Type safety
- **Vite 6.3.5** - Build tool a dev server
- **Tailwind CSS v4.1** - Utility-first CSS framework
- **Lucide React** - Moderní ikony
- **Motion** - Animace (formerly Framer Motion)
- **Unsplash API** - Stock fotografie

## 📂 Struktura projektu

```
├── src/
│   ├── app/
│   │   ├── components/      # React komponenty
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/          # UI komponenty
│   │   ├── contexts/        # React contexts (ThemeContext)
│   │   └── App.tsx          # Hlavní komponenta
│   ├── styles/              # CSS a Tailwind konfigurace
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Barevné schéma

- **Primární**: Jantarově hnědá (amber-700) - evokuje dřevo a lak
- **Pozadí světlé**: Krémová (amber-50) - teplá alternativa k bílé
- **Pozadí tmavé**: Kamenná hnědá (stone-900) - teplý tmavý tón
- **Akcenty**: Medové a béžové odstíny

## 📄 Licence

Tento projekt je soukromý a není určen k dalšímu šíření.