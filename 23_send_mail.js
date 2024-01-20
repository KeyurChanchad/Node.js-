const express = require('express');
const sendEmail = require('./sendEmail');
const app = express();

app.get('/', (req, res)=> {
    res.send("Express.js is working")
})
app.get('/sendmail', sendEmail);

app.listen(8000, 'localhost', ()=> {
    console.log('Express app is listening ...');
})
