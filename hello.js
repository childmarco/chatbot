var http = require('http');
var server = http.createServer();
server.on('request', function(request,res){
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.write('Hello World!!');
	res.end();
});
server.listen(8000);

var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});
