const authService = require("../../services/auth/authService");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password cannot be empty" });
    }
    const user = await authService.registerUser(username, email, password);
    return res.status(201).json({
      message: `${user.username} ${user.id} created successfully`,
    });
  } catch (error) {
    if (error.message === "User already exists") {
      return res.status(400).json({ error: "User already exists" });
    } else {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};

const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password cannot be empty" });
      }
      const token = await authService.loginUser(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      if (error.message === "User not found" || error.message === "Invalid email or password") {
        return res.status(401).json({ error: error.message });
      } else {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  

module.exports = {
  register,
  login
};
