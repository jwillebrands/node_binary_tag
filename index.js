const fs = require('fs');

const rawdata = fs.readFileSync('data.json');
console.log(JSON.parse(rawdata));