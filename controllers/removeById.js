const { removeContact } = require("../models/contacts");

const removeById = async (req, res, next) => {
  const removeById = await removeContact(req.params.contactId);
  if (removeById === null) {
    next();
    return;
  }

  res.json({ message: "contact deleted" });
};
module.exports = removeById;
