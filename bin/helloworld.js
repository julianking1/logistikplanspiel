//This is a simple Hello World server.
//Direct your browser to localhost:3002

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello World');
});
server.listen(3002);