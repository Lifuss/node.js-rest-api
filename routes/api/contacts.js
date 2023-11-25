const express = require("express");
const ctrl = require("../../controllers/contacts/index");
const validateBody = require("../../middlewares/validateBody");
const {
  schemaPost,
  schemaPut,
  schemaFavorite,
} = require("../../schemas/JoiValidator");
const authentication = require("../../middlewares/authentication");

const router = express.Router();

router.get("/", authentication, ctrl("getAll"));

router.get("/:contactId", authentication, ctrl("getById"));

router.post("/", authentication, validateBody(schemaPost), ctrl("add"));

router.delete("/:contactId", authentication, ctrl("removeById"));

router.put(
  "/:contactId",
  authentication,
  validateBody(schemaPut),
  ctrl("updateByID")
);

router.patch(
  "/:contactId/favorite",
  authentication,
  validateBody(schemaFavorite),
  ctrl("updateFavorites")
);

module.exports = router;
