const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// absolute path
const staticPath = path.join(__dirname);
console.log('path is ', staticPath);

//builtin middleware
app.use(express.static(staticPath));

app.get('/', (req, res)=> {
    res.send("Home route");
});

app.get('/about', (req, res)=> {
    res.send("About this website.");
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

