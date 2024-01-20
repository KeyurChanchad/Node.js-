const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send("Home route");
});

app.get('/about', (req, res)=> {
    res.send("About page content");
});

app.get('/contact', (req, res)=> {
    res.send("Contact us for better experience");
});

app.get('/temp', (req, res)=> {
    res.send("Temparature route");
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

