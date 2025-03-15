const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message</title></head>");
    res.write(
      "<body><form on action='/message' method='POST' name='message'><input type='text' /><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url == "/message" && method == "POST") {
    fs.writeFileSync("message.text", "Dummy text");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>This is a response from my Node js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
