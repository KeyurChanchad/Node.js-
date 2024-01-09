const http = require('http');

const server = http.createServer((req, res)=> {
    res.write("Requted data ")
    res.end()
});

server.listen(8000, "127.0.0.1", ()=> {
    console.log(`server listen at http://127.0.0.1:8000`);
})