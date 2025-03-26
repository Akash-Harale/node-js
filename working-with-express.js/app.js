const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form method='post' action='/products'><input type='text' name='product'><button type='submit'>Add Product</button></form>"
  );
});
app.use("/products", (req, res) => {
  console.log(`request body:`, req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1> This is a default page</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
