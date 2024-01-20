const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, './index.html');
console.log('path is ', staticPath);

app.use(express.static);

app.get("", (req, res)=> {
    res.send(staticPath)
});

app.get('/', (req, res)=> {
    res.send("Home route");
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

