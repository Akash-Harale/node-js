const fs = require("fs");

const requesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> My assignment </title> </head>");
    res.write(
      "<body> <form action='/user' method='POST'><input type='text' name='username'> <button type='submit'>submit</button> </form> </body>"
    );
    res.write("</html>");
  }

  if (url === "/user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      fs.writeFile("username.txt", username, (err) => {
        res.statusCode = 302; // this code is important for redirect the routes. i.e. this code is a redirection code.
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requesthandler;
