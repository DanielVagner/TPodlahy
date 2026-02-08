# 🎨 Logo + Video - Implementace Summary

## ✅ Co bylo přidáno

### 1. 🏷️ Logo TPodlahy

**Kde se zobrazuje:**
- ✅ **Header** (vlevo nahoře) - vedle názvu "TPodlahy.cz"
- ✅ **Footer** (dole) - vedle názvu firmy

**Technická implementace:**
```tsx
// Import loga
import logo from 'figma:asset/61f153b1999534edd095a4da673452c510e5b0b2.png';

// Header - normální barvy
<img src={logo} alt="TPodlahy.cz" className="h-10 w-auto" />

// Footer - invertováno na bílou (dark background)
<img src={logo} alt="TPodlahy.cz" className="h-8 w-auto brightness-0 invert" />
```

**Styly:**
- Header: 40px výška (h-10)
- Footer: 32px výška (h-8)
- Auto šířka pro zachování poměru stran
- Footer: Filtr pro bílou barvu na tmavém pozadí

---

### 2. 🎬 Video Sekce

**Umístění:**
- Mezi **Hero** a **Services** sekcemi
- Druhá sekce po úvodní hero
- ID: `#video` pro scroll navigaci

**Funkce:**
- ✅ YouTube video embed
- ✅ Vlastní thumbnail s play tlačítkem
- ✅ Autoplay při kliknutí
- ✅ Responzivní 16:9 aspect ratio
- ✅ Statistiky pod videem (3 kartičky)
- ✅ Dark mode support

**Komponenty:**

📁 `/src/app/components/Video.tsx` - Nová komponenta

**Struktura:**
```
Video Sekce
├── Nadpis + popisek
├── Video přehrávač
│   ├── Thumbnail obrázek
│   ├── Play tlačítko (před kliknutím)
│   └── YouTube iframe (po kliknutí)
└── Statistiky (3 karty)
    ├── 200+ Spokojených zákazníků
    ├── 15+ Let zkušeností
    └── 100% Záruka spokojenosti
```

---

## 🎯 Navigace

**Header menu aktualizováno:**
- Domů
- **Video** ← NOVÉ!
- Služby
- Galerie
- O nás
- Kontakt

**Mobilní menu:**
- Stejná navigace včetně Video položky

---

## 🔧 Jak upravit

### Logo

**Změnit logo na jiné:**

1. Ulož nové logo do `/public/images/logo.png`
2. Otevři `Header.tsx` a `Footer.tsx`
3. Změň import:
```tsx
// Místo:
import logo from 'figma:asset/61f153b1999534edd095a4da673452c510e5b0b2.png';

// Použij:
const logo = '/images/logo.png';
```

**Změnit velikost loga:**
```tsx
// Header
className="h-10 w-auto"  // ← Změň h-10 na h-12, h-14, etc.

// Footer
className="h-8 w-auto"   // ← Změň h-8 na h-10, h-12, etc.
```

---

### Video

**Změnit YouTube Video ID:**

📁 `/src/app/components/Video.tsx` - Řádek 7:
```tsx
const youtubeVideoId = 'ABC123XYZ';  // ← Tvé video ID
```

**Kde najít Video ID:**
- YouTube URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- ID je část za `v=` → **ABC123XYZ**

**Změnit statistiky:**

📁 `/src/app/components/Video.tsx` - Řádky 65-81:
```tsx
<div>200+</div>  ← ZMĚŇ číslo
<div>Spokojených zákazníků</div>  ← ZMĚŇ text

<div>15+</div>  ← ZMĚŇ číslo
<div>Let zkušeností</div>  ← ZMĚŇ text

<div>100%</div>  ← ZMĚŇ číslo
<div>Záruka spokojenosti</div>  ← ZMĚŇ text
```

**Změnit texty:**

📁 `/src/app/components/Video.tsx`:
```tsx
// Řádek 18 - Nadpis
<h2>Podívejte se na naši práci</h2>  ← ZMĚŇ

// Řádek 21 - Popisek
<p>Video ukázka našich realizací...</p>  ← ZMĚŇ
```

---

## 📱 Responzivita

**Logo:**
- Desktop: Zobrazeno s textem
- Mobile: Stejné (logo + text)

**Video:**
- Všechny velikosti: 16:9 aspect ratio
- Desktop: Max šířka 1280px (5xl)
- Mobile: Plná šířka s padding

**Statistiky:**
- Desktop: 3 sloupce vedle sebe
- Mobile: 1 sloupec pod sebou

---

## 🎨 Styling

### Logo

**Header (světlé/tmavé pozadí):**
```css
/* Normální logo - přizpůsobuje se theme */
h-10 w-auto
```

**Footer (tmavé pozadí):**
```css
/* Invertováno na bílou */
h-8 w-auto brightness-0 invert
```

### Video sekce

**Barvy:**
- Light mode: `bg-white`
- Dark mode: `bg-stone-800`

**Video kontejner:**
```css
aspect-video        /* 16:9 poměr */
rounded-2xl        /* Zaoblené rohy */
overflow-hidden    /* Clip obsahu */
shadow-2xl         /* Stín */
```

**Play tlačítko:**
```css
bg-amber-700       /* TPodlahy primární barva */
hover:bg-amber-600 /* Hover efekt */
rounded-full       /* Kruhové */
p-6               /* Velikost */
```

**Statistiky karty:**
```css
bg-amber-50                    /* Light mode */
dark:bg-amber-900/20          /* Dark mode */
rounded-lg                     /* Zaoblené */
p-6                           /* Padding */
text-center                   /* Centrovaný text */
```

---

## 📄 Soubory změněny

1. ✅ `/src/app/components/Header.tsx` - Přidáno logo + Video navigace
2. ✅ `/src/app/components/Footer.tsx` - Přidáno logo
3. ✅ `/src/app/components/Video.tsx` - NOVÝ - Video komponenta
4. ✅ `/src/app/App.tsx` - Import Video komponenty
5. ✅ `/README.md` - Aktualizováno
6. ✅ `/QUICKSTART.md` - Aktualizováno
7. ✅ `/VIDEO_SETUP.md` - NOVÝ - Návod na video

---

## 🚀 Testování

**Checklist:**
- [ ] Logo zobrazeno v Header
- [ ] Logo zobrazeno v Footer
- [ ] Video navigace v menu funguje
- [ ] Video thumbnail se zobrazuje
- [ ] Play tlačítko funguje
- [ ] Video se přehrává po kliknutí
- [ ] Statistiky správně zobrazeny
- [ ] Responzivní na mobilu
- [ ] Dark mode funguje správně

---

## 📚 Další dokumentace

**Video setup:**
- 📄 `VIDEO_SETUP.md` - Detailní návod jak změnit video

**Další alternativy videa:**
- Vimeo embed
- Vlastní video soubor (MP4)
- External video link

Viz `VIDEO_SETUP.md` pro podrobnosti.

---

## ✨ Hotovo!

Logo a video jsou plně implementovány a připraveny k použití! 🎉

**Next steps:**
1. Změň YouTube Video ID na své video
2. Uprav statistiky na své čísla
3. Přizpůsob texty

**Podrobné návody:**
- `VIDEO_SETUP.md` - Jak nahrát a změnit video
- `QUICKSTART.md` - Rychlý přehled úprav
