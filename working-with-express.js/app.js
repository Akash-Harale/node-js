const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In this first middleware");
  next(); // Allows the request to proceed to the next middleware function
});

app.use((req, res, next) => {
  console.log("In this second middleware");
  res.send("<h1>Hello from Express!</h1>"); // If you don't call next(), the request will be stopped here and you have to provide a response.
});

const server = http.createServer(app);
server.listen(3000);
