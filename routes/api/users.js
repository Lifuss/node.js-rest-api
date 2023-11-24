const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const { schemaRegister } = require("../../schemas/JoiValidator");
const { ctrlWrapper } = require("../../services");
const ctrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemaRegister),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validateBody(schemaRegister), ctrlWrapper(ctrl.login));
module.exports = router;
