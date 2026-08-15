# Project Memory — DragoWeb

## Syfte & kontext
Hemsida och hub för Drago Konsult AB — samlar alla Fredriks projekt och tjänster.
LIVE på drago.se via GitHub Pages sedan 2026-04-04.

## Företagsinfo
- **Namn:** Drago Konsult AB
- **Adress:** Överåsvägen 11, 443 61 Stenkullen
- **Org-nummer:** 559538-3778
- **Kontakt:** Fredrik Herrmann, 0709-466232, fredrik@drago.se
- **Webb:** www.drago.se
- **Delägare i:** Delta Fukt AB
- **OBS:** Fredrik är ensam i företaget — skriv ALDRIG "våra", "vårt" eller "vi"

## Tech stack
- **Frontend:** Vanilla HTML/CSS/JS (inga ramverk)
- **Typsnitt:** System sans-serif (Helvetica Neue) för rubriker/logga, SF Mono/Menlo (monospace) för brödtext
- **Hosting:** GitHub Pages (fredrikherrmann/DragoWeb)
- **Domän:** drago.se (DNS pekar på GitHub Pages)
- **Design:** Terminal-inspirerat ljust tema, TE/Polestar-inspirerad minimalism
- **i18n:** Bara svenska (alla andra språk borttagna 2026-08-14)

## Projektväg
`~/Library/CloudStorage/Dropbox/Macbook Privat/00 Claude Code/DragoWeb`

---

## Nuvarande status (2026-08-15)

### Struktur
- **Hero:** DRAG[logo] + tagline "Snickeri · Mjukvara · Konsult" (ingen "visa projekt"-knapp)
- **Projekt:** Två kategori-knappar "visa Snickeri →" / "visa Mjukvara →"
- **Om:** Kort text om bolaget (baserat i Lerum)
- **Kontakt:** Kontaktuppgifter (e-post, telefon, webb, plats)
- Varje sektion tar min 50vh med vertikalt centrerat innehåll
- Section-labels (// Projekt, // Om, // Kontakt) utan titlar under — font-size 14px

### Undersidor
- **snickeri.html** — Bildgalleri med byggda möbler, lightbox vid klick
  - Pall – Bonnie (björk, 3 bilder)
  - Soffbord – Bonnie (björk, 3 bilder)
  - Hatthylla – Tokyo (björk, 3 bilder)
  - Bänk – Ute (furu, 3 bilder)
  - Text: "Handbyggda möbler i massivt trä. Förfrågningar — fredrik@drago.se"
- **mjukvara.html** — DragoRS + PFterminal kort, rubrik "Utvecklade mjukvaror"
- **dragors.html** — DragoRS produktsida med features
- **pfterminal.html** — PFterminal med nedladdning + instruktionsbok
- **privacy.html** — Integritetspolicy

### Logga
- Cirkel med sunset-gradient (utan >_ terminal-prompt), svart yttre ring, vit inre ring, scanlines
- Logo.png: 1024x1024, används som "O" i DRAGO
- Hero CSS: height 0.78em, vertical-align -0.04em
- Header CSS: samma proportioner (0.78em, -0.04em)
- Loggor-arkiv i `02 Bibliotek/DragoWeb Bibliotek/Loggor/`

### Snickeri-bilder
- Källbilder: `02 Bibliotek/DragoWeb Bibliotek/Bilder Snickeri/` (en mapp per möbel, format NAMN – MODELL)
- Webb-bilder: `assets/snickeri/` (nedskalade till max 1200px med sips)
- Filnamn: `namn-modell-N.jpg` (t.ex. pall-bonnie-1.jpg)
- Vid nya bilder: skala från källmappen, lägg i assets/snickeri/, uppdatera snickeri.html
- Lightbox: klicka bild → förstoring i overlay, Escape/klick stänger

---

## Arbetsflöde
1. Claude Code gör kodändringar
2. Testa lokalt med `open index.html` + Cmd+R
3. `git push` → GitHub Pages deployer automatiskt
4. Verifiera på drago.se (privat fönster vid cache-problem)

## Deploy
- Repo: https://github.com/fredrikherrmann/DragoWeb
- GitHub Pages: branch main, path /
- CNAME: drago.se

---

## Filstruktur
```
DragoWeb/
├── index.html          — Startsida (hero, projekt-knappar, om, kontakt)
├── snickeri.html       — Snickerigalleri med möbelbilder
├── mjukvara.html       — Mjukvaruprojekt (DragoRS + PFterminal)
├── dragors.html        — DragoRS produktsida
├── pfterminal.html     — PFterminal produktsida
├── privacy.html        — Integritetspolicy
├── CNAME               — GitHub Pages custom domain
├── site.webmanifest    — PWA/Android manifest
├── css/style.css       — All styling
├── js/
│   ├── main.js         — Mobilmeny, scroll-effekter, lightbox
│   └── i18n.js         — Svenska översättningar (bara sv)
├── assets/
│   ├── logo.png        — Cirkellogga (sunset gradient, utan >_)
│   ├── logo.svg        — SVG-version
│   ├── drago-logo.png  — Full DRAGO-logga (text + cirkel)
│   ├── snickeri/       — Möbelbilder (nedskalade jpg)
│   ├── dragors-icon.png
│   ├── pfterminal-icon.png
│   ├── favicon.ico + favicon-*.png
│   └── apple-touch-icon.png
└── downloads/
    ├── PFterminal_0.1.0_aarch64.dmg
    └── PFterminal_Instruktionsbok.pdf
```

## Viktiga lärdomar
- GitHub Pages + CNAME = gratis hosting med auto-deploy vid git push
- Logo som inline <img> i <span> med em-enheter = skalar perfekt med text
- Logo-storlek: 0.78em + vertical-align -0.04em (matchar cap height för -apple-system)
- i18n.js överskriver HTML data-i18n-attribut — uppdatera BÅDA vid textändringar
- Snickeribilder: sips -Z 1200 för nedskalning, kontrollera att alla har samma proportioner
- EXIF-rotation kan ge fel orientering — verifiera efter sips-konvertering
