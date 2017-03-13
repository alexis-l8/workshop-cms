var http = require('http');
var server = http.createServer(handler);

var message = "Alexis and Jessica are doing a sick job with this Node girls workshop";

function handler (request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write(message);
  response.end();
}

server.listen(3000, function(){
  console.log('Holla at port 3000. Ready to accept requests!');
});
