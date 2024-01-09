const path = require("path");

console.log("Directory path ", path.dirname("H:/NodeJs/pathModule/11_path.js"));

console.log("Extension path ", path.extname("H:/NodeJs/pathModule/11_path.js"));

console.log("File path ", path.basename("H:/NodeJs/pathModule/11_path.js"));

console.log("All info ", path.parse("H:/NodeJs/pathModule/11_path.js"));

console.log("Is absolute path ", path.isAbsolute("H:/NodeJs/pathModule/11_path.js"));

console.log("Join path ", path.join("H:/Nodejs", "pathModule", "11_path.js"));
