# ⚡ Quick Start Guide - T-Podlahy

## 🚀 Spuštění za 3 kroky

### 1️⃣ Instalace
```bash
npm install
# nebo
pnpm install
```

### 2️⃣ Spuštění dev serveru
```bash
npm run dev
```

### 3️⃣ Otevři prohlížeč
```
http://localhost:5173
```

**Hotovo!** 🎉

---

## 🔧 Další příkazy

```bash
# Build pro produkci
npm run build

# Preview produkční verze
npm run preview
```

---

## 📝 Co dál upravit?

### 1. Kontaktní údaje
📁 `src/app/components/Contact.tsx`
```tsx
// Řádky 47-52 a 62-64
Tel: +420 604 786 107  ← Změň na své číslo
Email: pttom@seznam.cz  ← Změň na svůj email
Adresa: Jeřice 129  ← Změň na svou adresu
```

📁 `src/app/components/Header.tsx`
```tsx
// Řádek 47
Tel: +420 604 786 107  ← Změň na své číslo
```

📁 `src/app/components/Footer.tsx`
```tsx
// Řádky 70-81
Tel: +420 604 786 107  ← Změň
Email: pttom@seznam.cz  ← Změň
Adresa  ← Změň
```

### 2. YouTube Video ID (DŮLEŽITÉ!)
📁 `src/app/components/Video.tsx`
```tsx
// Řádek 7
const youtubeVideoId = 'dQw4w9WgXcQ';  ← ZMĚŇ na své YouTube Video ID
```

**📘 Podrobný návod:** Přečti `VIDEO_SETUP.md`

### 3. Název firmy (volitelné)
📁 `src/app/components/Header.tsx`
```tsx
// Řádek 23
<h1>TPodlahy.cz</h1>  ← Změň název
```

### 4. Hero text
📁 `src/app/components/Hero.tsx`
```tsx
// Řádky 27-32
Nadpis a popisek  ← Přizpůsob texty
```

### 5. O firmě
📁 `src/app/components/About.tsx`
```tsx
// Celý obsah sekce
Uprav texty o firmě
```

---

## 🎨 Změna barev (pokud potřeba)

📁 Vyhledej ve všech komponentech:
- `amber-700` → Primární barva
- `amber-50` → Světlé pozadí
- `stone-900` → Tmavé pozadí

---

## ✅ Checklist před nasazením

- [ ] Změn kontaktní údaje (tel, email, adresa)
- [ ] Uprav texty (Hero, About, Services)
- [ ] Otestuj formulář (odeslání emailu)
- [ ] Zkontroluj responzivitu (mobil, tablet, desktop)
- [ ] Otestuj dark mode
- [ ] Build: `npm run build`
- [ ] Test produkce: `npm run preview`

---

## 🆘 Pomoc

**Chyba při instalaci?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port už používán?**
```bash
# Vite automaticky najde jiný port
# Nebo specifikuj vlastní:
vite --port 3000
```

**Tailwind nefunguje?**
```bash
# Restart dev serveru
Ctrl+C
npm run dev
```

---

## 📚 Další dokumentace

- 📄 `README.md` - Kompletní dokumentace
- 📄 `SETUP_CHECKLIST.md` - Detailní checklist
- 📄 `PROJECT_OVERVIEW.md` - Přehled projektu