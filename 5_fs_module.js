//  Consider modules to be same as javascript librabies. A set of functions you want to include in your application.

// Node.js has a set of built-in modules which can be use without any further installation.

const fs = require('fs');

// To crete and write data in file.
console.log("Before file create");
fs.writeFileSync('input.txt', "This is semple of fs core module with writefilesync method");
console.log("File is created.");

// To append data in file
// fs.appendFileSync("input.txt", " This part is append on input.txt")

// To read data from file
// const buf_data = fs.readFileSync("input.txt")
// console.log("buffer data is ", buf_data);

// Node.js include an additional data type called Buffer 
// Buffer is not available in browser
// Buffer is mainly used to store binary data while reading from a file or receiving packets over the network
// <Buffer 54 68 69 73 20 69 73 20 73 65 6d 70 6c 65 20 6f 66 20 66 73 20 63 6f 72 65 20 6d 6f 64 75 6c 65 20 77 69 74 68 20 77 72 69 74 65 66 69 6c 65 73 79 6e ... 41 more bytes>

// const buf_data = fs.readFileSync("input.txt");
// const data = fs.readFileSync("input.txt", "utf-8");
// const data = buf_data.toString();
// console.log("Data of input file ", data);

// To rename file
// fs.renameSync("read.txt", 'input.txt');

// To make directory
// fs.mkdirSync("./fsAsync");

// To delete file
// fs.unlinkSync("input.txt")