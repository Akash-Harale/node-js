const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message</title></head>");
    res.write(
      "<body><form on action='/message' method='POST'><input type='text' name='message' /><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>This is a response from my Node js server</h1></body>");
  res.write("</html>");
  res.end();
};
// # This is the default export
// module.exports = requestHandler;

// # If you have to export more that one then use named export.
// module.exports = {
//   handler: requestHandler,
//   someText: "This text will be exported, My name is Akash Harale",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "this text will be exported";

exports.handler = requestHandler;
exports.someText = "This text will be exported ";
