const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/products" method="POST"><input type="text" name="title" ><button type="submit">send</button></input></form>'
  );
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send("<p>item added</p>");
  // res.redirect("/");
});

module.exports = router;
