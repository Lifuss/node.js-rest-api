const { getContactById } = require("../models/contacts");
const { requestError } = require("../services");

const getById = async (req, res, next) => {
  const contactById = await getContactById(req.params.contactId);
  if (contactById === null) {
    throw requestError(404);
  }
  res.json({ contactById });
};

module.exports = getById;
