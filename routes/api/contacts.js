const express = require("express");
const { listContacts, getContactById } = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();

  res.json({ contacts });
});

router.get("/:contactId", async (req, res, next) => {
  const contactById = await getContactById(req.params.contactId);
  res.json({ contactById });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
