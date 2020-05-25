const {
  hashPassword,
  comparePasswords,
  signAccessToken,
} = require("../helpers");
const User = require("../models/User");

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = (await User.findOne({ where: { username } })) || {
      password: "",
    };

    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessToken = signAccessToken({ username: user.username });

    res.status(200).json({ username: user.username, accessToken });
  } catch (error) {
    res.status(500).json({ message: "Server error" + error });
  }
}

async function registration(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user) {
      res.status(409).json({ message: "User already exist" });
    }

    const hashedPassword = await hashPassword(password);

    const createdUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User was successfuly created" });
  } catch (error) {
    res.status(500).json({ message: "Server error" + error });
  }
}

module.exports = {
  login,
  registration,
};
