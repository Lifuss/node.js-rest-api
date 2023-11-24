const updateData = require("../services/updateContact");

const updateFavorites = async (req, res) => {
  const update = await updateData(req);
  res.json(update);
};

module.exports = updateFavorites;
