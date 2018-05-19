var http = require('http');

var url = process.argv[2];
var callback = function (response) {
  response.setEncoding('utf8');
  response.on('data', function(data){
    console.log(data)
  });
  response.on('error', function(error){
    console.log(error)
  });
}

http.get(url, callback)