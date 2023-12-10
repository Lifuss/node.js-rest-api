const User = require("../../models/user");
const { requestError } = require("../../services");

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    requestError(404, "User not found");
  }

  await User.findByIdAndUpdate(user.id, {
    verify: true,
    verificationToken: null,
  });

  res.json({ message: "Verification successful" });
};

module.exports = verify;
