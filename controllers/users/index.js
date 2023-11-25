const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const { ctrlWrapper } = require("../../services");

const funcs = {
  register,
  login,
  current,
  logout,
  updateSubscription,
};

const ctrl = (controller) => {
  return ctrlWrapper(funcs[controller]);
};

module.exports = ctrl;
