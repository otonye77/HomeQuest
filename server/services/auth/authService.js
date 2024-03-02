const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/auth/auth");
const { v4: uuidv4 } = require("uuid");

const registerUser = async (username, email, password) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      id: uuidv4(),
      username,
      email,
      password: encryptedPassword,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return {
      userId: user.id,
      email: user.email,
      username: user.username,
      token: token,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  loginUser,
};
