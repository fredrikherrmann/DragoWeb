// DragoWeb — Internationalization (i18n)
// Auto-detects browser language, saves preference in localStorage

const translations = {
  sv: {
    // Nav
    nav_projects: "Projekt",
    nav_about: "Om",
    nav_contact: "Kontakt",
    nav_home: "Hem",
    // Hero
    hero_tagline: "Snickeri · Mjukvara · Konsult",
    hero_desc_1: "Snickeri, mjukvaruutveckling",
    hero_desc_2: "och teknisk konsultverksamhet.",
    hero_cta: "visa projekt",
    hero_scroll: "scroll",
    // Projekt
    section_projects: "// Projekt",
    title_projects: "Projekt",
    dragors_tag: "Webbaserad",
    dragors_desc: "Rapportgenerator för bygg, projektledare och fukt- och skadebranschen. Komplett system med flerspråkigt stöd, PDF-export, mätprotokoll och smarta sök och integrationslösningar.",
    dragors_url: "Läs mer",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Personlig ekonomi-app med terminal-estetik. Manuell inmatning för medvetenhet om varje transaktion. Lokal lagring, ingen molnsynk — du äger din data. Byggt med Tauri v2.",
    pfterminal_url: "Ladda ner",
    pfterminal_more: "Läs mer",
    // Om oss
    section_about: "// Om",
    about_p1: "Drago Konsult AB är ett svenskt företag baserat i Lerum med verksamhet inom snickeri, mjukvaruutveckling och teknisk konsultverksamhet.",
    about_p2: "",
    about_p3: "Drago är även delägare i bolag.",
    info_company: "Bolag",
    info_orgno: "Org.nr",
    info_address: "Adress",
    info_contact: "Kontakt",
    // Kontakt
    section_contact: "// Kontakt",
    title_contact: "Kontaktuppgifter",
    contact_text: "",
    contact_email: "E-post",
    contact_phone: "Telefon",
    contact_web: "Webb",
    contact_location: "Plats",
    // PFterminal page
    pf_hero_desc: "Personlig ekonomi-app med terminal-estetik. Manuell inmatning för medvetenhet om varje transaktion. Lokal lagring, ingen molnsynk — du äger din data.",
    pf_section_download: "// Ladda ner",
    pf_title_download: "Senaste versionen",
    pf_macos_title: "PFterminal för macOS",
    pf_macos_desc: "Kräver macOS 12 eller senare. Installera genom att dra appen till Applications.",
    pf_macos_btn: "Ladda ner .dmg",
    pf_manual_title: "Instruktionsbok",
    pf_manual_desc: "Komplett guide för att komma igång med PFterminal. Kategorier, sparande, kopplingar och mer.",
    pf_manual_btn: "Ladda ner PDF",
    pf_section_manual: "// Instruktionsbok",
    pf_title_manual: "Kom igång med PFterminal",
    pf_ch1: "1. Installation",
    pf_ch1_p: "Ladda ner .dmg-filen ovan. Dubbelklicka för att öppna, dra PFterminal till Applications. Starta appen — vid första start väljer du en backup-plats.",
    pf_ch2: "2. Grunderna",
    pf_ch2_p1: "Appen är uppbyggd som ett kalkylblad med flikar för varje månad: JAN, FEB, ... DEC, plus SPAR och TOT.",
    pf_ch2_p2: "Varje månadsflik har kategorier (rader) med kolumnerna: Kategori, Beskrivning, Belopp, Datum.",
    pf_ch3: "3. Standardkategorier",
    pf_ch3_p: "Dubbelklicka på en kategori-rubrik för att byta namn. Klicka × för att ta bort (alla utom Inkomst). Lägg till egna med +NY RAD.",
    pf_ch4: "4. Inmatning",
    pf_ch4_p: "Datum sätts automatiskt när du fyller i ett belopp.",
    pf_ch5: "5. SPAR-fliken",
    pf_ch5_p1: "Fyra kolumner: Stående spar (+), Extra in (+), Insättning (+), Uttag (-).",
    pf_ch5_p2: "Positiva värden ökar sparandet, uttag minskar.",
    pf_ch6: "6. TOT-fliken",
    pf_ch6_p: "Helårsöversikt — sammanställer alla månader automatiskt.",
    pf_ch7: "7. Kopplingar",
    pf_ch7_p: "+Koppla summa — länka en cell till en annan, även mellan flikar. Orange text markerar kopplade celler. Ta bort med -Koppla summa.",
    pf_ch8: "8. Förifyllt",
    pf_ch8_p: "Skapa en mall med +Förifyllt (grön kursiv text). Mallen återkommer i nya månader. Ta bort med -Förifyllt.",
    pf_ch9: "9. Ångra / Gör om",
    pf_ch9_p: "Cmd+Z / Cmd+Shift+Z, eller knapparna ↩/↪. 50 steg sparas.",
    pf_ch10: "10. Inställningar",
    pf_ch10_p1: "Cmd+, öppnar inställningspanelen: backup-plats, tema (ljust/mörkt), och återställning från backup.",
    pf_ch10_p2: "Backup sparas automatiskt vid varje ändring till din valda backup-mapp.",
    // Categories
    cat_income: "Inkomst — Lön och andra inkomster",
    cat_savings: "Spar — Sparande",
    cat_fixed: "Fasta utgifter — Hyra, el, försäkringar",
    cat_food: "Mat/Tobak — Dagliga inköp",
    cat_large: "Stora inköp — Elektronik, möbler etc.",
    cat_small: "Små inköp — Kaffe, kläder etc.",
    // Input
    input_click: "Klick på en cell = ersätt innehållet",
    input_dblclick: "Dubbelklick = redigera befintligt",
    input_arrows: "Piltangenter = navigera mellan celler",
    input_paste: "Klistra in från Excel — stöd för flerradig vertikal inklistering",
    input_amount: "Belopp med komma som decimalavskiljare (t.ex. 90,48)",
    // DragoRS page
    rs_hero_desc: "Komplett rapportgenerator för bygg, projektledare och fukt- och skadebranschen. Skapa professionella rapporter med mätprotokoll, bildhantering, PDF-export och flerspråkigt stöd — direkt i webbläsaren, mobilen eller plattan.",
    rs_section_features: "// Funktioner",
    rs_title_features: "Allt du behöver i fält och på kontoret",
    rs_feat1_title: "Rapportgenerator", rs_feat1_desc: "Skapa kompletta fukt-, skade- och besiktningsrapporter med strukturerade sektioner, fri text och smarta mallar.",
    rs_feat2_title: "PDF-export", rs_feat2_desc: "Generera professionella PDF-rapporter med ett klick. Logga, sidhuvud, sidnumrering och formatering — redo att skicka till kund.",
    rs_feat3_title: "Mätprotokoll", rs_feat3_desc: "Integrera mätvärden från fuktmätningar direkt i rapporten. Stöd för Celsicom och SuperVision loggermätningar.",
    rs_feat4_title: "Möten och ronder", rs_feat4_desc: "Dokumentera byggmöten, projekteringsmöten och fuktronder. Strukturerade protokoll med deltagare, beslut och åtgärdspunkter.",
    rs_feat5_title: "Egna mallar", rs_feat5_desc: "Bygg och anpassa dina egna rapportmallar. Spara tid genom att återanvända strukturer, texter och inställningar mellan projekt.",
    rs_feat6_title: "Branschregler", rs_feat6_desc: "Sök och referera till relevanta branschregler direkt i rapporten. Håll dig uppdaterad med gällande krav och standarder.",
    rs_feat7_title: "Bildhantering", rs_feat7_desc: "Lägg till bilder direkt från kameran eller filsystemet. Bildtexter och automatisk numrering i rapporten.",
    rs_feat8_title: "Flerspråkigt stöd", rs_feat8_desc: "Skriv rapporter på svenska, engelska och fler språk. Byt språk per rapport — perfekt för internationella uppdrag.",
    rs_feat9_title: "Skicka uppgifter", rs_feat9_desc: "Skicka åtgärdspunkter och uppgifter från protokoll direkt till deltagare via mail. Alla vet vad de ansvarar för — utan extra administration.",
    rs_section_screenshots: "// I praktiken", rs_title_screenshots: "Så ser det ut",
    rs_screen1: "Rapportöversikt — alla projekt samlade", rs_screen2: "Rapportredigering med sektioner och bilder", rs_screen3: "PDF-export — professionellt resultat",
    rs_section_tech: "// Teknologi", rs_title_tech: "Byggt för prestanda",
    rs_tech_desc: "Webbaserad plattform — fungerar på dator, surfplatta och mobil. Ingen installation krävs. Dina rapporter lagras säkert i molnet och är tillgängliga var du än befinner dig.",
    rs_cta: "Gå till DragoRS",
  }
};

// Apply Swedish translations to all data-i18n elements
document.addEventListener("DOMContentLoaded", () => {
  const t = translations.sv;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
});
