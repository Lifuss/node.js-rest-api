const { schemaPut } = require("../schemas/JoiValidator");
const Contact = require("../models/contacts");
const { requestError } = require("../services");

const updateByID = async (req, res, next) => {
  const { value, error } = schemaPut.validate(req.body);
  if (error) {
    throw requestError(400, error.message);
  }

  const update = await Contact.findByIdAndUpdate(req.params.contactId, value, {
    new: true,
  });
  if (!update) {
    throw requestError(404);
  }
  res.json(update);
};

module.exports = updateByID;
