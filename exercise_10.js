var net = require('net');
var serverPort = process.argv[2];

var zeroFill = function (i) {
  return (i < 10 ? '0' : '') + i
};

var dateToday = function () {
  var date = new Date()
  return date.getFullYear() + '-' + zeroFill(date.getMonth() + 1) + '-' + zeroFill(date.getDate()) + ' ' + zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes())
};

var server = net.createServer(function (socket) {

  socket.end(dateToday() + '\n')
});

server.listen(serverPort);
