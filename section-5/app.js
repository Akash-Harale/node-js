const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the first middlware.");
  next();
});

app.use((req, res, next) => {
  console.log("In the next middlware.");
  res.send("<h1>Hello from Express js</h1>");
});
//  .use method is used to add a middleware.
//  next is a function. which pushes a request to the next middlware.

//  when you call a next function at the bottom then it allows you to
// enter into a new middleware.

// If you will not call a next() function at the bottom the request will not get
// passed to the next middleware and the browser will be loading.

// when you want to send a response then don't call a next function instead you
// can send a response. using res.send("<h1>Hello from Express js</h1>")

// .send method is used to send a response.
// after sending a response the request will end there only and if there are any other
// middlwares after that then the request will not reach there.

const server = http.createServer(app);

server.listen(3000);
