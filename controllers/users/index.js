const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const avatar = require("./avatar");
const verify = require("./verify");
const resendEmail = require("./resendEmail");
const { ctrlWrapper } = require("../../services");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(avatar),
  verify: ctrlWrapper(verify),
  resendEmail: ctrlWrapper(resendEmail),
};
