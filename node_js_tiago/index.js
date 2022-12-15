var http = require ('http');

http.createServer(function(req, res){
    res.end("Ola Bem Vindo ao Lado de Ca")
}).listen(8080);