const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const { schemaRegister } = require("../../schemas/JoiValidator");
const ctrl = require("../../controllers/users");
const authentication = require("../../middlewares/authentication");

const router = express.Router();

router.post("/register", validateBody(schemaRegister), ctrl("register"));

router.post("/login", validateBody(schemaRegister), ctrl("login"));
router.get("/logout", authentication, ctrl("logout"));
router.get("/current", authentication, ctrl("current"));

module.exports = router;
