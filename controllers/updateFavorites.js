const Contact = require("../models/contacts");
const { schemaFavorite } = require("../schemas/JoiValidator");
const { requestError } = require("../services");

const updateFavorites = async (req, res) => {
  const { value, error } = schemaFavorite.validate(req.body);
  console.log(value);

  if (error) throw requestError(400, error.message);

  const update = await Contact.findByIdAndUpdate(req.params.contactId, value, {
    new: true,
  });
  if (!update) throw requestError(404);

  res.json(update);
};

module.exports = updateFavorites;
