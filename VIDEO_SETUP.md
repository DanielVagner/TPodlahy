# 🎬 Video Setup Guide

## 🚀 Jak nahrát vlastní video

### Možnost 1: YouTube Video (Doporučeno)

**Výhody:**
- ✅ Nemusíš hostovat video soubor
- ✅ Rychlé načítání
- ✅ Automatické přizpůsobení kvality
- ✅ Funguje všude

**Kroky:**

1. **Nahraj video na YouTube**
   - Jdi na https://studio.youtube.com
   - Klikni "Create" → "Upload video"
   - Nahraj své video TPodlahy

2. **Získej Video ID**
   - Po nahrání otevři video na YouTube
   - URL vypadá: `https://www.youtube.com/watch?v=ABC123XYZ`
   - Video ID je část za `v=` → **ABC123XYZ**

3. **Uprav Video.tsx**

Otevři soubor: `/src/app/components/Video.tsx`

**Řádek 7 - Změň:**
```tsx
const youtubeVideoId = 'dQw4w9WgXcQ'; // ← ZMĚŇ TOTO
```

**Na:**
```tsx
const youtubeVideoId = 'ABC123XYZ'; // ← Tvé Video ID
```

**HOTOVO!** 🎉

---

### Možnost 2: Vlastní video soubor

**Použij pokud:**
- Nechceš video na YouTube
- Chceš plnou kontrolu
- Video je krátké (< 50 MB)

**Kroky:**

1. **Připrav video soubor**
   - Formát: MP4 (doporučeno)
   - Rozlišení: 1920x1080 nebo 1280x720
   - Velikost: Max 50 MB pro dobré načítání

2. **Vlož video do projektu**
   
   Vytvoř složku `/public/videos/` a vlož tam video:
   ```
   /public/
     └── videos/
         └── tpodlahy-showcase.mp4
   ```

3. **Uprav Video.tsx**

Otevři soubor: `/src/app/components/Video.tsx`

**Řádky 6-11 - Zakomentuj YouTube:**
```tsx
// const youtubeVideoId = 'dQw4w9WgXcQ';

// Nebo použij vlastní video soubor:
const videoUrl = '/videos/tpodlahy-showcase.mp4';
```

**Řádky 42-50 - Zakomentuj YouTube iframe:**
```tsx
{/* YouTube iframe - zakomentováno
{isPlaying && (
  <iframe
    className="w-full h-full"
    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
    ...
  />
)}
*/}
```

**Řádky 52-61 - Odkomentuj vlastní video:**
```tsx
{isPlaying && (
  <video
    className="w-full h-full"
    controls
    autoPlay
    src={videoUrl}
  >
    Váš prohlížeč nepodporuje video tag.
  </video>
)}
```

**HOTOVO!** 🎉

---

### Možnost 3: Vimeo Video

1. **Nahraj na Vimeo**
   - https://vimeo.com/upload

2. **Získej Vimeo ID**
   - URL: `https://vimeo.com/123456789`
   - ID je: `123456789`

3. **Uprav Video.tsx**

**Místo YouTube iframe použij:**
```tsx
<iframe
  className="w-full h-full"
  src={`https://player.vimeo.com/video/123456789?autoplay=1`}
  title="TPodlahy Video"
  allow="autoplay; fullscreen"
  allowFullScreen
/>
```

---

## 🎨 Přizpůsobení

### Změna thumbnail obrázku

**Pro YouTube (automaticky):**
```tsx
src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
```

**Pro vlastní obrázek:**
```tsx
src="/images/video-thumbnail.jpg"
```

### Změna textu a čísel

Otevři `/src/app/components/Video.tsx`:

**Řádky 18-23 - Nadpis a popisek:**
```tsx
<h2>Podívejte se na naši práci</h2>  ← ZMĚŇ
<p>Video ukázka našich realizací...</p>  ← ZMĚŇ
```

**Řádky 65-81 - Statistiky pod videem:**
```tsx
<div>200+</div>  ← ZMĚŇ čísla
<div>Spokojených zákazníků</div>

<div>15+</div>  ← ZMĚŇ čísla
<div>Let zkušeností</div>

<div>100%</div>  ← ZMĚŇ čísla
<div>Záruka spokojenosti</div>
```

---

## 🔧 Optimalizace

### Komprimace videa (pokud je velké)

**Online nástroje:**
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com

**Cílová velikost:** 10-30 MB

**Nastavení:**
- Formát: MP4
- Kodek: H.264
- Rozlišení: 1280x720 (nebo 1920x1080)
- Bitrate: 2-5 Mbps

---

## 🐛 Troubleshooting

### Video se nenačítá

**YouTube:**
- ✅ Zkontroluj Video ID je správné
- ✅ Video není "Private" na YouTube
- ✅ Zkus jiný prohlížeč

**Vlastní video:**
- ✅ Zkontroluj cestu k souboru
- ✅ Video je v `/public/videos/`
- ✅ Formát je MP4

### Video thumbnail není vidět

**YouTube:**
- YouTube automaticky generuje thumbnail
- Zkus: `/hqdefault.jpg` místo `/maxresdefault.jpg`

**Vlastní:**
- Dej obrázek do `/public/images/`
- Použij: `src="/images/thumbnail.jpg"`

---

## 📝 Příklad kompletního YouTube nastavení

```tsx
// Video.tsx - Řádek 7
const youtubeVideoId = 'ABC123XYZ'; // ← Tvé Video ID

// To je všechno! Zbytek funguje automaticky.
```

---

## ✅ Checklist

- [ ] Video nahráno (YouTube nebo lokálně)
- [ ] Video ID/cesta zkopírována
- [ ] Video.tsx upraven
- [ ] Web otestován (`npm run dev`)
- [ ] Video se přehrává správně
- [ ] Thumbnail se zobrazuje
- [ ] Responzivní na mobilu

---

**Hotovo! Video je na webu!** 🎉
