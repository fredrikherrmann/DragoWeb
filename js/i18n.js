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
    title_projects: "Våra program",
    dragors_tag: "Webbaserad",
    dragors_desc: "Rapportgenerator för Bygg, fuktbranschen och projektledare. Komplett system med flerspråkigt stöd, PDF-export, mätprotokoll och smarta sök och integrationslösningar.",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Personlig ekonomi-app med terminal-estetik. Manuell inmatning för medvetenhet om varje transaktion. Lokal lagring, ingen molnsynk — du äger din data. Byggt med Tauri v2.",
    pfterminal_url: "Ladda ner",
    // Om oss
    section_about: "// Om oss",
    about_p1: "Drago Konsult AB är ett svenskt mjukvarukonsultbolag baserat i Göteborgsområdet. Vi bygger verktyg och system som löser problem och gör vardagen enklare. Vi är även delägare i bolag.",
    about_p2: "Med en filosofi i estetik och enkelhet skapar vi produkter som är snabba, tillförlitliga och eleganta — byggt för att hålla.",
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
    title_projects: "Our software",
    dragors_tag: "Web-based",
    dragors_desc: "Report generator for construction, moisture industry and project managers. Complete system with multilingual support, PDF export, measurement protocols and smart search and integration solutions.",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Personal finance app with terminal aesthetics. Manual entry for awareness of every transaction. Local storage, no cloud sync — you own your data. Built with Tauri v2.",
    pfterminal_url: "Download",
    section_about: "// About",
    about_p1: "Drago Konsult AB is a Swedish software consultancy based in the Gothenburg area. We build tools and systems that solve problems and make everyday life easier. We are also co-owners in companies.",
    about_p2: "With a philosophy in aesthetics and simplicity, we create products that are fast, reliable and elegant — built to last.",
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
  },

  de: {
    nav_projects: "Projekte", nav_about: "Über uns", nav_contact: "Kontakt", nav_home: "Start",
    hero_tagline: "Beratung · Software · Investition",
    hero_desc_1: "Kreative Softwareentwicklung mit Fokus auf",
    hero_desc_2: "Qualität, Einfachheit und Benutzerfreundlichkeit.",
    hero_cta: "Projekte ansehen", hero_scroll: "scrollen",
    section_projects: "// Projekte", title_projects: "Unsere Software",
    dragors_tag: "Webbasiert",
    dragors_desc: "Berichtgenerator für Bau, Feuchtigkeitsbranche und Projektleiter. Komplettes System mit mehrsprachiger Unterstützung, PDF-Export, Messprotokollen und intelligenten Such- und Integrationslösungen.",
    pfterminal_tag: "Desktop",
    pfterminal_desc: "Persönliche Finanz-App mit Terminal-Ästhetik. Manuelle Eingabe für Bewusstsein über jede Transaktion. Lokale Speicherung, keine Cloud-Synchronisation — Ihre Daten gehören Ihnen. Gebaut mit Tauri v2.",
    pfterminal_url: "Herunterladen",
    section_about: "// Über uns",
    about_p1: "Drago Konsult AB ist ein schwedisches Software-Beratungsunternehmen im Raum Göteborg. Wir bauen Werkzeuge und Systeme, die Probleme lösen und den Alltag erleichtern. Wir sind auch Mitinhaber von Unternehmen.",
    about_p2: "Mit einer Philosophie der Ästhetik und Einfachheit schaffen wir Produkte, die schnell, zuverlässig und elegant sind — gebaut um zu halten.",
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
  },

  fr: {
    nav_projects: "Projets", nav_about: "À propos", nav_contact: "Contact", nav_home: "Accueil",
    hero_tagline: "Conseil · Logiciel · Investissement",
    hero_desc_1: "Développement logiciel créatif axé sur",
    hero_desc_2: "la qualité, la simplicité et la convivialité.",
    hero_cta: "voir les projets", hero_scroll: "défiler",
    section_projects: "// Projets", title_projects: "Nos logiciels",
    dragors_tag: "Web", dragors_desc: "Générateur de rapports pour le bâtiment, le secteur de l'humidité et les chefs de projet. Système complet avec support multilingue, export PDF, protocoles de mesure et solutions intelligentes de recherche et d'intégration.",
    pfterminal_tag: "Bureau", pfterminal_desc: "Application de finances personnelles avec esthétique terminal. Saisie manuelle pour une conscience de chaque transaction. Stockage local, pas de synchronisation cloud — vos données vous appartiennent. Construit avec Tauri v2.",
    pfterminal_url: "Télécharger",
    section_about: "// À propos",
    about_p1: "Drago Konsult AB est une société de conseil en logiciels suédoise basée dans la région de Göteborg. Nous construisons des outils et des systèmes qui résolvent les problèmes et simplifient le quotidien. Nous sommes également copropriétaires d'entreprises.",
    about_p2: "Avec une philosophie d'esthétique et de simplicité, nous créons des produits rapides, fiables et élégants — construits pour durer.",
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
  },

  es: {
    nav_projects: "Proyectos", nav_about: "Sobre nosotros", nav_contact: "Contacto", nav_home: "Inicio",
    hero_tagline: "Consultoría · Software · Inversión",
    hero_desc_1: "Desarrollo de software creativo enfocado en",
    hero_desc_2: "calidad, simplicidad y usabilidad.",
    hero_cta: "ver proyectos", hero_scroll: "desplazar",
    section_projects: "// Proyectos", title_projects: "Nuestro software",
    dragors_tag: "Web", dragors_desc: "Generador de informes para construcción, sector de humedad y jefes de proyecto. Sistema completo con soporte multilingüe, exportación PDF, protocolos de medición y soluciones inteligentes de búsqueda e integración.",
    pfterminal_tag: "Escritorio", pfterminal_desc: "App de finanzas personales con estética de terminal. Entrada manual para conciencia de cada transacción. Almacenamiento local, sin sincronización en la nube — tus datos son tuyos. Construido con Tauri v2.",
    pfterminal_url: "Descargar",
    section_about: "// Sobre nosotros",
    about_p1: "Drago Konsult AB es una consultora de software sueca con sede en el área de Gotemburgo. Construimos herramientas y sistemas que resuelven problemas y facilitan la vida cotidiana. También somos copropietarios de empresas.",
    about_p2: "Con una filosofía de estética y simplicidad, creamos productos rápidos, fiables y elegantes — construidos para durar.",
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
  },

  it: {
    nav_projects: "Progetti", nav_about: "Chi siamo", nav_contact: "Contatti", nav_home: "Home",
    hero_tagline: "Consulenza · Software · Investimento",
    hero_desc_1: "Sviluppo software creativo focalizzato su",
    hero_desc_2: "qualità, semplicità e usabilità.",
    hero_cta: "vedi progetti", hero_scroll: "scorri",
    section_projects: "// Progetti", title_projects: "Il nostro software",
    dragors_tag: "Web", dragors_desc: "Generatore di report per edilizia, settore umidità e project manager. Sistema completo con supporto multilingue, esportazione PDF, protocolli di misurazione e soluzioni intelligenti.",
    pfterminal_tag: "Desktop", pfterminal_desc: "App di finanza personale con estetica terminale. Inserimento manuale per consapevolezza di ogni transazione. Archiviazione locale, nessuna sincronizzazione cloud — i tuoi dati sono tuoi. Costruito con Tauri v2.",
    pfterminal_url: "Scarica",
    section_about: "// Chi siamo",
    about_p1: "Drago Konsult AB è una società di consulenza software svedese con sede nell'area di Göteborg. Costruiamo strumenti e sistemi che risolvono problemi e semplificano la vita quotidiana. Siamo anche comproprietari di aziende.",
    about_p2: "Con una filosofia di estetica e semplicità, creiamo prodotti veloci, affidabili ed eleganti — costruiti per durare.",
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
  },

  pt: {
    nav_projects: "Projetos", nav_about: "Sobre nós", nav_contact: "Contato", nav_home: "Início",
    hero_tagline: "Consultoria · Software · Investimento",
    hero_desc_1: "Desenvolvimento de software criativo focado em",
    hero_desc_2: "qualidade, simplicidade e usabilidade.",
    hero_cta: "ver projetos", hero_scroll: "rolar",
    section_projects: "// Projetos", title_projects: "Nosso software",
    dragors_tag: "Web", dragors_desc: "Gerador de relatórios para construção, setor de umidade e gerentes de projeto. Sistema completo com suporte multilíngue, exportação PDF e soluções inteligentes.",
    pfterminal_tag: "Desktop", pfterminal_desc: "App de finanças pessoais com estética de terminal. Entrada manual para consciência de cada transação. Armazenamento local — seus dados são seus. Construído com Tauri v2.",
    pfterminal_url: "Baixar",
    section_about: "// Sobre nós",
    about_p1: "Drago Konsult AB é uma consultoria de software sueca baseada na região de Gotemburgo. Construímos ferramentas e sistemas que resolvem problemas e facilitam o dia a dia. Também somos coproprietários de empresas.",
    about_p2: "Com uma filosofia de estética e simplicidade, criamos produtos rápidos, confiáveis e elegantes — construídos para durar.",
    info_company: "Empresa", info_orgno: "CNPJ", info_address: "Endereço", info_contact: "Contato",
    section_contact: "// Contato", title_contact: "Entre em contato",
    contact_text: "Tem um projeto que precisa de desenvolvimento? Ou quer saber mais sobre nossas ferramentas? Entre em contato:",
    contact_email: "Email", contact_phone: "Telefone", contact_web: "Web", contact_location: "Local",
  },

  nl: {
    nav_projects: "Projecten", nav_about: "Over ons", nav_contact: "Contact", nav_home: "Home",
    hero_tagline: "Advies · Software · Investering",
    hero_desc_1: "Creatieve softwareontwikkeling gericht op",
    hero_desc_2: "kwaliteit, eenvoud en gebruiksvriendelijkheid.",
    hero_cta: "bekijk projecten", hero_scroll: "scroll",
    section_projects: "// Projecten", title_projects: "Onze software",
    dragors_tag: "Web", dragors_desc: "Rapportgenerator voor bouw, vochtbranche en projectleiders. Compleet systeem met meertalige ondersteuning, PDF-export en slimme zoek- en integratieoplossingen.",
    pfterminal_tag: "Desktop", pfterminal_desc: "Persoonlijke financiën-app met terminal-esthetiek. Handmatige invoer voor bewustzijn van elke transactie. Lokale opslag — uw gegevens zijn van u. Gebouwd met Tauri v2.",
    pfterminal_url: "Downloaden",
    section_about: "// Over ons",
    about_p1: "Drago Konsult AB is een Zweeds softwareadviesbureau gevestigd in de regio Göteborg. We bouwen tools en systemen die problemen oplossen en het dagelijks leven vergemakkelijken. We zijn ook mede-eigenaar van bedrijven.",
    about_p2: "Met een filosofie van esthetiek en eenvoud creëren we producten die snel, betrouwbaar en elegant zijn — gebouwd om te blijven.",
    info_company: "Bedrijf", info_orgno: "KvK-nr.", info_address: "Adres", info_contact: "Contact",
    section_contact: "// Contact", title_contact: "Neem contact op",
    contact_text: "Heeft u een project dat ontwikkeld moet worden? Of wilt u meer weten over onze tools? Neem contact op:",
    contact_email: "E-mail", contact_phone: "Telefoon", contact_web: "Web", contact_location: "Locatie",
  },

  da: {
    nav_projects: "Projekter", nav_about: "Om os", nav_contact: "Kontakt", nav_home: "Hjem",
    hero_tagline: "Konsulent · Software · Investering",
    hero_desc_1: "Kreativ softwareudvikling med fokus på",
    hero_desc_2: "kvalitet, enkelhed og brugervenlighed.",
    hero_cta: "se projekter", hero_scroll: "scroll",
    section_projects: "// Projekter", title_projects: "Vores software",
    dragors_tag: "Webbaseret", dragors_desc: "Rapportgenerator til byggeri, fugtbranchen og projektledere. Komplet system med flersproget support, PDF-eksport og smarte søge- og integrationsløsninger.",
    pfterminal_tag: "Desktop", pfterminal_desc: "Personlig økonomi-app med terminal-æstetik. Manuel indtastning for bevidsthed om hver transaktion. Lokal lagring — du ejer dine data. Bygget med Tauri v2.",
    pfterminal_url: "Download",
    section_about: "// Om os",
    about_p1: "Drago Konsult AB er et svensk softwarekonsulentfirma baseret i Göteborg-området. Vi bygger værktøjer og systemer der løser problemer og gør hverdagen nemmere. Vi er også medejere i virksomheder.",
    about_p2: "Med en filosofi i æstetik og enkelhed skaber vi produkter der er hurtige, pålidelige og elegante — bygget til at holde.",
    info_company: "Virksomhed", info_orgno: "CVR-nr.", info_address: "Adresse", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Kontakt os",
    contact_text: "Har du et projekt der skal udvikles? Eller vil du vide mere om vores værktøjer? Kontakt os:",
    contact_email: "E-mail", contact_phone: "Telefon", contact_web: "Web", contact_location: "Sted",
  },

  no: {
    nav_projects: "Prosjekter", nav_about: "Om oss", nav_contact: "Kontakt", nav_home: "Hjem",
    hero_tagline: "Konsulent · Programvare · Investering",
    hero_desc_1: "Kreativ programvareutvikling med fokus på",
    hero_desc_2: "kvalitet, enkelhet og brukervennlighet.",
    hero_cta: "se prosjekter", hero_scroll: "scroll",
    section_projects: "// Prosjekter", title_projects: "Vår programvare",
    dragors_tag: "Webbasert", dragors_desc: "Rapportgenerator for bygg, fuktbransjen og prosjektledere. Komplett system med flerspråklig støtte, PDF-eksport og smarte søke- og integrasjonsløsninger.",
    pfterminal_tag: "Skrivebord", pfterminal_desc: "Personlig økonomi-app med terminal-estetikk. Manuell inntasting for bevissthet om hver transaksjon. Lokal lagring — du eier dine data. Bygget med Tauri v2.",
    pfterminal_url: "Last ned",
    section_about: "// Om oss",
    about_p1: "Drago Konsult AB er et svensk programvarekonsulentselskap basert i Göteborg-området. Vi bygger verktøy og systemer som løser problemer og gjør hverdagen enklere. Vi er også medeiere i selskaper.",
    about_p2: "Med en filosofi i estetikk og enkelhet skaper vi produkter som er raske, pålitelige og elegante — bygget for å vare.",
    info_company: "Selskap", info_orgno: "Org.nr", info_address: "Adresse", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Ta kontakt",
    contact_text: "Har du et prosjekt som trenger utvikling? Eller vil du vite mer om verktøyene våre? Ta kontakt:",
    contact_email: "E-post", contact_phone: "Telefon", contact_web: "Web", contact_location: "Sted",
  },

  fi: {
    nav_projects: "Projektit", nav_about: "Meistä", nav_contact: "Yhteystiedot", nav_home: "Etusivu",
    hero_tagline: "Konsultointi · Ohjelmisto · Sijoitus",
    hero_desc_1: "Luovaa ohjelmistokehitystä keskittyen",
    hero_desc_2: "laatuun, yksinkertaisuuteen ja käytettävyyteen.",
    hero_cta: "näytä projektit", hero_scroll: "vieritä",
    section_projects: "// Projektit", title_projects: "Ohjelmistomme",
    dragors_tag: "Web", dragors_desc: "Raporttityökalu rakentamiseen, kosteusalalle ja projektipäälliköille. Täydellinen järjestelmä monikielisellä tuella, PDF-viennillä ja älykkäillä ratkaisuilla.",
    pfterminal_tag: "Työpöytä", pfterminal_desc: "Henkilökohtainen taloussovellus terminaali-estetiikalla. Manuaalinen syöttö jokaisen tapahtuman tiedostamiseksi. Paikallinen tallennus — sinä omistat tietosi. Rakennettu Tauri v2:lla.",
    pfterminal_url: "Lataa",
    section_about: "// Meistä",
    about_p1: "Drago Konsult AB on ruotsalainen ohjelmistokonsulttiyritys Göteborgin alueella. Rakennamme työkaluja ja järjestelmiä jotka ratkaisevat ongelmia ja helpottavat arkea. Olemme myös osaomistajia yrityksissä.",
    about_p2: "Estetiikan ja yksinkertaisuuden filosofialla luomme tuotteita jotka ovat nopeita, luotettavia ja tyylikkäitä — rakennettuja kestämään.",
    info_company: "Yritys", info_orgno: "Y-tunnus", info_address: "Osoite", info_contact: "Yhteyshenkilö",
    section_contact: "// Yhteystiedot", title_contact: "Ota yhteyttä",
    contact_text: "Onko sinulla projekti joka tarvitsee kehitystä? Tai haluatko tietää lisää työkaluistamme? Ota yhteyttä:",
    contact_email: "Sähköposti", contact_phone: "Puhelin", contact_web: "Web", contact_location: "Sijainti",
  },

  pl: {
    nav_projects: "Projekty", nav_about: "O nas", nav_contact: "Kontakt", nav_home: "Start",
    hero_tagline: "Konsulting · Oprogramowanie · Inwestycje",
    hero_desc_1: "Kreatywne tworzenie oprogramowania skupione na",
    hero_desc_2: "jakości, prostocie i użyteczności.",
    hero_cta: "zobacz projekty", hero_scroll: "przewiń",
    section_projects: "// Projekty", title_projects: "Nasze oprogramowanie",
    dragors_tag: "Web", dragors_desc: "Generator raportów dla budownictwa, branży wilgotnościowej i kierowników projektów. Kompletny system z obsługą wielojęzyczną, eksportem PDF i inteligentnymi rozwiązaniami.",
    pfterminal_tag: "Desktop", pfterminal_desc: "Aplikacja finansów osobistych z estetyką terminala. Ręczne wprowadzanie dla świadomości każdej transakcji. Lokalne przechowywanie — Twoje dane należą do Ciebie. Zbudowane z Tauri v2.",
    pfterminal_url: "Pobierz",
    section_about: "// O nas",
    about_p1: "Drago Konsult AB to szwedzka firma konsultingowa w zakresie oprogramowania z siedzibą w rejonie Göteborga. Budujemy narzędzia i systemy rozwiązujące problemy i ułatwiające codzienne życie. Jesteśmy również współwłaścicielami firm.",
    about_p2: "Z filozofią estetyki i prostoty tworzymy produkty szybkie, niezawodne i eleganckie — zbudowane na lata.",
    info_company: "Firma", info_orgno: "NIP", info_address: "Adres", info_contact: "Kontakt",
    section_contact: "// Kontakt", title_contact: "Skontaktuj się",
    contact_text: "Masz projekt do realizacji? Lub chcesz dowiedzieć się więcej o naszych narzędziach? Skontaktuj się:",
    contact_email: "Email", contact_phone: "Telefon", contact_web: "Web", contact_location: "Lokalizacja",
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
