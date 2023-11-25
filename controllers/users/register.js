const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const { requestError } = require("../../services");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw requestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 5);
  const result = await User.create({ email, password: hashPassword });

  res
    .status(201)
    .json({ user: { email: result.email, subscription: result.subscription } });
};

module.exports = register;
