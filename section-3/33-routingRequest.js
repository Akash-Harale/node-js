const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My home page</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First page</title></head>");
  res.write("<body><h1>Hello from node.js</h1></body>");
  res.write("</html>");
});

server.listen(3000);
