const { updateContact } = require("../models/contacts");
const { schemaPut } = require("../schemas/validator");

const updateByID = async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "missing fields to update" });
    return;
  }
  const { value, error } = schemaPut.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
    return;
  }
  const update = await updateContact(req.params.contactId, value);
  if (update === null) {
    next();
    return;
  }
  res.json(update);
};

module.exports = updateByID;
