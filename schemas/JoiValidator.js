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

const subscriptionValid = ["starter", "pro", "business"];

const schemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemaRegister = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
  password: Joi.string().min(2).max(15).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionValid)
    .required(),
});

module.exports = {
  schemaPut,
  schemaPost,
  schemaFavorite,
  schemaRegister,
  subscriptionSchema,
};
