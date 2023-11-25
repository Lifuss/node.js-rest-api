const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const contacts = await Contact.find({ owner }, "name owner").populate(
    "owner",
    "email subscription -_id"
  );
  res.json({ contacts });
};

module.exports = getAll;
