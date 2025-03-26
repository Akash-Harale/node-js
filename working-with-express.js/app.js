const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In this first middleware");
  next(); // Allows the request to proceed to the next middleware function
});

app.use((req, res, next) => {
  console.log("In this second middleware");
  res.send("<h1>Hello from Express!</h1>"); 
});


// const server = http.createServer(app);
// server.listen(3000);

//  OR

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 