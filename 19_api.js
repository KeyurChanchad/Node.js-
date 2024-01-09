const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    
    if (req.url === "/") {
        res.write("This is home page.");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("This is about page.");
        res.end();
    }
    else if(req.url === "/contact"){
        res.write("This is contact page.");
        res.end();
    }
    else if(req.url === '/userapi'){
        fs.readFile("api.json", "utf-8", (err, data)=> {
            console.log("data ", data);
            res.writeHead(200, { "content-type": "text/html"})
            res.write(data);
            res.end();
        })
    } else {
        res.end("Page not found..");
    }

});

server.listen(8000, "127.0.0.1", ()=> {
    console.log(`server listen at http://127.0.0.1:8000`);
})