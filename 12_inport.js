// const obj = require("./12_export");

// console.log(obj);
// console.log("Addition ", obj.add(23, 5));
// console.log("Sub ", obj.sub(23, 5));
// console.log("Name is ", obj.name);

const { add, sub, name } = require("./12_export");

console.log("Addition ", add(23, 5));
console.log("Sub ", sub(23, 5));
console.log("Name is ",name);