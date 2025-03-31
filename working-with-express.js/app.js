const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminroutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminroutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .send(
      "<h1>Page not found</h1> Sorry, we couldn't find that page. Please try again. "
    );
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
