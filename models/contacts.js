const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContactsFile = async (newContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
};

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

const removeContact = async (contactId) => {
  const data = await listContacts();
  const indexToDelete = data.findIndex((item) => item.id === contactId);

  if (indexToDelete === -1) return null;

  data.splice(indexToDelete, 1);
  await updateContactsFile(data);
};

const addContact = async (body) => {
  const data = await listContacts();
  const emailValidate = data.find((item) => item.email === body.email);
  if (emailValidate) {
    return { message: "user with this email already exists" };
  }

  const newContact = { id: nanoid.nanoid(), ...body };
  data.push(newContact);
  await updateContactsFile(data);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const indexToUpdate = data.findIndex((item) => item.id === contactId);
  if (indexToUpdate === -1) {
    return null;
  }
  const updatedContact = { ...data[indexToUpdate], ...body };
  data.splice(indexToUpdate, 1, updatedContact);
  await updateContactsFile(data);
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
