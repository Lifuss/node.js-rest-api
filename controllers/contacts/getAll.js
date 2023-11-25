const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const favorite = req.query.favorite;
  const filter = {};

  if (favorite !== undefined) {
    filter.favorite = favorite;
  }
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const options = {
    page,
    limit,
    sort: { author: 1 },
  };

  const query = Contact.find(filter).populate("owner", "email subscription");

  const result = await Contact.paginate(query, options);
  res.json(result);
};

module.exports = getAll;
