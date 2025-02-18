const express = require("express");

const router = express.Router();

// # get request --> /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/products" method="POST"><input type="text" name="title" ><button type="submit">send</button></input></form>'
  );
});

// # post request --> /admin/add-product
router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send("<p>item added</p>");
  // res.redirect("/");
});

module.exports = router;
