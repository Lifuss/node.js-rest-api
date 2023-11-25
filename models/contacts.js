const { model } = require("mongoose");
const { contactSchema } = require("../schemas/mongooseSchema");
const mongoosePaginate = require("mongoose-paginate-v2");

contactSchema.plugin(mongoosePaginate);
const Contact = model("contact", contactSchema);

module.exports = Contact;
