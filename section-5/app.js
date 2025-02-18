const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the first middlware.");
  next();
});

app.use((req, res, next) => {
  console.log("In the next middlware.");
  next();
});
//  .use method is used to add a middleware.
//  next is a function. which pushes a request to the next middlware.

//  when you call a next function at the bottom then it allows you to
// enter into a new middleware.

// If you will not call a next() function at the bottom the request will not get
// passed to the next middleware and the browser will be loading.

const server = http.createServer(app);

server.listen(3000);
