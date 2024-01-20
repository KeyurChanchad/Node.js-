// To send HTML and JSON data

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send("<h1> This is Home page of our website. </h1>");
});

app.get('/about', (req, res)=> {
    res.send("About page content");
});

app.get('/contact', (req, res)=> {
    const data = { 
        id: 34234324,
        name: 'Keyur'
    }
    res.json(data);
});

app.get('/temp', (req, res)=> {
    const data = [{ 
        id: 34234324,
        name: 'Keyur'
    }]
    res.send(data);
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

