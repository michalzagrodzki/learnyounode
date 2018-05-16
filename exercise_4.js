var fs = require('fs');

var inputPath = process.argv[2];
var sum = 0;
function retrieveContent () {
  fs.readFile(inputPath, function callback (error, response){
    if (error) {
      console.log('there is an error: ' + error);
    } else {
      var stringContent = response.toString();
      var splitContent = stringContent.split(/\n/);
      var newlinesLength = splitContent.length - 1;
      sum = newlinesLength;
      console.log(sum)
    }
  });
}
retrieveContent();