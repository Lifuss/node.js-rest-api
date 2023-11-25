const Contact = require("../models/contacts");
const requestError = require("./requestError");

const updateData = async (req) => {
  const update = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    {
      new: true,
    }
  );

  if (!update) throw requestError(404);

  return update;
};

module.exports = updateData;
