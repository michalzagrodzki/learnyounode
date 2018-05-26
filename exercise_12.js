var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

var server = http.createServer(function(req, res){

  if (req.method !== 'POST') {
    return res.end('invalid method')
  } else {
    req.pipe(map(function(content){
      return content.toString().toUpperCase()
    }))
    .pipe(res)
  }
})

server.listen(port)
