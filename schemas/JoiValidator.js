const Joi = require("joi");

const schemaPost = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .messages({
      "string.pattern.base":
        "Phone number must be in the format (123) 456-7890",
    })
    .required(),
});

const schemaPut = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "ua"] },
  }),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .messages({
      "string.pattern.base":
        "Phone number must be in the format (123) 456-7890",
    }),
});

const schemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  schemaPut,
  schemaPost,
  schemaFavorite,
};
