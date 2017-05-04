var http = require('http');
var server = http.createServer();
server.on('request', function(request,res){
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.write('Hello World!!');
	res.end();
});
server.listen(8000);
