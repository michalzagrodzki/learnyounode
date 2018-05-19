var myModule = require('./exercise_6_module.js')
var inputDirectoryPath = process.argv[2];
var inputExtension = process.argv[3];

var callback = function (error, response) {
  if (error) throw error;
  response.forEach(function (item) {
    console.log(item);
  }) 
}

myModule(inputDirectoryPath, inputExtension, callback);