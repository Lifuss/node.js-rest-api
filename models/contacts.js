const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = (await fs.readFile(contactsPath)).toString();
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const findById = data.find((item) => item.id === contactId);
  if (!findById) {
    return null;
  }
  return findById;
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
