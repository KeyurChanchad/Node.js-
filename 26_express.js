const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send("Home route");
});

app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}`);
})

