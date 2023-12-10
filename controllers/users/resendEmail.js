const User = require("../../models/user");
const { requestError, sendEmail } = require("../../services");

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    requestError(404);
  }
  if (user.verify) {
    requestError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target='_blank' href='${BASE_URL}/api/users/verify/${user.verificationToken}'>CLick to verify your email</a>`,
  };

  await sendEmail(mail);

  res.json({ message: "Email was send successfully" });
};

module.exports = resendEmail;
