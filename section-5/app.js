const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //this code is written
//  first becase we need the request's body before it goes to any routes.

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/products" method="POST"><input type="text" name="title" ><button type="submit">send</button></input></form>'
  );
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}); //here we have used post beacuse we want to execute this middlware 
// only when the method is post


app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express .js</h1>");
});

app.listen(3000);
