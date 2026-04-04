# DragoWeb — Regler för Claude Code

## Arbetssätt
- När kontextfönstret börjar bli fullt: säg till användaren att öppna en ny session, och spara eventuell pågående kontext i MEMORY.md först
- Var koncis — ingen onödig förklaring om användaren inte frågar
- Vägled och driv framåt, fråga inte onödigt
- Vid fel: ge lösning direkt, inte bara felanalys
- Vid buggrapport: fixa direkt utan att be om handledning — peka på loggar/fel, lös dem sedan
- Vid icke-triviala ändringar: pausa och fråga "finns det ett mer elegant sätt?" (skippa för enkla fixar)
- Markera aldrig en uppgift som klar utan att ha verifierat att den fungerar
- Fråga dig själv: "Skulle en senior utvecklare godkänna detta?"

## Grundprinciper
- **Enkelhet först:** Gör varje ändring så enkel som möjligt. Minimal påverkan på koden.
- **Ingen lathet:** Hitta grundorsaker. Inga temporära fixar. Senior utvecklar-standard.
- **Minimal påverkan:** Rör bara det som är nödvändigt. Inga sidoeffekter med nya buggar.

## Självförbättring
- Efter VARJE korrigering från användaren: uppdatera MEMORY.md med mönstret
- Skriv regler som förhindrar samma misstag igen
- Granska lärdomar vid sessionsstart

## Sessionsstart
- Läs ALLTID in vid sessionsstart:
  1. `01 Claude Code Master/CLAUDE.md` och `01 Claude Code Master/Instructions.md`
  2. `DragoWeb/CLAUDE.md` (denna fil)
  3. `DragoWeb/MEMORY.md`

## Efter varje ändring
- Verifiera att sidan renderas korrekt i webbläsaren
- Validera HTML/CSS om möjligt
- 0 errors krävs innan commit

## Kodregler
- Ta ALDRIG bort en funktion utan att först söka i HELA projektet efter alla anrop
- Om något döps om, tas bort eller ändrar beteende — verifiera att ALLA ställen som använder det uppdateras
- Fråga dig själv: "Var mer används detta?" innan du gör en ändring

## Planläge
- Föreslå ALLTID planläge för icke-triviala ändringar (nya features, multi-fil-ändringar, arkitekturbeslut)
- Enkla fixar (typos, enstaka rader, uppenbara buggar) behöver inget planläge

## Git-arbetsflöde
- Committa direkt på main — gör ALLTID en git commit efter lyckad ändring (0 errors)
- Pusha ALDRIG — användaren pushar manuellt via GitHub Desktop

## Språk
- Projektet är på svenska — kommentarer och UI-text på svenska
- Kodkommentarer kan vara på engelska

## Tech stack
- Frontend: Vanilla HTML/CSS/JS (inga ramverk)
- Typsnitt: SF Mono / Menlo (monospace, samma som PFterminal)
- Hosting: Inleed (drago.se)
- Design: Terminal-inspirerat ljust tema, svart drake-logga
