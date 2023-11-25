const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const { schemaRegister } = require("../../schemas/JoiValidator");
const { ctrlWrapper } = require("../../services");
const ctrl = require("../../controllers/users");
const authentication = require("../../middlewares/authentication");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemaRegister),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validateBody(schemaRegister), ctrlWrapper(ctrl.login));
router.get("/logout", authentication, ctrlWrapper(ctrl.logout));
router.get("/current", authentication, ctrlWrapper(ctrl.current));

module.exports = router;
