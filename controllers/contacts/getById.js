const Contact = require("../../models/contacts");
const { requestError } = require("../../services");

const getById = async (req, res, next) => {
  const contactById = await Contact.findById(req.params.contactId).populate(
    "owner",
    "email subscription"
  );
  if (!contactById) {
    throw requestError(404);
  }
  res.json({ contactById });
};

module.exports = getById;
