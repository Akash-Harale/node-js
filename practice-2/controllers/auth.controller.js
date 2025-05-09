const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretkey = process.env.SECRET_KEY || "";

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.send({ message: "User not found" });
    }

    const isPasswrodCorrect = await bcrypt.compare(password, user.password);

    if (isPasswrodCorrect) {
      res.send({
        message: "LoggedIn successfully",
        userData: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token: jwt.sign({ userId: user._id }, secretkey),
      });
    } else {
      res.status(400).send({ message: "password is wrong" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal server error", error });
  }
};

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  login,
  register,
};
