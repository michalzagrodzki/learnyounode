var http = require('http');

var url = process.argv[2];
var dataBody = '';

http.get(url, function (response) {
  response.on('data', function (data){
    dataBody += data;
  })
  response.on('end', function(){
    console.log(dataBody.length);
    console.log(dataBody);
  })
})