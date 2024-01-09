const http = require('http');

const server = http.createServer((req, res)=> {
    
    if (req.url === "/") {
        res.write("This is home page.");
    }
    else if(req.url === "/about"){
        res.write("This is about page.");
    }
    else if(req.url === "/contact"){
        res.write("This is contact page.");
    } else {
        res.write("Page not found..")
    }
    res.end();


});

server.listen(8000, "127.0.0.1", ()=> {
    console.log(`server listen at http://127.0.0.1:8000`);
})