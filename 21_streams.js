const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    // 1 way
    // fs.readFile('input.txt', 'utf-8', (err, data)=> {
    //     console.log(`You are reading input.txt`);
    //     res.write(data);
    //     res.end();
    // });

    // 2 way
    // const rstream = fs.createReadStream('input.txt', 'utf-8');
    // rstream.on('data', (chunkData)=> {
    //     console.log('Chunk by chunk data ', chunkData);
    //     res.write(chunkData);
    // });

    // rstream.on('end', ()=> {
    //     console.log('Readable streams data is over.');
    //     res.end();
    // });

    // rstream.on('error', (err)=> {
    //     console.log('Error while reading data from input.txt ', err);    
    // });

    // rstream.on('open', (fd)=> {
    //     console.log('listener open ', fd);
    // });

    // rstream.on('close', ()=> {
    //     console.log('readable stream connection is close');  
    // });

    // 3 way
    const rstream = fs.createReadStream('input.txt', 'utf-8');
    rstream.pipe(res);
});

server.listen(8000, ()=> {
    console.log(`Server is listening on 8000 port.`);
    
});