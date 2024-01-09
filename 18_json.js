const fs = require('fs');

const obj = {
    name: "keyur",
    age: 22,
    occupation: 'developer'
}

console.log("data obj ", obj);

const json_str = JSON.stringify(obj);
console.log(`json str is ${json_str}`);
fs.writeFile("api.json", json_str, (err)=> {
    if(err) return console.error(err);
    console.log("File created..");
    return undefined;
})

const json_parse = JSON.parse(json_str);
console.log(json_parse.name);

