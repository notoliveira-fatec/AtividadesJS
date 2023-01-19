const http = require("http");

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text-plain"});

    response.end("Ola, mundo Node! \n");
});

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000")