var http = require('http')
var url = require('url')

var port = process.argv[2]

var parseTime = function(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

var unixTime = function(time) {
  return {
    unixtime: time.getTime()
  }
}

var server = http.createServer(function (req, res){
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if(/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixTime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  }
})

server.listen(port)
