const http = require("http");
const { handler } = require("./routes");
console.log(handler);
const server = http.createServer(handler); // this creates a server

server.listen(3001); // this line of code will listen to the any request
// which is coming to the port 3000 i.e. ( localhost: 3000 ).
