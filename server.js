var http = require('http');
var server = http.createServer(handler);
var fs = require('fs');
var message = "Alexis and Jessica are doing a sick job with this Node girls workshop";

function handler (request, response){
  var method = request.method;
  console.log(method);

  var endpoint = request.url;
  console.log(endpoint);

  if (endpoint === '/') {
    response.writeHead(200, {"Content-Type" : "text/html"});

    fs.readFile(__dirname + "/public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }





  // if (endpoint === '/node') {
  //   response.writeHead(200, {"Content-Type" : "text/html"});
  //   response.write('this the node endpoint');
  //   response.end();
  // }
  // else if (endpoint === '/girls') {
  //   response.writeHead(200, {"Content-Type" : "text/html"});
  //   response.write('this the girls endpoint');
  //   response.end();
  // }
  // response.writeHead(200, {"Content-Type" : "text/html"});
  // response.write(message);
  // response.end();
}

server.listen(3000, function(){
  console.log('Holla at port 3000. Ready to accept requests!');
});
