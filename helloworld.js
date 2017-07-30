var http = require('http');
var localdt = require('./modules/datetime');

http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type': 'text/heml'});
	res.write("The local datetime is: " + localdt.localDateTimeFormatted());
	
	res.end('Hello World!');

}).listen(8080);