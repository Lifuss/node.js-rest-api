const Joi = require("joi");

const validator = (body) => {
  const arrOfKeys = Object.keys(body);
  const trueKeys = ["phone", "email", "name"];
  const missingKeys = [];

  // перевірка на неіснуючий ключ
  if (arrOfKeys.length !== 3) {
    for (const key of trueKeys) {
      if (!arrOfKeys.includes(key)) {
        missingKeys.push(key);
      }
      continue;
    }
    return missingKeys;
  }

  // перевірка на пустий ключ
  for (const key in body) {
    if (body[key].trim() === "") {
      return key;
    }
  }
};

const emptyValidator = (body) => {
  for (const key in body) {
    if (body[key].trim() === "") {
      return key;
    }
  }
};

const schemaPost = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(6)
    .max(12)
    .required(),
});
const schemaPut = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "ua"] },
  }),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(6)
    .max(12),
});

module.exports = {
  schemaPut,
  schemaPost,
};
