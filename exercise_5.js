var fs = require('fs');

var inputDirectoryPath = process.argv[2];
var inputExtension = '.' + process.argv[3];
var inputRegExp = new RegExp(inputExtension, 'g');

fs.readdir(inputDirectoryPath, function callback(error, response){
  if (error) {
    console.log(error)
  } else {
    for (var i = 0; i < response.length; i++) {
      if (response[i].match(inputRegExp)) {
        console.log(response[i]);
      }
    }
  }
});
