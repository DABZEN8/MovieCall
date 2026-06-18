# MovieCall
MovieCall är en vue-baserad webbapplikation för filmintresserade användare. Spara och slumpa fram filmer att se under veckan.

Användare av MovieCall kan:
-	Söka filmer
-	Spara filmer i en personlig lista
-	Ta bort filmer från listan
-	Spara sin lista med hjälp av localStorage
-	Skapa ett veckoschema med 7 slumpade filmer som rekommenderas från måndag till söndag.
-	Spara denna listan av veckans filmer
-	Använda MovieCall på olika skärmstorlekar med hjälp av den responsiva designen

## Tekniker
Projektet är byggt med följande:
-	Vue 
-	Vite
-	Pinia
-	TMDB API
-	LocalStorage

## Kom igång med MovieCall
Installation:
npm install

Kör igång servern:
npm run dev

Öppna den lokala länken som visas i terminalen som vanligtvist ser ut som följande:
http://localhost:5173/

## API 
Projektet använder TMDB (The Movie Database). API’t används i MovieCall för att:
-	Söka efter filmer
-	Hämta filmaffischer
-	Visa filminformation som titel och utgivningsår

## API-nyckel
Projektet MovieCall använder API från TMDB

För att köra projektet, måste en `.env`-fil skapas i projektets rotmapp med följande innehåll:

```env
VITE_TMDB_API_KEY=din_api_nyckel_här
```

## Val av ramverk
Som grupp valde vi Vue 3 för detta projekt. Vue jämfördes med Angular och React innan beslutet togs.

## Vue
-	Enkel att komma igång med
-	Komponentstrukturen är tydlig
-	Passade för gruppens erfarenhetsnivå

## React
-	Ett större ekosystem 
-	Krävde mer kod för vissa lösningar 
-	Vanligt på arbetsmarknaden

## Angular
-	Ett kraftfullt ramverk
-	Stort utbud av inbyggda funktioner
-	Högre komplexitet för ett mindre projekt som MovieCall

Som grupp fick vi prioritera erfarenhetsnivån och projektets storlek och ansåg att Vue passade vårt case.

## Referenser
https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/
https://v2.vuejs.org/v2/guide/comparison.html?redirect=true

Vue.js: 
https://vuejs.org/guide/introduction
https://vueschool.io/articles/vuejs-tutorials/why-vue-js-is-a-great-starting-point-for-new-coders/

React:
https://react.dev/learn
https://www.techmagic.co/blog/why-we-use-react-js-in-the-development

Angular:
https://angular.dev/overview
https://strapi.io/blog/react-vs-angular-framework-comparison

TMDB:
https://developer.themoviedb.org/docs/getting-started
