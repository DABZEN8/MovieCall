# MovieCall
MovieCall är en vue-baserad webbapplikation för filmintresserade användare. Spara och slumpa fram filmer att se under veckan.

Användare av MovieCall kan:
-	Söka filmer
-	Spara filmer i en personlig lista
-	Ta bort filmer från listan
-	Spara sin lista med hjälp av localStorage
-	Skapa ett veckoschema med 7 slumpade filmer som rekommenderas från måndag till söndag.
-	Spara denna listan av veckans filmer
-	Använda MovieCall på olika skärmstorlekar med hjälp av den responsiva deisgnen

## Tekniker
Projektet är byggt med följande:
-	Vue 
-	Vite
-	Pinia
-	TMDB API
-	LocalStorage

## Kom igång med MovieCall
Installation:
sh
npm install

Kör igång servern:
npm run dev

Öppna den lokala länken som visas i terminalen som vanligtvist ser ut som följande:
http://localhost:5173/

## API 
Projektet använder TMDB (The Movie Database). API’t används i MovieCall för att:
-	Söka efter filmer
-	Hämta filmffischer
-	Visa filminformation som titel och utgivningsår

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
-	Stort utbud av unbyggda funktioner
-	Högre komplexitet för ett mindre projekt som MovieCall

Som grupp fick vi prioritera erfarenhetsnivån och projektets storlek och ansåg att Vue passade vårt case.

## Referenser
Vue.js: 
https://vuejs.org/guide/introduction

React:
https://react.dev/learn

Angular:
https://angular.dev/overview

TMDB:
https://developer.themoviedb.org/docs/getting-started
