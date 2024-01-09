const os = require('os');

console.log('Architecture ', os.arch());

console.log("Free memory ", os.freemem() / 1024 / 1024 / 1024);

console.log("Total memory ", os.totalmem() / 1024 / 1024 / 1024);

console.log("Operating system ", os.version());

console.log("Hostname ", os.hostname());

console.log("HomeDir ", os.homedir());

console.log("Platform ", os.platform());

console.log("Temp dir ", os.tmpdir());

console.log("CPU ", os.cpus());

console.log("TYPE ", os.type());

console.log("Username ", os.userInfo());
