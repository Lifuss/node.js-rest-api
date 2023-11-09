const express = require("express");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");
const { emptyValidator, schemaPost } = require("./services/validator");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();

  res.json({ contacts });
});

router.get("/:contactId", async (req, res, next) => {
  const contactById = await getContactById(req.params.contactId);
  if (contactById === null) {
    // можна і було повертати next() і дійти до мідлвара 404, але раптом на проекті зміниться структура мідлварів
    return res.status(404).json({ message: "Not found" });
  }
  res.json({ contactById });
});

router.post("/", async (req, res, next) => {
  const { value, error } = schemaPost.validate(req.body);
  if (error) {
    res.status(400).json(error.message);
    return;
  }
  const newContact = await addContact(value);
  // перевірка на дубль email в БД
  if (newContact.message) {
    res.status(400).json(newContact);
  } else {
    res.status(201).json(newContact);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  const removeById = await removeContact(req.params.contactId);
  if (removeById === null)
    return res.status(404).json({ message: "Not found" });

  res.json({ message: "contact deleted" });
});

router.put("/:contactId", async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "missing fields to update" });
  }
  // перевіряю якщо ключ прийшов але пустим
  const validate = emptyValidator(req.body);
  if (validate) {
    res.status(400).json({ message: `required field ${validate} is empty` });
  }
  const update = await updateContact(req.params.contactId, req.body);
  if (update === null) return res.status(404).json({ message: "Not found" });

  res.json(update);
});

module.exports = router;
