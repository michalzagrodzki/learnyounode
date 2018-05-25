var http = require('http');

var urls = [];
var resultsArray = [];
var count = 0;

for (var i = 2; i < process.argv.length; i++){
  urls.push(process.argv[i]);
}

for (i = 0; i < urls.length; i++) {
  resultsArray[i] = null;
}

for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(content) {
        result += content;
      });
      
      request.on("end", function() {
        resultsArray[i] = result;
        var resultCount = 0;
        for (j = 0; j < resultsArray.length; j++) {
           if (resultsArray[j] != null) resultCount++;
         }
           if (resultCount == resultsArray.length) {
             for (j = 0; j < resultsArray.length; j++) {
               console.log(resultsArray[j]);
             }
           }
         });
      });
  })(i);
}