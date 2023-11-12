const { addContact } = require("../models/contacts");
const { schemaPost } = require("../schemas/validator");

const add = async (req, res, next) => {
  const { value, error } = schemaPost.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
    return;
  }
  const newContact = await addContact(value);
  // перевірка на дубль email в БД
  if (newContact.message) {
    res.status(400).json(newContact);
  } else {
    res.status(201).json(newContact);
  }
};

module.exports = add;
