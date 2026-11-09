# Devlog — Berke Irak

Een zelfstandige website voor GitHub Pages, gemaakt op basis van de bestaande HvA-devlog en zes ontvangen feedbackformulieren. Alle vijf oorspronkelijke inhoudsblokken en vijf afbeeldingen zijn overgenomen. Samenvattingen van de eigen bijdrage en een feedbackoverzicht zijn toegevoegd. De reflectie is ingedeeld en aangevuld met voornemens, niet met nieuwe claims over afgerond werk.

## Bekijken
Open `index.html` in je browser. Installatie is niet nodig.

## Publiceren op GitHub Pages
1. Maak op GitHub een repository, bijvoorbeeld `devlog`.
2. Upload de uitgepakte inhoud van deze map: `index.html`, `styles.css`, `script.js` en de volledige map `assets`. De bestanden horen direct in de hoofdmap van de repository.
3. Open **Settings → Pages**.
4. Kies bij **Source**: **Deploy from a branch**.
5. Kies **main** en **/(root)** en klik **Save**.
6. GitHub toont op deze instellingenpagina de website-URL zodra de publicatie klaar is.

Documentatie: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Tekst aanpassen of een sprint toevoegen
Bewerk `index.html`. Elk onderwerp heeft een eigen `<section>` met een herkenbaar id, bijvoorbeeld `society` of `reflectie`. Voeg nieuwe inhoud toe met `<h3>` en `<p>`. Afbeeldingen plaats je in `assets` en koppel je met een relatief pad, bijvoorbeeld `assets/naam.jpg`. Voeg bij een nieuw onderwerp ook een link toe in `<nav>`.

De bestaande teksten noemen zowel groepswerk als eigen werk. Verander “wij” alleen in “ik” als je het werk daadwerkelijk zelf hebt gedaan.

## Nog aanvullen
- Hardwareoverzicht en onderbouwing van de keuzes.
- Herziene verslag over paternalisme.
- Originele enquête en QR-code.
- Eventueel specifiekere eigen ontwerpkeuzes bij Society 5.0; de aangeleverde devlog beschrijft die nog niet afzonderlijk.

Deze website staat in de repository IrakBerke/DevLog. Publicatie via GitHub Pages wordt ingesteld onder Settings → Pages.
