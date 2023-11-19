const Contact = require("../models/contacts");
const { schemaPost } = require("../schemas/JoiValidator");
const { requestError } = require("../services");

const add = async (req, res, next) => {
  const { value, error } = schemaPost.validate(req.body);
  if (error) {
    throw requestError(400, error);
  }
  const newContact = await Contact.create(value);

  res.status(201).json(newContact);
};

module.exports = add;
