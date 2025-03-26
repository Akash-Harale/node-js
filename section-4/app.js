const http = require("http");

const server = http.createServer((req, res) => {
  res.write(
    "<html><head><title>My first page</title></head><body><form action='message' method='POST'><input type='text' placeholder='name' name='fullName' /><button type='submit'>submit</button></form></body></html>"
  );
});

server.listen(3000);
