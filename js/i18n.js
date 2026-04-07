// DragoWeb — Internationalization (i18n)
// Auto-detects browser language, saves preference in localStorage

const translations = {
  sv: {
    // Nav
    nav_projects: "Projekt",
    nav_about: "Om oss",
    nav_contact: "Kontakt",
    nav_home: "Hem",
    // Hero
    hero_tagline: "Konsult · Mjukvara · Investering",
    hero_desc_1: "Kreativ mjukvaruutveckling med fokus på",
    hero_desc_2: "kvalitet, enkelhet och användarvänlighet.",
    hero_cta: "visa projekt",
    hero_scroll: "scroll",
    // Projekt
    section_projects: "// Projekt",
    title_projects: "Program",
    dragors_tag: "Webbaserad",
    dragors_desc: "Rapportgenerator för bygg, projektledare och fukt- och skadebranschen. Komplett system med flerspråkigt stöd, PDF-export, mätprotokoll och smarta sök och integrationslösningar.",
    dragors_url: "Läs mer",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Personlig ekonomi-app med terminal-estetik. Manuell inmatning för medvetenhet om varje transaktion. Lokal lagring, ingen molnsynk — du äger din data. Byggt med Tauri v2.",
    pfterminal_url: "Ladda ner",
    pfterminal_more: "Läs mer",
    // Om oss
    section_about: "// Om oss",
    about_p1: "Drago Konsult AB är ett svenskt mjukvaru- och konsultbolag baserat i Göteborgsområdet. Drago bygger verktyg och system som löser problem och gör vardagen enklare.",
    about_p2: "Med en filosofi i estetik och enkelhet skapar vi produkter som är snabba, tillförlitliga och eleganta — byggt för att hålla.",
    about_p3: "Drago är även delägare i bolag.",
    info_company: "Bolag",
    info_orgno: "Org.nr",
    info_address: "Adress",
    info_contact: "Kontakt",
    // Kontakt
    section_contact: "// Kontakt",
    title_contact: "Hör av dig",
    contact_text: "Har du ett projekt som behöver utvecklas? Eller vill du veta mer om våra verktyg? Hör av dig:",
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
  },

  en: {
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    nav_home: "Home",
    hero_tagline: "Consulting · Software · Investment",
    hero_desc_1: "Creative software development with focus on",
    hero_desc_2: "quality, simplicity and usability.",
    hero_cta: "view projects",
    hero_scroll: "scroll",
    section_projects: "// Projects",
    title_projects: "Program",
    dragors_tag: "Web-based",
    dragors_desc: "Report generator for construction, project managers and the moisture and damage industry. Complete system with multilingual support, PDF export, measurement protocols and smart search and integration solutions.",
    dragors_url: "Read more",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Personal finance app with terminal aesthetics. Manual entry for awareness of every transaction. Local storage, no cloud sync — you own your data. Built with Tauri v2.",
    pfterminal_url: "Download",
    pfterminal_more: "Read more",
    section_about: "// About",
    about_p1: "Drago Konsult AB is a Swedish software and consulting company based in the Gothenburg area. Drago builds tools and systems that solve problems and make everyday life easier.",
    about_p2: "With a philosophy in aesthetics and simplicity, we create products that are fast, reliable and elegant — built to last.",
    about_p3: "Drago is also a co-owner in companies.",
    info_company: "Company",
    info_orgno: "Reg. no",
    info_address: "Address",
    info_contact: "Contact",
    section_contact: "// Contact",
    title_contact: "Get in touch",
    contact_text: "Have a project that needs development? Or want to know more about our tools? Get in touch:",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_web: "Web",
    contact_location: "Location",
    pf_hero_desc: "Personal finance app with terminal aesthetics. Manual entry for awareness of every transaction. Local storage, no cloud sync — you own your data.",
    pf_section_download: "// Download",
    pf_title_download: "Latest version",
    pf_macos_title: "PFterminal for macOS",
    pf_macos_desc: "Requires macOS 12 or later. Install by dragging the app to Applications.",
    pf_macos_btn: "Download .dmg",
    pf_manual_title: "User manual",
    pf_manual_desc: "Complete guide to get started with PFterminal. Categories, savings, links and more.",
    pf_manual_btn: "Download PDF",
    pf_section_manual: "// User manual",
    pf_title_manual: "Get started with PFterminal",
    pf_ch1: "1. Installation",
    pf_ch1_p: "Download the .dmg file above. Double-click to open, drag PFterminal to Applications. Start the app — on first launch you choose a backup location.",
    pf_ch2: "2. Basics",
    pf_ch2_p1: "The app is structured as a spreadsheet with tabs for each month: JAN, FEB, ... DEC, plus SAVINGS and TOTAL.",
    pf_ch2_p2: "Each month tab has categories (rows) with columns: Category, Description, Amount, Date.",
    pf_ch3: "3. Default categories",
    pf_ch3_p: "Double-click a category header to rename. Click × to delete (all except Income). Add custom ones with +NEW ROW.",
    pf_ch4: "4. Input",
    pf_ch4_p: "Date is set automatically when you enter an amount.",
    pf_ch5: "5. SAVINGS tab",
    pf_ch5_p1: "Four columns: Standing savings (+), Extra in (+), Deposit (+), Withdrawal (-).",
    pf_ch5_p2: "Positive values increase savings, withdrawals decrease.",
    pf_ch6: "6. TOTAL tab",
    pf_ch6_p: "Full year overview — compiles all months automatically.",
    pf_ch7: "7. Links",
    pf_ch7_p: "+Link sum — link a cell to another, even between tabs. Orange text marks linked cells. Remove with -Link sum.",
    pf_ch8: "8. Pre-filled",
    pf_ch8_p: "Create a template with +Pre-filled (green italic text). The template recurs in new months. Remove with -Pre-filled.",
    pf_ch9: "9. Undo / Redo",
    pf_ch9_p: "Cmd+Z / Cmd+Shift+Z, or the buttons ↩/↪. 50 steps saved.",
    pf_ch10: "10. Settings",
    pf_ch10_p1: "Cmd+, opens the settings panel: backup location, theme (light/dark), and restore from backup.",
    pf_ch10_p2: "Backup is saved automatically on every change to your chosen backup folder.",
    cat_income: "Income — Salary and other income",
    cat_savings: "Savings — Savings",
    cat_fixed: "Fixed expenses — Rent, electricity, insurance",
    cat_food: "Food/Tobacco — Daily purchases",
    cat_large: "Large purchases — Electronics, furniture etc.",
    cat_small: "Small purchases — Coffee, clothes etc.",
    input_click: "Click on a cell = replace content",
    input_dblclick: "Double-click = edit existing",
    input_arrows: "Arrow keys = navigate between cells",
    input_paste: "Paste from Excel — multi-line vertical paste support",
    input_amount: "Amounts with comma as decimal separator (e.g. 90.48)",
    // DragoRS page
    rs_hero_desc: "Complete report generator for construction, project managers and the moisture and damage industry. Create professional reports with measurement protocols, image handling, PDF export and multilingual support — directly in the browser, on mobile or tablet.",
    rs_section_features: "// Features",
    rs_title_features: "Everything you need in the field and at the office",
    rs_feat1_title: "Report generator", rs_feat1_desc: "Create complete moisture, damage and inspection reports with structured sections, free text and smart templates.",
    rs_feat2_title: "PDF export", rs_feat2_desc: "Generate professional PDF reports with one click. Logo, header, page numbering and formatting — ready to send to the client.",
    rs_feat3_title: "Measurement protocols", rs_feat3_desc: "Integrate measurement values from moisture measurements directly into the report. Support for Celsicom and SuperVision logger measurements.",
    rs_feat4_title: "Meetings and rounds", rs_feat4_desc: "Document construction meetings, design meetings and moisture rounds. Structured protocols with participants, decisions and action items.",
    rs_feat5_title: "Custom templates", rs_feat5_desc: "Build and customize your own report templates. Save time by reusing structures, texts and settings between projects.",
    rs_feat6_title: "Industry standards", rs_feat6_desc: "Search and reference relevant industry standards directly in the report. Stay up to date with current requirements and regulations.",
    rs_feat7_title: "Image handling", rs_feat7_desc: "Add images directly from the camera or file system. Captions and automatic numbering in the report.",
    rs_feat8_title: "Multilingual support", rs_feat8_desc: "Write reports in Swedish, English and more languages. Switch language per report — perfect for international assignments.",
    rs_feat9_title: "Send tasks", rs_feat9_desc: "Send action items and tasks from meeting minutes directly to participants via email. Everyone knows what they're responsible for — no extra admin.",
    rs_section_screenshots: "// In practice", rs_title_screenshots: "See it in action",
    rs_screen1: "Report overview — all projects collected", rs_screen2: "Report editing with sections and images", rs_screen3: "PDF export — professional result",
    rs_section_tech: "// Technology", rs_title_tech: "Built for performance",
    rs_tech_desc: "Web-based platform — works on desktop, tablet and mobile. No installation required. Your reports are stored securely in the cloud and accessible wherever you are.",
    rs_cta: "Go to DragoRS",
  },

  de: {
    nav_projects: "Projekte", nav_about: "Über uns", nav_contact: "Kontakt", nav_home: "Start",
    hero_tagline: "Beratung · Software · Investition",
    hero_desc_1: "Kreative Softwareentwicklung mit Fokus auf",
    hero_desc_2: "Qualität, Einfachheit und Benutzerfreundlichkeit.",
    hero_cta: "Projekte ansehen", hero_scroll: "scrollen",
    section_projects: "// Projekte", title_projects: "Program",
    dragors_tag: "Webbasiert",
    dragors_desc: "Berichtgenerator für Bau, Projektleiter und die Feuchtigkeits- und Schadenbranche. Komplettes System mit mehrsprachiger Unterstützung, PDF-Export, Messprotokollen und intelligenten Such- und Integrationslösungen.",
    dragors_url: "Mehr erfahren",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Persönliche Finanz-App mit Terminal-Ästhetik. Manuelle Eingabe für Bewusstsein über jede Transaktion. Lokale Speicherung, keine Cloud-Synchronisation — Ihre Daten gehören Ihnen. Gebaut mit Tauri v2.",
    pfterminal_url: "Herunterladen",
    pfterminal_more: "Mehr erfahren",
    section_about: "// Über uns",
    about_p1: "Drago Konsult AB ist ein schwedisches Software- und Beratungsunternehmen im Raum Göteborg. Drago baut Werkzeuge und Systeme, die Probleme lösen und den Alltag erleichtern.",
    about_p2: "Mit einer Philosophie der Ästhetik und Einfachheit schaffen wir Produkte, die schnell, zuverlässig und elegant sind — gebaut um zu halten.",
    about_p3: "Drago ist auch Mitinhaber von Unternehmen.",
    info_company: "Unternehmen", info_orgno: "Reg.-Nr.", info_address: "Adresse", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Kontaktieren Sie uns",
    contact_text: "Haben Sie ein Projekt, das entwickelt werden muss? Oder möchten Sie mehr über unsere Tools erfahren? Kontaktieren Sie uns:",
    contact_email: "E-Mail", contact_phone: "Telefon", contact_web: "Web", contact_location: "Standort",
    pf_hero_desc: "Persönliche Finanz-App mit Terminal-Ästhetik. Manuelle Eingabe für Bewusstsein über jede Transaktion. Lokale Speicherung, keine Cloud-Synchronisation — Ihre Daten gehören Ihnen.",
    pf_section_download: "// Herunterladen", pf_title_download: "Neueste Version",
    pf_macos_title: "PFterminal für macOS", pf_macos_desc: "Erfordert macOS 12 oder neuer. Installieren Sie durch Ziehen der App in Applications.",
    pf_macos_btn: ".dmg herunterladen", pf_manual_title: "Benutzerhandbuch",
    pf_manual_desc: "Vollständige Anleitung für den Einstieg mit PFterminal. Kategorien, Sparen, Verknüpfungen und mehr.",
    pf_manual_btn: "PDF herunterladen", pf_section_manual: "// Benutzerhandbuch", pf_title_manual: "Erste Schritte mit PFterminal",
    pf_ch1: "1. Installation", pf_ch1_p: "Laden Sie die .dmg-Datei oben herunter. Doppelklicken Sie zum Öffnen, ziehen Sie PFterminal in Applications. Starten Sie die App — beim ersten Start wählen Sie einen Backup-Speicherort.",
    pf_ch2: "2. Grundlagen", pf_ch2_p1: "Die App ist als Tabellenkalkulation mit Tabs für jeden Monat aufgebaut: JAN, FEB, ... DEZ, plus SPAREN und GESAMT.",
    pf_ch2_p2: "Jeder Monatstab hat Kategorien (Zeilen) mit den Spalten: Kategorie, Beschreibung, Betrag, Datum.",
    pf_ch3: "3. Standardkategorien", pf_ch3_p: "Doppelklicken Sie auf eine Kategorieüberschrift zum Umbenennen. Klicken Sie × zum Löschen (alle außer Einkommen). Eigene hinzufügen mit +NEUE ZEILE.",
    pf_ch4: "4. Eingabe", pf_ch4_p: "Das Datum wird automatisch gesetzt, wenn Sie einen Betrag eingeben.",
    pf_ch5: "5. SPAREN-Tab", pf_ch5_p1: "Vier Spalten: Dauerauftrag (+), Extra ein (+), Einzahlung (+), Abhebung (-).", pf_ch5_p2: "Positive Werte erhöhen die Ersparnisse, Abhebungen verringern sie.",
    pf_ch6: "6. GESAMT-Tab", pf_ch6_p: "Jahresübersicht — fasst alle Monate automatisch zusammen.",
    pf_ch7: "7. Verknüpfungen", pf_ch7_p: "+Summe verknüpfen — verknüpfen Sie eine Zelle mit einer anderen, auch zwischen Tabs. Orangener Text markiert verknüpfte Zellen. Entfernen mit -Summe verknüpfen.",
    pf_ch8: "8. Vorausgefüllt", pf_ch8_p: "Erstellen Sie eine Vorlage mit +Vorausgefüllt (grüner kursiver Text). Die Vorlage erscheint in neuen Monaten wieder. Entfernen mit -Vorausgefüllt.",
    pf_ch9: "9. Rückgängig / Wiederholen", pf_ch9_p: "Cmd+Z / Cmd+Shift+Z oder die Tasten ↩/↪. 50 Schritte gespeichert.",
    pf_ch10: "10. Einstellungen", pf_ch10_p1: "Cmd+, öffnet das Einstellungsfenster: Backup-Speicherort, Thema (hell/dunkel) und Wiederherstellung aus Backup.",
    pf_ch10_p2: "Backup wird bei jeder Änderung automatisch in Ihrem gewählten Backup-Ordner gespeichert.",
    cat_income: "Einkommen — Gehalt und andere Einkünfte", cat_savings: "Sparen — Ersparnisse",
    cat_fixed: "Fixkosten — Miete, Strom, Versicherungen", cat_food: "Lebensmittel/Tabak — Tägliche Einkäufe",
    cat_large: "Große Anschaffungen — Elektronik, Möbel etc.", cat_small: "Kleine Einkäufe — Kaffee, Kleidung etc.",
    input_click: "Klick auf eine Zelle = Inhalt ersetzen", input_dblclick: "Doppelklick = Bestehendes bearbeiten",
    input_arrows: "Pfeiltasten = zwischen Zellen navigieren", input_paste: "Einfügen aus Excel — mehrzeilige vertikale Einfügung",
    input_amount: "Beträge mit Komma als Dezimaltrennzeichen (z.B. 90,48)",
    rs_hero_desc: "Kompletter Berichtgenerator für Bau, Projektleiter und die Feuchtigkeits- und Schadenbranche. Erstellen Sie professionelle Berichte mit Messprotokollen, Bildverwaltung, PDF-Export und mehrsprachiger Unterstützung — direkt im Browser, auf dem Handy oder Tablet.",
    rs_section_features: "// Funktionen", rs_title_features: "Alles was Sie im Feld und im Büro brauchen",
    rs_feat1_title: "Berichtgenerator", rs_feat1_desc: "Erstellen Sie komplette Feuchtigkeits-, Schaden- und Inspektionsberichte mit strukturierten Abschnitten, Freitext und intelligenten Vorlagen.",
    rs_feat2_title: "PDF-Export", rs_feat2_desc: "Generieren Sie professionelle PDF-Berichte mit einem Klick. Logo, Kopfzeile, Seitennummerierung und Formatierung — versandfertig.",
    rs_feat3_title: "Messprotokolle", rs_feat3_desc: "Integrieren Sie Messwerte aus Feuchtigkeitsmessungen direkt in den Bericht. Unterstützung für Celsicom und SuperVision.",
    rs_feat4_title: "Besprechungen und Runden", rs_feat4_desc: "Dokumentieren Sie Baubesprechungen, Planungsmeetings und Feuchtigkeitsrunden. Strukturierte Protokolle mit Teilnehmern, Beschlüssen und Maßnahmen.",
    rs_feat5_title: "Eigene Vorlagen", rs_feat5_desc: "Erstellen und passen Sie Ihre eigenen Berichtvorlagen an. Sparen Sie Zeit durch Wiederverwendung von Strukturen, Texten und Einstellungen.",
    rs_feat6_title: "Branchenregeln", rs_feat6_desc: "Suchen und referenzieren Sie relevante Branchenstandards direkt im Bericht. Bleiben Sie auf dem neuesten Stand.",
    rs_feat7_title: "Bildverwaltung", rs_feat7_desc: "Fügen Sie Bilder direkt von der Kamera oder dem Dateisystem hinzu. Bildunterschriften und automatische Nummerierung.",
    rs_feat8_title: "Mehrsprachig", rs_feat8_desc: "Schreiben Sie Berichte in Schwedisch, Englisch und weiteren Sprachen. Sprachwechsel pro Bericht — perfekt für internationale Aufträge.",
    rs_feat9_title: "Aufgaben senden", rs_feat9_desc: "Senden Sie Maßnahmen und Aufgaben aus Protokollen direkt per E-Mail an Teilnehmer. Jeder weiß, wofür er verantwortlich ist — ohne Mehraufwand.",
    rs_section_screenshots: "// In der Praxis", rs_title_screenshots: "So sieht es aus",
    rs_screen1: "Berichtsübersicht — alle Projekte gesammelt", rs_screen2: "Berichtsbearbeitung mit Abschnitten und Bildern", rs_screen3: "PDF-Export — professionelles Ergebnis",
    rs_section_tech: "// Technologie", rs_title_tech: "Gebaut für Leistung",
    rs_tech_desc: "Webbasierte Plattform — funktioniert auf Computer, Tablet und Mobilgerät. Keine Installation erforderlich. Ihre Berichte werden sicher in der Cloud gespeichert.",
    rs_cta: "Zu DragoRS",
  },

  fr: {
    nav_projects: "Projets", nav_about: "À propos", nav_contact: "Contact", nav_home: "Accueil",
    hero_tagline: "Conseil · Logiciel · Investissement",
    hero_desc_1: "Développement logiciel créatif axé sur",
    hero_desc_2: "la qualité, la simplicité et la convivialité.",
    hero_cta: "voir les projets", hero_scroll: "défiler",
    section_projects: "// Projets", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Générateur de rapports pour le bâtiment, les chefs de projet et le secteur de l'humidité et des sinistres. Système complet avec support multilingue, export PDF, protocoles de mesure et solutions intelligentes de recherche et d'intégration.",
    dragors_url: "En savoir plus",
    pfterminal_tag: "Bureau", pfterminal_desc: "Application de finances personnelles avec esthétique terminal. Saisie manuelle pour une conscience de chaque transaction. Stockage local, pas de synchronisation cloud — vos données vous appartiennent. Construit avec Tauri v2.",
    pfterminal_url: "Télécharger",
    pfterminal_more: "En savoir plus",
    section_about: "// À propos",
    about_p1: "Drago Konsult AB est une société suédoise de logiciels et de conseil basée dans la région de Göteborg. Drago construit des outils et des systèmes qui résolvent les problèmes et simplifient le quotidien.",
    about_p2: "Avec une philosophie d'esthétique et de simplicité, nous créons des produits rapides, fiables et élégants — construits pour durer.",
    about_p3: "Drago est également copropriétaire d'entreprises.",
    info_company: "Société", info_orgno: "N° d'enr.", info_address: "Adresse", info_contact: "Contact",
    section_contact: "// Contact", title_contact: "Contactez-nous",
    contact_text: "Vous avez un projet à développer ? Ou souhaitez en savoir plus sur nos outils ? Contactez-nous :",
    contact_email: "E-mail", contact_phone: "Téléphone", contact_web: "Web", contact_location: "Lieu",
    pf_hero_desc: "Application de finances personnelles avec esthétique terminal. Saisie manuelle pour une conscience de chaque transaction. Stockage local, pas de synchronisation cloud — vos données vous appartiennent.",
    pf_section_download: "// Télécharger", pf_title_download: "Dernière version",
    pf_macos_title: "PFterminal pour macOS", pf_macos_desc: "Nécessite macOS 12 ou ultérieur. Installez en glissant l'application dans Applications.",
    pf_macos_btn: "Télécharger .dmg", pf_manual_title: "Manuel d'utilisation",
    pf_manual_desc: "Guide complet pour démarrer avec PFterminal. Catégories, épargne, liens et plus.",
    pf_manual_btn: "Télécharger PDF", pf_section_manual: "// Manuel", pf_title_manual: "Démarrer avec PFterminal",
    pf_ch1: "1. Installation", pf_ch1_p: "Téléchargez le fichier .dmg ci-dessus. Double-cliquez pour ouvrir, glissez PFterminal dans Applications. Lancez l'app — au premier démarrage, choisissez un emplacement de sauvegarde.",
    pf_ch2: "2. Les bases", pf_ch2_p1: "L'application est structurée comme un tableur avec des onglets pour chaque mois : JAN, FÉV, ... DÉC, plus ÉPARGNE et TOTAL.",
    pf_ch2_p2: "Chaque onglet mensuel a des catégories (lignes) avec les colonnes : Catégorie, Description, Montant, Date.",
    pf_ch3: "3. Catégories par défaut", pf_ch3_p: "Double-cliquez sur un en-tête de catégorie pour renommer. Cliquez × pour supprimer (toutes sauf Revenus). Ajoutez les vôtres avec +NOUVELLE LIGNE.",
    pf_ch4: "4. Saisie", pf_ch4_p: "La date est définie automatiquement lorsque vous saisissez un montant.",
    pf_ch5: "5. Onglet ÉPARGNE", pf_ch5_p1: "Quatre colonnes : Épargne permanente (+), Extra (+), Dépôt (+), Retrait (-).", pf_ch5_p2: "Les valeurs positives augmentent l'épargne, les retraits diminuent.",
    pf_ch6: "6. Onglet TOTAL", pf_ch6_p: "Vue d'ensemble annuelle — compile tous les mois automatiquement.",
    pf_ch7: "7. Liaisons", pf_ch7_p: "+Lier somme — liez une cellule à une autre, même entre onglets. Le texte orange marque les cellules liées. Supprimez avec -Lier somme.",
    pf_ch8: "8. Pré-rempli", pf_ch8_p: "Créez un modèle avec +Pré-rempli (texte vert italique). Le modèle réapparaît dans les nouveaux mois. Supprimez avec -Pré-rempli.",
    pf_ch9: "9. Annuler / Rétablir", pf_ch9_p: "Cmd+Z / Cmd+Shift+Z, ou les boutons ↩/↪. 50 étapes sauvegardées.",
    pf_ch10: "10. Paramètres", pf_ch10_p1: "Cmd+, ouvre le panneau des paramètres : emplacement de sauvegarde, thème (clair/sombre) et restauration depuis la sauvegarde.",
    pf_ch10_p2: "La sauvegarde est effectuée automatiquement à chaque modification dans votre dossier de sauvegarde choisi.",
    cat_income: "Revenus — Salaire et autres revenus", cat_savings: "Épargne — Épargne",
    cat_fixed: "Charges fixes — Loyer, électricité, assurances", cat_food: "Alimentation/Tabac — Achats quotidiens",
    cat_large: "Gros achats — Électronique, meubles etc.", cat_small: "Petits achats — Café, vêtements etc.",
    input_click: "Clic sur une cellule = remplacer le contenu", input_dblclick: "Double-clic = modifier l'existant",
    input_arrows: "Touches fléchées = naviguer entre les cellules", input_paste: "Coller depuis Excel — collage vertical multiligne",
    input_amount: "Montants avec virgule comme séparateur décimal (ex. 90,48)",
    rs_hero_desc: "Générateur de rapports complet pour le bâtiment, les chefs de projet et le secteur de l'humidité et des sinistres. Créez des rapports professionnels avec protocoles de mesure, gestion d'images, export PDF et support multilingue — directement dans le navigateur, sur mobile ou tablette.",
    rs_section_features: "// Fonctionnalités", rs_title_features: "Tout ce dont vous avez besoin sur le terrain et au bureau",
    rs_feat1_title: "Générateur de rapports", rs_feat1_desc: "Créez des rapports complets d'humidité, de dommages et d'inspection avec des sections structurées, du texte libre et des modèles intelligents.",
    rs_feat2_title: "Export PDF", rs_feat2_desc: "Générez des rapports PDF professionnels en un clic. Logo, en-tête, numérotation et mise en page — prêt à envoyer au client.",
    rs_feat3_title: "Protocoles de mesure", rs_feat3_desc: "Intégrez les valeurs de mesure d'humidité directement dans le rapport. Support Celsicom et SuperVision.",
    rs_feat4_title: "Réunions et tournées", rs_feat4_desc: "Documentez les réunions de chantier, de conception et les tournées d'humidité. Protocoles structurés avec participants, décisions et actions.",
    rs_feat5_title: "Modèles personnalisés", rs_feat5_desc: "Créez et personnalisez vos propres modèles de rapport. Gagnez du temps en réutilisant structures, textes et paramètres entre projets.",
    rs_feat6_title: "Normes du secteur", rs_feat6_desc: "Recherchez et référencez les normes sectorielles pertinentes directement dans le rapport. Restez à jour avec les exigences en vigueur.",
    rs_feat7_title: "Gestion d'images", rs_feat7_desc: "Ajoutez des images depuis l'appareil photo ou le système de fichiers. Légendes et numérotation automatique.",
    rs_feat8_title: "Multilingue", rs_feat8_desc: "Rédigez des rapports en suédois, anglais et d'autres langues. Changez de langue par rapport — parfait pour les missions internationales.",
    rs_feat9_title: "Envoyer des tâches", rs_feat9_desc: "Envoyez les points d'action et tâches des procès-verbaux directement aux participants par e-mail. Chacun sait ce dont il est responsable — sans administration supplémentaire.",
    rs_section_screenshots: "// En pratique", rs_title_screenshots: "Aperçu",
    rs_screen1: "Vue d'ensemble des rapports", rs_screen2: "Édition de rapport avec sections et images", rs_screen3: "Export PDF — résultat professionnel",
    rs_section_tech: "// Technologie", rs_title_tech: "Conçu pour la performance",
    rs_tech_desc: "Plateforme web — fonctionne sur ordinateur, tablette et mobile. Aucune installation requise. Vos rapports sont stockés en sécurité dans le cloud.",
    rs_cta: "Aller à DragoRS",
  },

  es: {
    nav_projects: "Proyectos", nav_about: "Sobre nosotros", nav_contact: "Contacto", nav_home: "Inicio",
    hero_tagline: "Consultoría · Software · Inversión",
    hero_desc_1: "Desarrollo de software creativo enfocado en",
    hero_desc_2: "calidad, simplicidad y usabilidad.",
    hero_cta: "ver proyectos", hero_scroll: "desplazar",
    section_projects: "// Proyectos", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Generador de informes para construcción, jefes de proyecto y el sector de humedad y daños. Sistema completo con soporte multilingüe, exportación PDF, protocolos de medición y soluciones inteligentes de búsqueda e integración.",
    dragors_url: "Leer más",
    pfterminal_tag: "Escritorio", pfterminal_desc: "App de finanzas personales con estética de terminal. Entrada manual para conciencia de cada transacción. Almacenamiento local, sin sincronización en la nube — tus datos son tuyos. Construido con Tauri v2.",
    pfterminal_url: "Descargar",
    pfterminal_more: "Leer más",
    section_about: "// Sobre nosotros",
    about_p1: "Drago Konsult AB es una empresa sueca de software y consultoría con sede en el área de Gotemburgo. Drago construye herramientas y sistemas que resuelven problemas y facilitan la vida cotidiana.",
    about_p2: "Con una filosofía de estética y simplicidad, creamos productos rápidos, fiables y elegantes — construidos para durar.",
    about_p3: "Drago también es copropietario de empresas.",
    info_company: "Empresa", info_orgno: "N° reg.", info_address: "Dirección", info_contact: "Contacto",
    section_contact: "// Contacto", title_contact: "Contáctanos",
    contact_text: "¿Tienes un proyecto que necesita desarrollo? ¿O quieres saber más sobre nuestras herramientas? Contáctanos:",
    contact_email: "Email", contact_phone: "Teléfono", contact_web: "Web", contact_location: "Ubicación",
    pf_hero_desc: "App de finanzas personales con estética de terminal. Entrada manual para conciencia de cada transacción. Almacenamiento local, sin sincronización en la nube — tus datos son tuyos.",
    pf_section_download: "// Descargar", pf_title_download: "Última versión",
    pf_macos_title: "PFterminal para macOS", pf_macos_desc: "Requiere macOS 12 o posterior. Instalar arrastrando la app a Applications.",
    pf_macos_btn: "Descargar .dmg", pf_manual_title: "Manual de usuario", pf_manual_desc: "Guía completa para comenzar con PFterminal.",
    pf_manual_btn: "Descargar PDF", pf_section_manual: "// Manual", pf_title_manual: "Comenzar con PFterminal",
    pf_ch1: "1. Instalación", pf_ch1_p: "Descarga el archivo .dmg. Haz doble clic para abrir, arrastra PFterminal a Applications.",
    pf_ch2: "2. Fundamentos", pf_ch2_p1: "La app está estructurada como una hoja de cálculo con pestañas para cada mes.", pf_ch2_p2: "Cada pestaña tiene categorías con columnas: Categoría, Descripción, Monto, Fecha.",
    pf_ch3: "3. Categorías predeterminadas", pf_ch3_p: "Doble clic en un encabezado para renombrar. Clic × para eliminar.",
    pf_ch4: "4. Entrada", pf_ch4_p: "La fecha se establece automáticamente al ingresar un monto.",
    pf_ch5: "5. Pestaña AHORRO", pf_ch5_p1: "Cuatro columnas: Ahorro fijo (+), Extra (+), Depósito (+), Retiro (-).", pf_ch5_p2: "Valores positivos aumentan el ahorro.",
    pf_ch6: "6. Pestaña TOTAL", pf_ch6_p: "Resumen anual — compila todos los meses automáticamente.",
    pf_ch7: "7. Enlaces", pf_ch7_p: "+Enlazar suma — vincula una celda con otra. Texto naranja marca celdas enlazadas.",
    pf_ch8: "8. Pre-llenado", pf_ch8_p: "Crea una plantilla con +Pre-llenado. La plantilla reaparece en nuevos meses.",
    pf_ch9: "9. Deshacer / Rehacer", pf_ch9_p: "Cmd+Z / Cmd+Shift+Z. 50 pasos guardados.",
    pf_ch10: "10. Configuración", pf_ch10_p1: "Cmd+, abre la configuración: ubicación de backup, tema y restauración.", pf_ch10_p2: "El backup se guarda automáticamente.",
    cat_income: "Ingresos", cat_savings: "Ahorro", cat_fixed: "Gastos fijos", cat_food: "Alimentación",
    cat_large: "Compras grandes", cat_small: "Compras pequeñas",
    input_click: "Clic = reemplazar", input_dblclick: "Doble clic = editar", input_arrows: "Flechas = navegar",
    input_paste: "Pegar desde Excel", input_amount: "Montos con coma decimal",
    rs_hero_desc: "Generador de informes completo para construcción, jefes de proyecto y el sector de humedad y daños. Crea informes profesionales con protocolos de medición, gestión de imágenes, exportación PDF y soporte multilingüe — directamente en el navegador, en el móvil o la tablet.",
    rs_section_features: "// Funciones", rs_title_features: "Todo lo que necesitas en campo y en la oficina",
    rs_feat1_title: "Generador de informes", rs_feat1_desc: "Crea informes completos de humedad, daños e inspección con secciones estructuradas, texto libre y plantillas inteligentes.",
    rs_feat2_title: "Exportación PDF", rs_feat2_desc: "Genera informes PDF profesionales con un clic. Logo, encabezado, numeración y formato — listo para enviar al cliente.",
    rs_feat3_title: "Protocolos de medición", rs_feat3_desc: "Integra valores de medición de humedad directamente en el informe. Soporte para Celsicom y SuperVision.",
    rs_feat4_title: "Reuniones y rondas", rs_feat4_desc: "Documenta reuniones de obra, de diseño y rondas de humedad. Protocolos estructurados con participantes, decisiones y acciones.",
    rs_feat5_title: "Plantillas propias", rs_feat5_desc: "Crea y personaliza tus propias plantillas de informe. Ahorra tiempo reutilizando estructuras, textos y configuraciones entre proyectos.",
    rs_feat6_title: "Normativa del sector", rs_feat6_desc: "Busca y referencia normativas sectoriales relevantes directamente en el informe. Mantente actualizado con los requisitos vigentes.",
    rs_feat7_title: "Gestión de imágenes", rs_feat7_desc: "Añade imágenes desde la cámara o el sistema de archivos. Subtítulos y numeración automática.",
    rs_feat8_title: "Multilingüe", rs_feat8_desc: "Escribe informes en sueco, inglés y más idiomas. Cambia de idioma por informe — perfecto para encargos internacionales.",
    rs_feat9_title: "Enviar tareas", rs_feat9_desc: "Envía puntos de acción y tareas de las actas directamente a los participantes por correo. Todos saben de qué son responsables — sin administración extra.",
    rs_section_screenshots: "// En práctica", rs_title_screenshots: "Así se ve",
    rs_screen1: "Vista general de informes", rs_screen2: "Edición con secciones e imágenes", rs_screen3: "Exportación PDF — resultado profesional",
    rs_section_tech: "// Tecnología", rs_title_tech: "Construido para el rendimiento",
    rs_tech_desc: "Plataforma web — funciona en ordenador, tablet y móvil. Sin instalación. Tus informes se almacenan de forma segura en la nube.",
    rs_cta: "Ir a DragoRS",
  },

  it: {
    nav_projects: "Progetti", nav_about: "Chi siamo", nav_contact: "Contatti", nav_home: "Home",
    hero_tagline: "Consulenza · Software · Investimento",
    hero_desc_1: "Sviluppo software creativo focalizzato su",
    hero_desc_2: "qualità, semplicità e usabilità.",
    hero_cta: "vedi progetti", hero_scroll: "scorri",
    section_projects: "// Progetti", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Generatore di report per edilizia, project manager e il settore umidità e danni. Sistema completo con supporto multilingue, esportazione PDF, protocolli di misurazione e soluzioni intelligenti.",
    dragors_url: "Scopri di più",
    pfterminal_tag: "Desktop", pfterminal_desc: "App di finanza personale con estetica terminale. Inserimento manuale per consapevolezza di ogni transazione. Archiviazione locale, nessuna sincronizzazione cloud — i tuoi dati sono tuoi. Costruito con Tauri v2.",
    pfterminal_url: "Scarica",
    pfterminal_more: "Scopri di più",
    section_about: "// Chi siamo",
    about_p1: "Drago Konsult AB è una società svedese di software e consulenza con sede nell'area di Göteborg. Drago costruisce strumenti e sistemi che risolvono problemi e semplificano la vita quotidiana.",
    about_p2: "Con una filosofia di estetica e semplicità, creiamo prodotti veloci, affidabili ed eleganti — costruiti per durare.",
    about_p3: "Drago è anche comproprietario di aziende.",
    info_company: "Azienda", info_orgno: "P. IVA", info_address: "Indirizzo", info_contact: "Contatto",
    section_contact: "// Contatti", title_contact: "Contattaci",
    contact_text: "Hai un progetto da sviluppare? O vuoi saperne di più sui nostri strumenti? Contattaci:",
    contact_email: "Email", contact_phone: "Telefono", contact_web: "Web", contact_location: "Sede",
    pf_hero_desc: "App di finanza personale con estetica terminale. Inserimento manuale per consapevolezza di ogni transazione. Archiviazione locale — i tuoi dati sono tuoi.",
    pf_section_download: "// Scarica", pf_title_download: "Ultima versione",
    pf_macos_title: "PFterminal per macOS", pf_macos_desc: "Richiede macOS 12 o successivo.",
    pf_macos_btn: "Scarica .dmg", pf_manual_title: "Manuale utente", pf_manual_desc: "Guida completa per iniziare con PFterminal.",
    pf_manual_btn: "Scarica PDF", pf_section_manual: "// Manuale", pf_title_manual: "Iniziare con PFterminal",
    pf_ch1: "1. Installazione", pf_ch1_p: "Scarica il file .dmg. Doppio clic per aprire, trascina PFterminal in Applications.",
    pf_ch2: "2. Fondamenti", pf_ch2_p1: "L'app è strutturata come un foglio di calcolo con schede per ogni mese.", pf_ch2_p2: "Ogni scheda ha categorie con colonne: Categoria, Descrizione, Importo, Data.",
    pf_ch3: "3. Categorie predefinite", pf_ch3_p: "Doppio clic su un'intestazione per rinominare. Clic × per eliminare.",
    pf_ch4: "4. Inserimento", pf_ch4_p: "La data viene impostata automaticamente quando inserisci un importo.",
    pf_ch5: "5. Scheda RISPARMIO", pf_ch5_p1: "Quattro colonne: Risparmio fisso (+), Extra (+), Deposito (+), Prelievo (-).", pf_ch5_p2: "I valori positivi aumentano il risparmio.",
    pf_ch6: "6. Scheda TOTALE", pf_ch6_p: "Panoramica annuale — compila tutti i mesi automaticamente.",
    pf_ch7: "7. Collegamenti", pf_ch7_p: "+Collega somma — collega una cella a un'altra. Il testo arancione indica celle collegate.",
    pf_ch8: "8. Pre-compilato", pf_ch8_p: "Crea un modello con +Pre-compilato. Il modello riappare nei nuovi mesi.",
    pf_ch9: "9. Annulla / Ripeti", pf_ch9_p: "Cmd+Z / Cmd+Shift+Z. 50 passaggi salvati.",
    pf_ch10: "10. Impostazioni", pf_ch10_p1: "Cmd+, apre le impostazioni: posizione backup, tema e ripristino.", pf_ch10_p2: "Il backup viene salvato automaticamente.",
    cat_income: "Reddito", cat_savings: "Risparmio", cat_fixed: "Spese fisse", cat_food: "Alimentari",
    cat_large: "Acquisti grandi", cat_small: "Acquisti piccoli",
    input_click: "Clic = sostituisci", input_dblclick: "Doppio clic = modifica", input_arrows: "Frecce = naviga",
    input_paste: "Incolla da Excel", input_amount: "Importi con virgola decimale",
    rs_hero_desc: "Generatore di report completo per edilizia, project manager e il settore umidità e danni. Crea report professionali con protocolli di misurazione, gestione immagini, esportazione PDF e supporto multilingue — direttamente nel browser, su mobile o tablet.",
    rs_section_features: "// Funzionalità", rs_title_features: "Tutto ciò che serve in campo e in ufficio",
    rs_feat1_title: "Generatore di report", rs_feat1_desc: "Crea report completi di umidità, danni e ispezione con sezioni strutturate, testo libero e modelli intelligenti.",
    rs_feat2_title: "Esportazione PDF", rs_feat2_desc: "Genera report PDF professionali con un clic. Logo, intestazione, numerazione pagine e formattazione — pronti da inviare al cliente.",
    rs_feat3_title: "Protocolli di misurazione", rs_feat3_desc: "Integra i valori di misurazione dell'umidità direttamente nel report. Supporto per Celsicom e SuperVision.",
    rs_feat4_title: "Riunioni e ispezioni", rs_feat4_desc: "Documenta riunioni di cantiere, di progettazione e ispezioni di umidità. Protocolli strutturati con partecipanti, decisioni e azioni.",
    rs_feat5_title: "Modelli personalizzati", rs_feat5_desc: "Crea e personalizza i tuoi modelli di report. Risparmia tempo riutilizzando strutture, testi e impostazioni tra progetti.",
    rs_feat6_title: "Normative di settore", rs_feat6_desc: "Cerca e fai riferimento alle normative di settore pertinenti direttamente nel report. Rimani aggiornato con i requisiti vigenti.",
    rs_feat7_title: "Gestione immagini", rs_feat7_desc: "Aggiungi immagini dalla fotocamera o dal file system. Didascalie e numerazione automatica.",
    rs_feat8_title: "Multilingue", rs_feat8_desc: "Scrivi report in svedese, inglese e altre lingue. Cambia lingua per report — perfetto per incarichi internazionali.",
    rs_feat9_title: "Invia compiti", rs_feat9_desc: "Invia punti d'azione e compiti dai verbali direttamente ai partecipanti via e-mail. Ognuno sa di cosa è responsabile — senza amministrazione extra.",
    rs_section_screenshots: "// In pratica", rs_title_screenshots: "Ecco come appare",
    rs_screen1: "Panoramica report", rs_screen2: "Modifica report con sezioni e immagini", rs_screen3: "Esportazione PDF — risultato professionale",
    rs_section_tech: "// Tecnologia", rs_title_tech: "Costruito per le prestazioni",
    rs_tech_desc: "Piattaforma web — funziona su computer, tablet e mobile. Nessuna installazione richiesta. I tuoi report sono archiviati in sicurezza nel cloud.",
    rs_cta: "Vai a DragoRS",
  },

  pt: {
    nav_projects: "Projetos", nav_about: "Sobre nós", nav_contact: "Contato", nav_home: "Início",
    hero_tagline: "Consultoria · Software · Investimento",
    hero_desc_1: "Desenvolvimento de software criativo focado em",
    hero_desc_2: "qualidade, simplicidade e usabilidade.",
    hero_cta: "ver projetos", hero_scroll: "rolar",
    section_projects: "// Projetos", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Gerador de relatórios para construção, gerentes de projeto e o setor de umidade e danos. Sistema completo com suporte multilíngue, exportação PDF e soluções inteligentes.",
    dragors_url: "Saiba mais",
    pfterminal_tag: "Desktop", pfterminal_desc: "App de finanças pessoais com estética de terminal. Entrada manual para consciência de cada transação. Armazenamento local — seus dados são seus. Construído com Tauri v2.",
    pfterminal_url: "Baixar",
    pfterminal_more: "Saiba mais",
    section_about: "// Sobre nós",
    about_p1: "Drago Konsult AB é uma empresa sueca de software e consultoria baseada na região de Gotemburgo. A Drago constrói ferramentas e sistemas que resolvem problemas e facilitam o dia a dia.",
    about_p2: "Com uma filosofia de estética e simplicidade, criamos produtos rápidos, confiáveis e elegantes — construídos para durar.",
    about_p3: "A Drago também é coproprietária de empresas.",
    info_company: "Empresa", info_orgno: "CNPJ", info_address: "Endereço", info_contact: "Contato",
    section_contact: "// Contato", title_contact: "Entre em contato",
    contact_text: "Tem um projeto que precisa de desenvolvimento? Ou quer saber mais sobre nossas ferramentas? Entre em contato:",
    contact_email: "Email", contact_phone: "Telefone", contact_web: "Web", contact_location: "Local",
    rs_hero_desc: "Gerador de relatórios completo para construção, gerentes de projeto e o setor de umidade e danos. Crie relatórios profissionais com protocolos de medição, gestão de imagens, exportação PDF e suporte multilíngue — diretamente no navegador, no celular ou tablet.",
    rs_section_features: "// Funcionalidades", rs_title_features: "Tudo o que precisa no campo e no escritório",
    rs_feat1_title: "Gerador de relatórios", rs_feat1_desc: "Crie relatórios completos de umidade, danos e inspeção com seções estruturadas, texto livre e modelos inteligentes.",
    rs_feat2_title: "Exportação PDF", rs_feat2_desc: "Gere relatórios PDF profissionais com um clique. Logotipo, cabeçalho, numeração e formatação — pronto para enviar ao cliente.",
    rs_feat3_title: "Protocolos de medição", rs_feat3_desc: "Integre valores de medição de umidade diretamente no relatório. Suporte para Celsicom e SuperVision.",
    rs_feat4_title: "Reuniões e rondas", rs_feat4_desc: "Documente reuniões de obra, de projeto e rondas de umidade. Protocolos estruturados com participantes, decisões e ações.",
    rs_feat5_title: "Modelos próprios", rs_feat5_desc: "Crie e personalize seus próprios modelos de relatório. Economize tempo reutilizando estruturas, textos e configurações entre projetos.",
    rs_feat6_title: "Normas do setor", rs_feat6_desc: "Pesquise e referencie normas setoriais relevantes diretamente no relatório. Mantenha-se atualizado com os requisitos vigentes.",
    rs_feat7_title: "Gestão de imagens", rs_feat7_desc: "Adicione imagens da câmera ou do sistema de arquivos. Legendas e numeração automática.",
    rs_feat8_title: "Multilíngue", rs_feat8_desc: "Escreva relatórios em sueco, inglês e mais idiomas. Mude o idioma por relatório.",
    rs_feat9_title: "Enviar tarefas", rs_feat9_desc: "Envie pontos de ação e tarefas das atas diretamente aos participantes por e-mail. Todos sabem pelo que são responsáveis — sem administração extra.",
    rs_section_screenshots: "// Na prática", rs_title_screenshots: "Veja como funciona",
    rs_screen1: "Visão geral dos relatórios", rs_screen2: "Edição com seções e imagens", rs_screen3: "Exportação PDF — resultado profissional",
    rs_section_tech: "// Tecnologia", rs_title_tech: "Construído para desempenho",
    rs_tech_desc: "Plataforma web — funciona em computador, tablet e celular. Sem instalação. Seus relatórios são armazenados com segurança na nuvem.",
    rs_cta: "Ir para DragoRS",
  },

  nl: {
    nav_projects: "Projecten", nav_about: "Over ons", nav_contact: "Contact", nav_home: "Home",
    hero_tagline: "Advies · Software · Investering",
    hero_desc_1: "Creatieve softwareontwikkeling gericht op",
    hero_desc_2: "kwaliteit, eenvoud en gebruiksvriendelijkheid.",
    hero_cta: "bekijk projecten", hero_scroll: "scroll",
    section_projects: "// Projecten", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Rapportgenerator voor bouw, projectleiders en de vocht- en schadebranche. Compleet systeem met meertalige ondersteuning, PDF-export en slimme zoek- en integratieoplossingen.",
    dragors_url: "Meer info",
    pfterminal_tag: "Desktop", pfterminal_desc: "Persoonlijke financiën-app met terminal-esthetiek. Handmatige invoer voor bewustzijn van elke transactie. Lokale opslag — uw gegevens zijn van u. Gebouwd met Tauri v2.",
    pfterminal_url: "Downloaden",
    pfterminal_more: "Meer info",
    section_about: "// Over ons",
    about_p1: "Drago Konsult AB is een Zweeds software- en adviesbureau gevestigd in de regio Göteborg. Drago bouwt tools en systemen die problemen oplossen en het dagelijks leven vergemakkelijken.",
    about_p2: "Met een filosofie van esthetiek en eenvoud creëren we producten die snel, betrouwbaar en elegant zijn — gebouwd om te blijven.",
    about_p3: "Drago is ook mede-eigenaar van bedrijven.",
    info_company: "Bedrijf", info_orgno: "KvK-nr.", info_address: "Adres", info_contact: "Contact",
    section_contact: "// Contact", title_contact: "Neem contact op",
    contact_text: "Heeft u een project dat ontwikkeld moet worden? Of wilt u meer weten over onze tools? Neem contact op:",
    contact_email: "E-mail", contact_phone: "Telefoon", contact_web: "Web", contact_location: "Locatie",
    rs_hero_desc: "Complete rapportgenerator voor bouw, projectleiders en de vocht- en schadebranche. Maak professionele rapporten met meetprotocollen, beeldbeheer, PDF-export en meertalige ondersteuning — direct in de browser, op mobiel of tablet.",
    rs_section_features: "// Functies", rs_title_features: "Alles wat u nodig heeft in het veld en op kantoor",
    rs_feat1_title: "Rapportgenerator", rs_feat1_desc: "Maak complete vocht-, schade- en inspectierapporten met gestructureerde secties, vrije tekst en slimme sjablonen.",
    rs_feat2_title: "PDF-export", rs_feat2_desc: "Genereer professionele PDF-rapporten met één klik. Logo, koptekst, paginanummering en opmaak — klaar om te verzenden.",
    rs_feat3_title: "Meetprotocollen", rs_feat3_desc: "Integreer meetwaarden van vochtmetingen direct in het rapport. Ondersteuning voor Celsicom en SuperVision.",
    rs_feat4_title: "Vergaderingen en rondes", rs_feat4_desc: "Documenteer bouwvergaderingen, ontwerpvergaderingen en vochtronden. Gestructureerde protocollen met deelnemers, besluiten en actiepunten.",
    rs_feat5_title: "Eigen sjablonen", rs_feat5_desc: "Bouw en pas uw eigen rapportsjablonen aan. Bespaar tijd door structuren, teksten en instellingen te hergebruiken.",
    rs_feat6_title: "Brancheregels", rs_feat6_desc: "Zoek en refereer aan relevante branchestandaarden direct in het rapport. Blijf op de hoogte van geldende eisen.",
    rs_feat7_title: "Beeldbeheer", rs_feat7_desc: "Voeg afbeeldingen toe vanaf de camera of het bestandssysteem. Bijschriften en automatische nummering.",
    rs_feat8_title: "Meertalig", rs_feat8_desc: "Schrijf rapporten in het Zweeds, Engels en meer talen. Wissel van taal per rapport.",
    rs_feat9_title: "Taken versturen", rs_feat9_desc: "Verstuur actiepunten en taken uit notulen direct per e-mail naar deelnemers. Iedereen weet waarvoor hij verantwoordelijk is — zonder extra administratie.",
    rs_section_screenshots: "// In de praktijk", rs_title_screenshots: "Zo ziet het eruit",
    rs_screen1: "Rapportoverzicht", rs_screen2: "Rapportbewerking met secties en afbeeldingen", rs_screen3: "PDF-export — professioneel resultaat",
    rs_section_tech: "// Technologie", rs_title_tech: "Gebouwd voor prestaties",
    rs_tech_desc: "Webplatform — werkt op computer, tablet en mobiel. Geen installatie nodig. Uw rapporten worden veilig opgeslagen in de cloud.",
    rs_cta: "Ga naar DragoRS",
  },

  da: {
    nav_projects: "Projekter", nav_about: "Om os", nav_contact: "Kontakt", nav_home: "Hjem",
    hero_tagline: "Konsulent · Software · Investering",
    hero_desc_1: "Kreativ softwareudvikling med fokus på",
    hero_desc_2: "kvalitet, enkelhed og brugervenlighed.",
    hero_cta: "se projekter", hero_scroll: "scroll",
    section_projects: "// Projekter", title_projects: "Program",
    dragors_tag: "Webbaseret", dragors_desc: "Rapportgenerator til byggeri, projektledere og fugt- og skadebranchen. Komplet system med flersproget support, PDF-eksport og smarte søge- og integrationsløsninger.",
    dragors_url: "Læs mere",
    pfterminal_tag: "Desktop", pfterminal_desc: "Personlig økonomi-app med terminal-æstetik. Manuel indtastning for bevidsthed om hver transaktion. Lokal lagring — du ejer dine data. Bygget med Tauri v2.",
    pfterminal_url: "Download",
    pfterminal_more: "Læs mere",
    section_about: "// Om os",
    about_p1: "Drago Konsult AB er et svensk software- og konsulentfirma baseret i Göteborg-området. Drago bygger værktøjer og systemer der løser problemer og gør hverdagen nemmere.",
    about_p2: "Med en filosofi i æstetik og enkelhed skaber vi produkter der er hurtige, pålidelige og elegante — bygget til at holde.",
    about_p3: "Drago er også medejer i virksomheder.",
    info_company: "Virksomhed", info_orgno: "CVR-nr.", info_address: "Adresse", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Kontakt os",
    contact_text: "Har du et projekt der skal udvikles? Eller vil du vide mere om vores værktøjer? Kontakt os:",
    contact_email: "E-mail", contact_phone: "Telefon", contact_web: "Web", contact_location: "Sted",
    rs_hero_desc: "Komplet rapportgenerator til byggeri, projektledere og fugt- og skadebranchen. Opret professionelle rapporter med måleprotokoller, billedhåndtering, PDF-eksport og flersproget support — direkte i browseren, på mobilen eller tabletten.",
    rs_section_features: "// Funktioner", rs_title_features: "Alt du behøver i marken og på kontoret",
    rs_feat1_title: "Rapportgenerator", rs_feat1_desc: "Opret komplette fugt-, skade- og inspektionsrapporter med strukturerede sektioner, fri tekst og smarte skabeloner.",
    rs_feat2_title: "PDF-eksport", rs_feat2_desc: "Generer professionelle PDF-rapporter med ét klik. Logo, sidehoved, sidetal og formatering — klar til afsendelse.",
    rs_feat3_title: "Måleprotokoller", rs_feat3_desc: "Integrér måleværdier fra fugtmålinger direkte i rapporten. Support for Celsicom og SuperVision.",
    rs_feat4_title: "Møder og runder", rs_feat4_desc: "Dokumentér byggemøder, projekteringsmøder og fugtrunder. Strukturerede protokoller med deltagere, beslutninger og handlingspunkter.",
    rs_feat5_title: "Egne skabeloner", rs_feat5_desc: "Byg og tilpas dine egne rapportskabeloner. Spar tid ved at genbruge strukturer, tekster og indstillinger mellem projekter.",
    rs_feat6_title: "Brancheregler", rs_feat6_desc: "Søg og referer til relevante branchestandarder direkte i rapporten. Hold dig opdateret med gældende krav.",
    rs_feat7_title: "Billedhåndtering", rs_feat7_desc: "Tilføj billeder fra kameraet eller filsystemet. Billedtekster og automatisk nummerering.",
    rs_feat8_title: "Flersproget", rs_feat8_desc: "Skriv rapporter på svensk, engelsk og flere sprog. Skift sprog per rapport.",
    rs_feat9_title: "Send opgaver", rs_feat9_desc: "Send handlingspunkter og opgaver fra referater direkte til deltagere via e-mail. Alle ved, hvad de er ansvarlige for — uden ekstra administration.",
    rs_section_screenshots: "// I praksis", rs_title_screenshots: "Sådan ser det ud",
    rs_screen1: "Rapportoversigt", rs_screen2: "Rapportredigering med sektioner og billeder", rs_screen3: "PDF-eksport — professionelt resultat",
    rs_section_tech: "// Teknologi", rs_title_tech: "Bygget til ydeevne",
    rs_tech_desc: "Webplatform — fungerer på computer, tablet og mobil. Ingen installation krævet. Dine rapporter gemmes sikkert i skyen.",
    rs_cta: "Gå til DragoRS",
  },

  no: {
    nav_projects: "Prosjekter", nav_about: "Om oss", nav_contact: "Kontakt", nav_home: "Hjem",
    hero_tagline: "Konsulent · Programvare · Investering",
    hero_desc_1: "Kreativ programvareutvikling med fokus på",
    hero_desc_2: "kvalitet, enkelhet og brukervennlighet.",
    hero_cta: "se prosjekter", hero_scroll: "scroll",
    section_projects: "// Prosjekter", title_projects: "Program",
    dragors_tag: "Webbasert", dragors_desc: "Rapportgenerator for bygg, prosjektledere og fukt- og skadebransjen. Komplett system med flerspråklig støtte, PDF-eksport og smarte søke- og integrasjonsløsninger.",
    dragors_url: "Les mer",
    pfterminal_tag: "Skrivebord", pfterminal_desc: "Personlig økonomi-app med terminal-estetikk. Manuell inntasting for bevissthet om hver transaksjon. Lokal lagring — du eier dine data. Bygget med Tauri v2.",
    pfterminal_url: "Last ned",
    pfterminal_more: "Les mer",
    section_about: "// Om oss",
    about_p1: "Drago Konsult AB er et svensk programvare- og konsulentselskap basert i Göteborg-området. Drago bygger verktøy og systemer som løser problemer og gjør hverdagen enklere.",
    about_p2: "Med en filosofi i estetikk og enkelhet skaper vi produkter som er raske, pålitelige og elegante — bygget for å vare.",
    about_p3: "Drago er også medeier i selskaper.",
    info_company: "Selskap", info_orgno: "Org.nr", info_address: "Adresse", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Ta kontakt",
    contact_text: "Har du et prosjekt som trenger utvikling? Eller vil du vite mer om verktøyene våre? Ta kontakt:",
    contact_email: "E-post", contact_phone: "Telefon", contact_web: "Web", contact_location: "Sted",
    rs_hero_desc: "Komplett rapportgenerator for bygg, prosjektledere og fukt- og skadebransjen. Lag profesjonelle rapporter med måleprotokoller, bildebehandling, PDF-eksport og flerspråklig støtte — direkte i nettleseren, på mobilen eller nettbrettet.",
    rs_section_features: "// Funksjoner", rs_title_features: "Alt du trenger i felt og på kontoret",
    rs_feat1_title: "Rapportgenerator", rs_feat1_desc: "Lag komplette fukt-, skade- og inspeksjonsrapporter med strukturerte seksjoner, fri tekst og smarte maler.",
    rs_feat2_title: "PDF-eksport", rs_feat2_desc: "Generer profesjonelle PDF-rapporter med ett klikk. Logo, topptekst, sidetall og formatering — klar til sending.",
    rs_feat3_title: "Måleprotokoller", rs_feat3_desc: "Integrer måleverdier fra fuktmålinger direkte i rapporten. Støtte for Celsicom og SuperVision.",
    rs_feat4_title: "Møter og runder", rs_feat4_desc: "Dokumenter byggemøter, prosjekteringsmøter og fuktrunder. Strukturerte protokoller med deltakere, beslutninger og handlingspunkter.",
    rs_feat5_title: "Egne maler", rs_feat5_desc: "Bygg og tilpass dine egne rapportmaler. Spar tid ved å gjenbruke strukturer, tekster og innstillinger mellom prosjekter.",
    rs_feat6_title: "Bransjeregler", rs_feat6_desc: "Søk og referer til relevante bransjestandarder direkte i rapporten. Hold deg oppdatert med gjeldende krav.",
    rs_feat7_title: "Bildebehandling", rs_feat7_desc: "Legg til bilder fra kameraet eller filsystemet. Bildetekster og automatisk nummerering.",
    rs_feat8_title: "Flerspråklig", rs_feat8_desc: "Skriv rapporter på svensk, engelsk og flere språk. Bytt språk per rapport.",
    rs_feat9_title: "Send oppgaver", rs_feat9_desc: "Send handlingspunkter og oppgaver fra referater direkte til deltakere via e-post. Alle vet hva de er ansvarlige for — uten ekstra administrasjon.",
    rs_section_screenshots: "// I praksis", rs_title_screenshots: "Slik ser det ut",
    rs_screen1: "Rapportoversikt", rs_screen2: "Rapportredigering med seksjoner og bilder", rs_screen3: "PDF-eksport — profesjonelt resultat",
    rs_section_tech: "// Teknologi", rs_title_tech: "Bygget for ytelse",
    rs_tech_desc: "Nettbasert plattform — fungerer på datamaskin, nettbrett og mobil. Ingen installasjon nødvendig. Rapportene dine lagres sikkert i skyen.",
    rs_cta: "Gå til DragoRS",
  },

  fi: {
    nav_projects: "Projektit", nav_about: "Meistä", nav_contact: "Yhteystiedot", nav_home: "Etusivu",
    hero_tagline: "Konsultointi · Ohjelmisto · Sijoitus",
    hero_desc_1: "Luovaa ohjelmistokehitystä keskittyen",
    hero_desc_2: "laatuun, yksinkertaisuuteen ja käytettävyyteen.",
    hero_cta: "näytä projektit", hero_scroll: "vieritä",
    section_projects: "// Projektit", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Raporttityökalu rakentamiseen, projektipäälliköille ja kosteus- ja vahinkoalalle. Täydellinen järjestelmä monikielisellä tuella, PDF-viennillä ja älykkäillä ratkaisuilla.",
    dragors_url: "Lue lisää",
    pfterminal_tag: "Työpöytä", pfterminal_desc: "Henkilökohtainen taloussovellus terminaali-estetiikalla. Manuaalinen syöttö jokaisen tapahtuman tiedostamiseksi. Paikallinen tallennus — sinä omistat tietosi. Rakennettu Tauri v2:lla.",
    pfterminal_url: "Lataa",
    pfterminal_more: "Lue lisää",
    section_about: "// Meistä",
    about_p1: "Drago Konsult AB on ruotsalainen ohjelmisto- ja konsulttiyritys Göteborgin alueella. Drago rakentaa työkaluja ja järjestelmiä jotka ratkaisevat ongelmia ja helpottavat arkea.",
    about_p2: "Estetiikan ja yksinkertaisuuden filosofialla luomme tuotteita jotka ovat nopeita, luotettavia ja tyylikkäitä — rakennettuja kestämään.",
    about_p3: "Drago on myös osaomistaja yrityksissä.",
    info_company: "Yritys", info_orgno: "Y-tunnus", info_address: "Osoite", info_contact: "Yhteyshenkilö",
    section_contact: "// Yhteystiedot", title_contact: "Ota yhteyttä",
    contact_text: "Onko sinulla projekti joka tarvitsee kehitystä? Tai haluatko tietää lisää työkaluistamme? Ota yhteyttä:",
    contact_email: "Sähköposti", contact_phone: "Puhelin", contact_web: "Web", contact_location: "Sijainti",
    rs_hero_desc: "Täydellinen raporttityökalu rakentamiseen, projektipäälliköille ja kosteus- ja vahinkoalalle. Luo ammattimaisia raportteja mittausprotokollin, kuvankäsittelyn, PDF-viennin ja monikielisen tuen avulla — suoraan selaimessa, puhelimella tai tabletilla.",
    rs_section_features: "// Ominaisuudet", rs_title_features: "Kaikki mitä tarvitset kentällä ja toimistolla",
    rs_feat1_title: "Raporttityökalu", rs_feat1_desc: "Luo täydelliset kosteus-, vahinko- ja tarkastusraportit rakenteellisilla osioilla, vapaatekstillä ja älykkäillä malleilla.",
    rs_feat2_title: "PDF-vienti", rs_feat2_desc: "Luo ammattimaiset PDF-raportit yhdellä napsautuksella. Logo, ylätunniste, sivunumerot ja muotoilu — valmiina lähetettäväksi.",
    rs_feat3_title: "Mittausprotokollat", rs_feat3_desc: "Integroi kosteuden mittausarvot suoraan raporttiin. Tuki Celsicomille ja SuperVisionille.",
    rs_feat4_title: "Kokoukset ja kierrokset", rs_feat4_desc: "Dokumentoi rakennuskokoukset, suunnittelukokoukset ja kosteuskierrokset. Rakenteelliset pöytäkirjat osallistujineen, päätöksineen ja toimenpiteineen.",
    rs_feat5_title: "Omat mallit", rs_feat5_desc: "Rakenna ja mukauta omia raporttimalleja. Säästä aikaa käyttämällä uudelleen rakenteita, tekstejä ja asetuksia projektien välillä.",
    rs_feat6_title: "Toimialan säännöt", rs_feat6_desc: "Hae ja viittaa alan standardeihin suoraan raportissa. Pysy ajan tasalla voimassa olevista vaatimuksista.",
    rs_feat7_title: "Kuvankäsittely", rs_feat7_desc: "Lisää kuvia kamerasta tai tiedostojärjestelmästä. Kuvatekstit ja automaattinen numerointi.",
    rs_feat8_title: "Monikielinen", rs_feat8_desc: "Kirjoita raportteja ruotsiksi, englanniksi ja muilla kielillä. Vaihda kieltä raporteittain.",
    rs_feat9_title: "Lähetä tehtävät", rs_feat9_desc: "Lähetä toimenpidepisteet ja tehtävät pöytäkirjoista suoraan osallistujille sähköpostilla. Kaikki tietävät, mistä he vastaavat — ilman ylimääräistä hallinnointia.",
    rs_section_screenshots: "// Käytännössä", rs_title_screenshots: "Näin se näyttää",
    rs_screen1: "Raporttien yleiskatsaus", rs_screen2: "Raportin muokkaus osioilla ja kuvilla", rs_screen3: "PDF-vienti — ammattimainen tulos",
    rs_section_tech: "// Teknologia", rs_title_tech: "Rakennettu suorituskykyyn",
    rs_tech_desc: "Verkkopohjainen alusta — toimii tietokoneella, tabletilla ja mobiililla. Ei asennusta. Raporttisi tallennetaan turvallisesti pilveen.",
    rs_cta: "Siirry DragoRS:iin",
  },

  pl: {
    nav_projects: "Projekty", nav_about: "O nas", nav_contact: "Kontakt", nav_home: "Start",
    hero_tagline: "Konsulting · Oprogramowanie · Inwestycje",
    hero_desc_1: "Kreatywne tworzenie oprogramowania skupione na",
    hero_desc_2: "jakości, prostocie i użyteczności.",
    hero_cta: "zobacz projekty", hero_scroll: "przewiń",
    section_projects: "// Projekty", title_projects: "Program",
    dragors_tag: "Web", dragors_desc: "Generator raportów dla budownictwa, kierowników projektów i branży wilgotnościowej i szkodowej. Kompletny system z obsługą wielojęzyczną, eksportem PDF i inteligentnymi rozwiązaniami.",
    dragors_url: "Czytaj więcej",
    pfterminal_tag: "Desktop", pfterminal_desc: "Aplikacja finansów osobistych z estetyką terminala. Ręczne wprowadzanie dla świadomości każdej transakcji. Lokalne przechowywanie — Twoje dane należą do Ciebie. Zbudowane z Tauri v2.",
    pfterminal_url: "Pobierz",
    pfterminal_more: "Czytaj więcej",
    section_about: "// O nas",
    about_p1: "Drago Konsult AB to szwedzka firma programistyczna i konsultingowa z siedzibą w rejonie Göteborga. Drago buduje narzędzia i systemy rozwiązujące problemy i ułatwiające codzienne życie.",
    about_p2: "Z filozofią estetyki i prostoty tworzymy produkty szybkie, niezawodne i eleganckie — zbudowane na lata.",
    about_p3: "Drago jest również współwłaścicielem firm.",
    info_company: "Firma", info_orgno: "NIP", info_address: "Adres", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Skontaktuj się",
    contact_text: "Masz projekt do realizacji? Lub chcesz dowiedzieć się więcej o naszych narzędziach? Skontaktuj się:",
    contact_email: "Email", contact_phone: "Telefon", contact_web: "Web", contact_location: "Lokalizacja",
    rs_hero_desc: "Kompletny generator raportów dla budownictwa, kierowników projektów i branży wilgotnościowej i szkodowej. Twórz profesjonalne raporty z protokołami pomiarowymi, zarządzaniem zdjęciami, eksportem PDF i obsługą wielojęzyczną — bezpośrednio w przeglądarce, na telefonie lub tablecie.",
    rs_section_features: "// Funkcje", rs_title_features: "Wszystko czego potrzebujesz w terenie i w biurze",
    rs_feat1_title: "Generator raportów", rs_feat1_desc: "Twórz kompletne raporty wilgotności, szkód i inspekcji ze strukturalnymi sekcjami, wolnym tekstem i inteligentnymi szablonami.",
    rs_feat2_title: "Eksport PDF", rs_feat2_desc: "Generuj profesjonalne raporty PDF jednym kliknięciem. Logo, nagłówek, numeracja stron i formatowanie — gotowe do wysłania.",
    rs_feat3_title: "Protokoły pomiarowe", rs_feat3_desc: "Integruj wartości pomiarowe wilgotności bezpośrednio w raporcie. Obsługa Celsicom i SuperVision.",
    rs_feat4_title: "Spotkania i obchody", rs_feat4_desc: "Dokumentuj spotkania budowlane, projektowe i obchody wilgotnościowe. Strukturalne protokoły z uczestnikami, decyzjami i działaniami.",
    rs_feat5_title: "Własne szablony", rs_feat5_desc: "Twórz i dostosowuj własne szablony raportów. Oszczędzaj czas, wykorzystując struktury, teksty i ustawienia między projektami.",
    rs_feat6_title: "Przepisy branżowe", rs_feat6_desc: "Wyszukuj i odwołuj się do odpowiednich standardów branżowych bezpośrednio w raporcie. Bądź na bieżąco z obowiązującymi wymaganiami.",
    rs_feat7_title: "Zarządzanie zdjęciami", rs_feat7_desc: "Dodawaj zdjęcia z aparatu lub systemu plików. Podpisy i automatyczna numeracja.",
    rs_feat8_title: "Wielojęzyczny", rs_feat8_desc: "Pisz raporty po szwedzku, angielsku i w innych językach. Zmień język per raport.",
    rs_feat9_title: "Wyślij zadania", rs_feat9_desc: "Wysyłaj punkty działań i zadania z protokołów bezpośrednio do uczestników e-mailem. Każdy wie, za co odpowiada — bez dodatkowej administracji.",
    rs_section_screenshots: "// W praktyce", rs_title_screenshots: "Tak to wygląda",
    rs_screen1: "Przegląd raportów", rs_screen2: "Edycja raportu z sekcjami i zdjęciami", rs_screen3: "Eksport PDF — profesjonalny wynik",
    rs_section_tech: "// Technologia", rs_title_tech: "Zbudowany dla wydajności",
    rs_tech_desc: "Platforma webowa — działa na komputerze, tablecie i telefonie. Bez instalacji. Twoje raporty są bezpiecznie przechowywane w chmurze.",
    rs_cta: "Przejdź do DragoRS",
  },
};

// Language names for selector
const langNames = {
  sv: "SV", en: "EN", de: "DE", fr: "FR", es: "ES",
  it: "IT", pt: "PT", nl: "NL", da: "DA", no: "NO", fi: "FI", pl: "PL"
};

// Cookie helpers
function setCookie(name, value) {
  document.cookie = name + "=" + value + ";path=/;max-age=31536000;SameSite=Lax";
}
function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

// Detect language: URL param > cookie > localStorage > browser > default (sv)
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && translations[urlLang]) {
    // Remove ?lang= from URL bar so it doesn't persist on reload
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, "", cleanUrl);
    return urlLang;
  }

  const cookieLang = getCookie("drago-lang");
  if (cookieLang && translations[cookieLang]) return cookieLang;

  try {
    const saved = localStorage.getItem("drago-lang");
    if (saved && translations[saved]) return saved;
  } catch (e) {}

  return "sv";
}

// Apply translations
function setLanguage(lang) {
  if (!translations[lang]) lang = "sv";
  setCookie("drago-lang", lang);
  try { localStorage.setItem("drago-lang", lang); } catch (e) {}

  const t = translations[lang];
  // Fallback to Swedish for missing keys
  const sv = translations.sv;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = t[key] !== undefined ? t[key] : sv[key];
    if (value !== undefined) {
      // Use textContent for simple elements, but preserve if no child nodes need HTML
      el.textContent = value;
    }
  });

  // Update active state in selector
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;

  // Update all internal links to carry language parameter
  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.includes(".html") && !href.startsWith("http")) {
      const base = href.split("?")[0].split("#")[0];
      const hash = href.includes("#") ? "#" + href.split("#")[1].split("?")[0] : "";
      a.setAttribute("href", base + "?lang=" + lang + hash);
    }
  });
}

// Build language selector dropdown
function buildLangSelector() {
  const container = document.getElementById("langSelector");
  if (!container) return;

  const currentLang = detectLanguage();

  // Toggle button showing current language
  const toggle = document.createElement("button");
  toggle.className = "lang-toggle";
  toggle.textContent = langNames[currentLang] || "SV";
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Dropdown with all languages
  const dropdown = document.createElement("div");
  dropdown.className = "lang-dropdown";

  Object.entries(langNames).forEach(([code, name]) => {
    const btn = document.createElement("button");
    btn.className = "lang-btn";
    btn.dataset.lang = code;
    btn.textContent = name;
    if (code === currentLang) btn.classList.add("active");
    btn.addEventListener("click", () => {
      setLanguage(code);
      toggle.textContent = name;
      dropdown.classList.remove("open");
      dropdown.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    dropdown.appendChild(btn);
  });

  container.appendChild(toggle);
  container.appendChild(dropdown);

  // Close dropdown on outside click
  document.addEventListener("click", () => dropdown.classList.remove("open"));
}

// Init on load
document.addEventListener("DOMContentLoaded", () => {
  buildLangSelector();
  const lang = detectLanguage();
  setLanguage(lang);
});
