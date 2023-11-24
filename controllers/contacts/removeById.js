const Contact = require("../../models/contacts");
const { requestError } = require("../../services");

const removeById = async (req, res, next) => {
  const removeById = await Contact.findByIdAndDelete(req.params.contactId);
  if (!removeById) {
    throw requestError(404);
  }

  res.json({ message: "contact deleted" });
};
module.exports = removeById;
