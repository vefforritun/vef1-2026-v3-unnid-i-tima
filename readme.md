# Vefforritun 1, 2026: Verkefni 3, Skalanlegt CSS og tæki & tól

Útgáfa 0.1.

## Markmið

- Útfæra skalanlegan (e. responsive) vef.
- Nota CSS custom properties (breytur) fyrir allar stillingar í útliti.
- Nota CSS grid til að stýra útliti.
- Setja upp Node.js og NPM og nota tól þaðan: Parcel, Prettier og Stylelint.

## Verkefni 1–3

Í verkefnum 1, 2 og 3 vinnum við áfram með sama verkefni og byggjum ofan á það:

- [Verkefni 1](https://github.com/vefforritun/vef1-2026-v1) skilgreinir HTML og síður.
- [Verkefni 2](https://github.com/vefforritun/vef1-2026-v2) setur upp útlit með CSS.
- [Verkefni 3](https://github.com/vefforritun/vef1-2026-v3) gerir útlit skalanlegt (e. responsive) með CSS og setur upp tól til að hjálpa við vinnu og skipulag.

## Lýsing

Verkefnið er framhald af [verkefni 2](https://github.com/vefforritun/vef1-2026-v2), nýtir þær síður, gögn, myndir og það útlit sem þar var sett upp og fylgir þeirri verkefnalýsingu áfram.

Þið megið nota ykkar eigin lausn úr verkefni 2 sem grunn. Einnig er leyfilegt að nota [sýnilausn að verkefni 2](https://github.com/vefforritun/vef1-2026-v2-synilausn) sem grunn.

Vinnum áfram með sömu fjórar síður:

- Forsíða ferðaþjónustufyrirtækis.
- Um ferðaþjónustufyrirtækið.
- Yfirlit yfir ferðir.
- Skráning í ferð.

Í verkefni 2 var vefurinn ekki skalanlegur, allt CSS í einni skrá og gildi margtekin, nú lögum við þetta ásamt fleiru!

Allt sem gildir í verkefnum 1 og 2 gildir áfram nema annað sé tekið fram.

## Grunnur

Gefnar eru eftirfarandi skrár sem skulu notaðar:

- HTML skrár úr verkefni 2.
  - Í sýnilausn er búið að breyta skrám til að láta breytingar virka miðað við lýsingu hér.
- CSS skrár sem skal nota, þið þurfið að breyta þeim flestum, sjá nánar í athugasemdum í hverri skrá:
  - `styles.css`, inngangsskráin í verkefnið, raðar upp öðrum skrám.
  - `styles/`, mappa sem inniheldur skrár sem `styles.css` sækir.
- `stylelint.config.mjs`, stillingar fyrir Stylelint, sjá nánar í umfjöllun um Stylelint.
- `.gitignore`, `.stylelintignore`, `.prettierignore`, skrár sem hunsa ákveðnar skrár og möppur í verkefninu.
  - `.gitignore` hunsar skrár sem við viljum ekki að fari í Git.
  - `.stylelintignore` hunsar skrár sem við viljum ekki að Stylelint fari yfir.
  - `.prettierignore` hunsar skrár sem við viljum ekki að Prettier fari yfir og breyti.

## Takmarkanir

Leyfilegt er að nota allt CSS.

## Verkefnið

### CSS breytur

Allar stillingar verkefnisins skulu skilgreindar sem CSS custom properties í `:root` í `styles/config.css` og sóttar með `var()` þar sem þær eru notaðar. Notið það sem gefið er, hugsanlega þurfið þið að bæta við fleirum.

Ekkert gildi fyrir lit, bil, leturstærð, leturgerð, breidd, `border` eða `border-radius` á að vera skrifað beint annars staðar í verkefninu. Gildi sem eru gefin mega vera skrifuð beint inn.

### CSS skipulag og skipting í skrár

Skipta skal CSS upp í að minnsta kosti þær skrár undir `styles/` sem gefnar eru. `styles.css` skal ekki innihalda neitt nema `@import` á þessar skrár.

Athugið að röðin á `@import` skilgreiningum skiptir máli upp á flóðið (e. cascade). Sjá athugasemdir í skrám.

Ef live server í vscode er notaður mun þetta virka og vera uppfært sjálfkrafa en fyrir skil þarf að setja upp `Parcel`, sjá í umfjöllun um tæki og tól.

### Grind uppsetning

Nota skal CSS grid til að setja upp grunn skipulag síðu lóðrétt og lárétt þar sem flexbox var notað í verkefni 2.

Lóðrétt skal setja upp skipulag síðu með nefndum svæðum. Lárétt grind síðunnar skal vera í grunninn tólf dálka og takmarkað við hámarksbreidd skilgreinda með `--max-width`. Sjá nánar í `styles/layout.css`.

Sérstaklega skal setja upp dálka fyrir:

- Kort á forsíðu
- Efni í fæti

Sjá nánar í `styles/cards.css` og `styles/footer.css`.

### Skalanleiki

Síðan skal vera skalanleg frá `400px` og upp að hámarksbreidd skilgreind með `--max-width`. Eftir hámarksbreidd skal efnið vera miðjað.

Vinna skal efnið „mobile first“ þannig að í grunninn eru stílar fyrir minnstu skjái, síðan eru notuð media queries til að bæta við stílum fyrir stærri skjái.

Í sýnilausn eru brotpunktar:

- Frá og með `500px`, allt undir þessu er „mobile“
- Frá og með `700px`, hér breytast kort á forsíðu og í fæti

Þegar farið er úr „mobile“ skal leturstærð stækka í haus og valmynd úr, sjá athugasemdir í `styles/config.css`.

Þegar farið er yfir `700px` skulu (sjá nánar á skjámyndum):

- kort á forsíðu skiptast upp,
- dálkar í fæti skiptast upp,
- form dálkar skiptast upp.

Fyrirmyndir að útliti eru í `fyrirmynd/` möppu. Heiti hvers skjás er með breidd sem skjáskotið er tekið í, t.d. `forsida-500px.png` er forsíða tekin í `500px` breiðum vafra.

Ekki skal vera neitt lárétt skrun (horizontal scroll) á síðunni sjálfri í neinni skjástærð.

### Tæki og tól

Til þess að geta notað þessi tól þarf að [setja upp Node.js](https://nodejs.org/en/download). Eftir að þið hafið keyrt uppsetningarforritið getið þið opnað Command prompt/terminal/skel og keyrt:

```bash
> node -v
v24.21.0 # eða sú útgáfa sem þið sóttuð
> npm -v
11.19.0 # eða álíka
```

Ef þið fáið þetta ekki upp, prófið að endurræsa. Annars fáið aðstoð í dæmatímum, í fyrirlestri, tölvupósti eða á Slack.

Fyrst þarf að búa til `package.json` með því að keyra `npm init` í verkefnamöppu, við gerum þetta saman í fyrirlestri

#### Parcel

Setja skal upp [Parcel](https://parceljs.org/). Parcel fylgir `<link>`, `<img>` og `@import` út frá HTML skránum.

Setja þarf upp `dev` og `build` script í `package.json`, [sjá skjölun](https://parceljs.org/getting-started/webapp/#package-scripts). Það gæti verið ráð að setja `dev` script með `--no-cache` og `--lazy` valkostum til að forðast vandamál með cache:

```text
"dev": "parcel index.html 'sidur/*.html' --lazy --no-cache",
"build": "parcel build index.html 'sidur/*.html'"
```

#### Prettier

Setja skal upp [Prettier](https://prettier.io/) og `format` script sem keyrir prettier á bæði HTML og CSS:

```text
"format": "prettier '**/*.{css,html}' --write"
```

Gefið er `.prettierignore` skjal sem hunsar `dist/` og `package-lock.json`.

#### Stylelint

Setja skal upp [Stylelint](https://stylelint.io/) með `npm create stylelint@latest` og síðan bæta við [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) og [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order).

`stylelint.config.mjs` skrá er gefin og inniheldur stillingar þannig að bæði config standard og recess order sé virkt. Einnig er dæmi um hvernig regla er yfirskrifuð í skránni.

```js
/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    // Litir eins og í verkefnalýsingu, t.d. #996644 en ekki #964.
    'color-hex-length': null,
  },
};
```

Þegar skipunin `npm run lint` er keyrð skal keyra Stylelint með þessum reglum og **engar villur** eiga að koma fram.

Athugið að hægt er að keyra `stylelint` með `--fix` til að laga margar villur sjálfkrafa, t.d. röðun á eigindum, þetta væri hægt að setja upp sem `npm script`.

Gefið er `.stylelintrc` skjal sem inniheldur hunsar `dist/` möppu.

## GitHub og Netlify uppsetning

Setja skal verkefnið upp á GitHub og skila með slóð á repo.

Tengja skal GitHub við Netlify þannig að hver breyting í GitHub keyri inn nýja útgáfu á Netlify, farið verður yfir þetta í tíma.

Gefið er `.gitignore` skjal sem verður að nota, við viljum ekki að þær skrár og möppur sem eru tilgreindar þar fari inn á GitHub.

## Mat

- 10% — CSS breytur
- 10% — CSS skipulag og skipting í skrár
- 20% — Grind uppsetning
- 20% — Skalanleiki
- 15% — Tæki og tól
- 10% — Stylelint án villna
- 15% — GitHub og Netlify uppsetning

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 21. september 2026.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 1. október 2026.

Skilaboð skulu innihalda bæði:

- Slóð á GitHub repo fyrir verkefnið. Dæmatímakennurum skal hafa verið boðið í repo, notendanöfn þeirra eru:
  - `AsdisVal`
  - `kristinfrida`
  - `osk`
- Slóð á verkefni keyrandi á Netlify, sett sem athugasemd við skil á Canvas.

Athugið að það er **ekki nóg** að eingöngu setja athugasemd, skila þarf verkefni sérstaklega. Verkefnum sem ekki er skilað fá ekki einkunn.

## Aðstoð

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ekki er heimilt að nota stór mállíkön til að vinna verkefni í námskeiðinu, [sjá nánar um notkun](https://github.com/vefforritun/vef1-2026/blob/main/mallikon.md).

## Verkefni og einkunn

Sett verða fyrir fimm minni verkefni sem gilda 3% hvert, samtals 15% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 5%, samtals 10% af lokaeinkunn.

---

Nýjustu útgáfu af verkefni má [nálgast á GitHub](https://github.com/vefforritun/vef1-2026-v3).

## Útgáfusaga

| Útgáfa | Lýsing        |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
