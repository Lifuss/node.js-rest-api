const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const {
  schemaRegister,
  subscriptionSchema,
  verifySchema,
} = require("../../schemas/JoiValidator");
const authentication = require("../../middlewares/authentication");
const {
  register,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verify,
  resendEmail,
} = require("../../controllers/users");
const upload = require("../../middlewares/upload");

const router = express.Router();

router.post("/register", validateBody(schemaRegister), register);
router.get("/verify/:verificationToken", verify);
router.post("/verify", validateBody(verifySchema), resendEmail);

router.post("/login", validateBody(schemaRegister), login);
router.get("/logout", authentication, logout);
router.get("/current", authentication, current);
router.patch(
  "/",
  authentication,
  validateBody(subscriptionSchema),
  updateSubscription
);
router.patch("/avatars", authentication, upload.single("avatar"), updateAvatar);

module.exports = router;
