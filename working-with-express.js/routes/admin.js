const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form method='post' action='/products'><input type='text' name='product'><button type='submit'>Add Product</button></form>"
  );
});
router.post("/products", (req, res) => {
  console.log(`request body:`, req.body);
  res.send("<h1>Product added successfully</h1>");
  res.redirect("/");
});

module.exports = router;
