# Installera följande 

``shell

   npm install react-icons
   npm install react-router-dom@6
``

<details>
<summary> # Getting Started with Create React App </summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

## Vad har jag lärt mig av uppgiften?

Jag har lärt mig att arbeta i React, fått förståelse för vad SPA är samt lärt mig nya metoder inom Javascript. Jag har lärt mig att strukturera upp mitt arbete mer och skapa en tydlig mappstruktur.

## Några kodexempel

Jag använde mig av en ternary operator för att  växla mellan att användaren ser Logga In / Mina sidor i navbaren beroende på om denne är inloggad eller ej. En ternary operator fungerar på samma sätt som en if-sats, men med fördelen att man kan använda använda den direkt i JSX-koden.

Ternary operatorns fungerar på så sätt att om villkoret för den är sant, så visas den länken med kundkorgen. Är villkoret falskt renderas inte div:en.

```javascript

    {loggedIn ? <Link className='link' to="/signed-in"><li className='list-item'>Mina Sidor</li></Link> :
           <Link className='link' to="/sign-in"><li className='list-item'>Logga in</li></Link> }
```

Jag tyckte att logiken var så enkel och användbar att jag använde ternary operators på flera ställen i min kod. Till exempel använde jag en ternary operator för att antingen visa hur mycket som användaren behöver köpa för till fri frakt vs. att fri frakt är uppnådd beroende på om villkoret att totalsummen är lika med eller större än 259 kronor är sant eller ej.

## Vad gick bra och vad gick dåligt

Det som har varit mest utmanande för mig i det här projektet har varit att få ihop helheten och översätta all funktionalitet från Vanilla Javascript till JSX i React. Jag har fått tänka på ett nytt sätt och i vissa fall lära nytt, t.ex. reduce-metoden för att addera ihop priser och kvantiteter.

Fri frakt-logiken var någonting jag tyckte var extra svårt. Jag provade att göra det med en funktion först, men det blev inte rätt och jag visste inte hur jag skulle anropa funktionen automatiskt. Det landade till slut på en ternary operator. Om den totala summan överstiger 259 kronor eller mer, ska meddelandet "Det har fri frakt!" visas. I annat fall ska 259 minus den totala summan visas.

Något som var väldigt lätt var att få till radens total. Först gjorde jag det mycket svårare än det behövde vara och försökte skicka iväg värden i en funktion, men när jag tänkte efter lite så var det faktiskt bara att multiplicera item.quantity med item.price inom måsvingar.

## Användargränssnittet

Jag har jobbat med färgerna svart och orange. Detta för att jag tycker det ser fräckt och rockigt ut samt ger en skarp kontrast. Vidare har jag arbetat med linear gradient för att skapa ett resultat som påminner om eldsflammor. Jag förknippar rock med färgen svart och eld. Dock har jag använt linear-gradient på ett fåtal ställen för att inte ge ett för stökigt intryck utan göra det till en fräck detalj.

Jag tycker att det mest är tydligt och det är lätt att hitta köp-knapparna och kundkorgen. Det är inte särskilt mycket ondöig info utan fokus på de album man kan köpa. Länkarna i navbaren är tydliga i orange och det är lätt att navigera sig mellan sidorna.

Jag valde att ge de mest relevanta siffrorna en rödorange färg i kundkorgen så att kunden ska ha koll på hur mycket den har handlat för.

## Användaruppelevelsen

Jag tycker att kundkorgen känns lite i vägen. Den lägger sig över albumen och det känns trångt i den. Jag är inte så förtjust i att man måste scrolla i kundkorgen då det blir för många album.

Hade jag fått utforma sidan fritt hade jag hellre byggt en helt egen "sida" till kundkorgen som man klickar sig in på. Då hade allt fått mer plats. Jag hade kunnat göra albumen i kundkorgen mindre för att göra saker och ting mer luftigt, men valde ändå att göra albumen i kundkorgen hyfsat stora då jag vill att texten ska vara lättläst. Enligt mina Personas har jag relativt äldre personer som kunder och då är det viktigt att kontrasterna är skarpa och texten är tillräckligt stor. Det vore dumt att missa en köpare på grund av att de inte ser texten ordentligt.

## Framtida möjligheter

Det har varit roligt och intressant att lära sig React. Jag ser stora möjligheter för mig på arbetsmarknaden med de här kunskaperna. React är ett av de populäraste Javascriptbiblioteken när det gäller att bygga webbsidor. Dock har vi i den här kursen bara skrapat på ytan och det finns mycket mer att lära, därför är det upp till mig att lägga ner mer tid på att lära mig React på ett djupare plan.
