# 🚀 START HERE - T-Podlahy

## ⚡ 30 sekund do spuštění

```bash
npm install && npm run dev
```

Otevři: **http://localhost:5173** 🎉

---

## 📚 Dokumentace

| Soubor | Účel |
|--------|------|
| 📄 **QUICKSTART.md** | 👈 **ZAČNI TADY** - Rychlý start za 3 kroky |
| 📄 **VIDEO_SETUP.md** | 🎬 Jak nahrát a změnit YouTube video |
| 📄 **LOGO_VIDEO_SUMMARY.md** | 🏷️ Logo + Video přehled |
| 📄 **FINAL_SUMMARY.md** | ✅ Kompletní přehled projektu |
| 📄 **README.md** | Kompletní dokumentace |
| 📄 **INSTALLATION_SUMMARY.md** | Přehled co bylo vytvořeno |
| 📄 **SETUP_CHECKLIST.md** | Checklist před spuštěním |
| 📄 **PROJECT_OVERVIEW.md** | Přehled funkcí a struktury |
| 📄 **DEPENDENCIES.md** | Info o balíčcích |

---

## ✏️ Co změnit PŘED nasazením

### 1. Kontaktní údaje (povinné)

**3 soubory k úpravě:**

```
src/app/components/Header.tsx   (řádek 47)
src/app/components/Contact.tsx  (řádky 50, 62, 74-76)
src/app/components/Footer.tsx   (řádky 70-81)
```

**Změň:**
- Tel: +420 604 786 107
- Email: pttom@seznam.cz
- Adresa: Jeřice 129, Praha

### 2. YouTube Video ID (DŮLEŽITÉ!)

**1 soubor k úpravě:**

```
src/app/components/Video.tsx  (řádek 7)
```

**Změň:**
```tsx
const youtubeVideoId = 'dQw4w9WgXcQ';  // ← ZMĚŇ na své YouTube Video ID
```

**📘 Návod:** Přečti **VIDEO_SETUP.md**

### 3. Texty (volitelné)

- `Hero.tsx` - Nadpisy
- `About.tsx` - Text o firmě
- `Services.tsx` - Popisy služeb
- `Video.tsx` - Statistiky (200+, 15+, 100%)  

---

## 🎨 Klíčové funkce

✅ Responzivní design  
✅ Dark/Light mode  
✅ Funkční formulář (Azure API)  
✅ Galerie 6 projektů  
✅ Smooth scroll navigace  
✅ Mobilní menu  
✅ Teplé podlahářské barvy  

---

## 🔥 NPM Příkazy

```bash
npm run dev      # Spustí dev server
npm run build    # Build pro produkci
npm run preview  # Preview buildu
```

---

## 🆘 Potřebuješ pomoc?

**Nefunguje?** → Přečti **QUICKSTART.md** (troubleshooting sekce)

---

## ✅ Status

🟢 **PRODUCTION READY**  
Vše je funkční a připravené k nasazení!

---

**Happy coding!** ✨🚀