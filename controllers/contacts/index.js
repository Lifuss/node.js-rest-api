const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const removeById = require("./removeById");
const updateByID = require("./updateById");
const updateFavorites = require("./updateFavorites");
const { ctrlWrapper } = require("../../services");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  removeById: ctrlWrapper(removeById),
  updateByID: ctrlWrapper(updateByID),
  updateFavorites: ctrlWrapper(updateFavorites),
};
