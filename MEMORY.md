# Project Memory — DragoWeb

## Syfte & kontext
Hemsida och hub för Drago Konsult AB — samlar alla Fredriks projekt och tjänster.
Ersätter befintlig WordPress-sida på drago.se. LIVE sedan 2026-04-04.

## Företagsinfo
- **Namn:** Drago Konsult AB
- **Adress:** Överåsvägen 11, 443 61 Stenkullen
- **Org-nummer:** 559538-3778
- **Kontakt:** Fredrik Herrmann, 0709-466232, fredrik@drago.se
- **Webb:** www.drago.se
- **Delägare i:** Delta Fukt AB

## Tech stack
- **Frontend:** Vanilla HTML/CSS/JS (inga ramverk)
- **Typsnitt:** System sans-serif (Helvetica Neue) för rubriker/logga, SF Mono/Menlo (monospace) för brödtext
- **Hosting:** GitHub Pages (fredrikherrmann/DragoWeb)
- **Domän:** drago.se (DNS pekar på GitHub Pages: 185.199.108.153)
- **Design:** Terminal-inspirerat ljust tema, TE/Polestar-inspirerad minimalism, mjuka gradient-toningar
- **i18n:** 12 språk (SV default, EN, DE, FR, ES, IT, PT, NL, DA, NO, FI, PL) via JS + cookie/URL-param

## Projektväg
`~/Library/CloudStorage/Dropbox/Macbook Privat/00 Claude Code/DragoWeb`

---

## Nuvarande status (2026-04-04)
- LIVE på drago.se via GitHub Pages
- Startsida (index.html): Hero med DRAG[logo], Projekt (DragoRS + PFterminal), Om oss, Kontakt
- DragoRS-sida (dragors.html): Hero, 9 feature-kort, tech stack, CTA till dragors.com
- PFterminal-sida (pfterminal.html): Nedladdning (.dmg v0.1.0), instruktionsbok (webb + PDF)
- Integritetspolicy (privacy.html)
- Logo-koncept: Synthwave-gradient terminal-ikon (>_) som "O" i DRAGO
- Favicon i alla format (ico, png 16/32/48/180/192/512, apple-touch-icon, webmanifest)
- 12 språk med auto-detect och dropdown i header
- Mobilanpassad (responsiva breakpoints)
- Mjuka gradient-toningar mellan sektioner (TE-stil)
- DNS: 4 A-poster (185.199.108-111.153) + CNAME www → fredrikherrmann.github.io
- HTTPS: Enforce HTTPS aktiverat 2026-04-05 (krävde borttagning av gammal AAAA-post på drago.se)
- Analytics: GoatCounter på alla sidor, dashboard: drago.goatcounter.com

---

## Viktiga lärdomar (tillägg)
- GitHub Pages SSL-cert genereras inte om gamla AAAA-poster (IPv6) finns kvar på root-domänen
- Logo.png har 10.25% transparent padding → använd 0.94em + vertical-align -0.13em för hero
- Mät alltid bildens bounding box innan CSS-storlekar sätts

---

## Viktiga lärdomar
- GitHub Pages + CNAME = gratis hosting med auto-deploy vid git push
- DNS-ändring i Inleed: A-post → 185.199.108.153, SSL-cert tar 5-30 min
- localStorage fungerar INTE mellan sidor på file:// — använd cookie + URL-param som fallback
- Logo som inline <img> i <span> med em-enheter = skalar perfekt med text
- Logo-storlek: 1.1em hero, 1.3em header (kompenserar för svart border-ring i loggan)
- Cache-problem vid deploy: privat fönster (Cmd+Shift+P) för att verifiera
- `text-transform: uppercase` i CSS döljer faktisk casing — ta bort om exakt casing behövs
- Gradient-toningar (::before/::after) behöver z-index på content för att inte dölja klickbara element

---

## Arbetsflöde
1. Claude Code gör kodändringar
2. `git push` → GitHub Pages deployer automatiskt (sekunder)
3. Verifiera på drago.se (privat fönster vid cache-problem)

## Deploy
- Repo: https://github.com/fredrikherrmann/DragoWeb
- GitHub Pages: branch main, path /
- CNAME: drago.se
- `gh` CLI installerat och autentiserat

## Kommunikation
- Språk: Svenska
- Feedback-stil: Direkt och koncis

---

## Filstruktur
```
DragoWeb/
├── index.html          — Startsida
├── dragors.html        — DragoRS produktsida
├── pfterminal.html     — PFterminal produktsida
├── privacy.html        — Integritetspolicy
├── CNAME               — GitHub Pages custom domain
├── site.webmanifest    — PWA/Android manifest
├── css/style.css       — All styling
├── js/
│   ├── main.js         — Mobilmeny, scroll-effekter
│   └── i18n.js         — Översättningar (12 språk)
├── assets/
│   ├── logo.png        — Huvudlogga (synthwave terminal)
│   ├── logo.svg        — SVG-version (modifierad)
│   ├── dragors-icon.png — DragoRS app-ikon
│   ├── pfterminal-icon.png — PFterminal app-ikon
│   ├── favicon.ico     — Favicon
│   ├── apple-touch-icon.png
│   └── favicon-*.png   — Alla storlekar
└── downloads/
    ├── PFterminal_0.1.0_aarch64.dmg
    └── PFterminal_Instruktionsbok.pdf
```
