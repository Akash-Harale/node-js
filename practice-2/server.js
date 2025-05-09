const express = require("express");
const { authRouter } = require("./routes/auth.routes");
const { connectTODatabase } = require("./db");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, async () => {
  try {
    await connectTODatabase;
    console.log("successfully connected to the database");
    console.log("server is running on port", port);
  } catch (error) {
    console.log("Error while connecting to the databse", error);
  }
});
