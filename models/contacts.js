const { model } = require("mongoose");
const contactSchema = require("../schemas/mongooseSchema");

const Contact = model("contact", contactSchema);

module.exports = Contact;
