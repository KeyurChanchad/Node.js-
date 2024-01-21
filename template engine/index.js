const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 8000;

const templatePath = path.join(__dirname, "./templates");
const partialsPath = path.join(__dirname, "./templates/partials");

// To set view engine
app.set('view engine', 'hbs');

// To change view directory by default it get  view directory
app.set('views', templatePath);

// To set partials 
hbs.registerPartials(partialsPath);

app.get('/', (req, res)=> {
    // render hbs file with data
    res.render("index", { appName: "Express.js" });
});

app.get('/about', (req, res)=> {
    // with no data
    res.render('about');
});

// All routes
app.get('*', (req, res)=> {
    res.send('Page not found');
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

