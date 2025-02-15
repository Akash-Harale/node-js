const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req); // this will print the request which is coming to the server.
}); // this creates a server

server.listen(3000); // this line of code will listen to the any request
// which is coming to the port 3000 i.e. ( localhost: 3000 ).
