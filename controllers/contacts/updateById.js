const updateData = require("../../services/updateContact");

const updateByID = async (req, res, next) => {
  const update = await updateData(req);
  res.json(update);
};

module.exports = updateByID;
