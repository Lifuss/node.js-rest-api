const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const removeById = require("./removeById");
const updateByID = require("./updateById");
const updateFavorites = require("./updateFavorites");
const { ctrlWrapper } = require("../../services");

const funcs = {
  getAll,
  getById,
  add,
  removeById,
  updateByID,
  updateFavorites,
};

const ctrl = (controller) => {
  return ctrlWrapper(funcs[controller]);
};

module.exports = ctrl;
