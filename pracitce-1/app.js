const express = require("express");
const { authRouter } = require("./routes/auth.routes");
const { connectToDatabase } = require("./db");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.listen(3000, () => {
  connectToDatabase;
  console.log("Server is running on port 3000");
});
