class App
{
    runApplication ()
    {
        console. log("hello world!");

        let appNaam = "JavaScript";
        let versienummer = "1.8";
        let versiedatum = "09/12/2022";
        let autheur = "nuggie";
        let copyright = "JS inc.";
        let distributeur = "Me";
        let darkmode = false;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App() ;
app.runApplication();