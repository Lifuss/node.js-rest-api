const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SG_API_KEY } = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
  const msg = {
    ...data,
    from: "arsen.hryh@gmail.com",
  };
  await sgMail.send(msg);
  return true;
};

module.exports = sendEmail;
