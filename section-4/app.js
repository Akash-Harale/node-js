const http = require("http");

const server = http.createServer((req, res) => {
  res.write(
    "<html><head><title>My first page</title></head><input type='text' placeholder='name' /><body></body></html>"
  );
});

server.listen(3000);
