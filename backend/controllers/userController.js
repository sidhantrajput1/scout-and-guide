const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const user = await User.create({
        name,
        email,
        password,
        role,
      });
  
      const token = generateToken(user._id, user.role);
      res.status(201).json({
        message: "User Registered Successfully",
        token,
        user: { id: user._id, role: user.role, name: user.name },
      });
    } catch (error) {
      console.error('Error registering user:', error); // Log the actual error
      res.status(500).json({ message: "Error registering user", error: error.message || error });
    }
  };
  

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.role);
    res
      .status(200)
      .json({
        token,
        user: { id: user._id, role: user.role, name: user.name },
      });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = { register, login };
