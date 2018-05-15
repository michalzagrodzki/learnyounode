var fs = require('fs');

var inputPath = process.argv[2];
var inputContent = fs.readFileSync(inputPath);
var stringContent = inputContent.toString();
var splitContent = stringContent.split(/\n/);
var splitLength = splitContent.length - 1;
console.log(splitLength);