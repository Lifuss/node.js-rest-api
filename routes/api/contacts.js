const express = require("express");
const ctrl = require("../../controllers/contacts/index");
const validateBody = require("../../middlewares/validateBody");
const {
  schemaPost,
  schemaPut,
  schemaFavorite,
} = require("../../schemas/JoiValidator");

const router = express.Router();

router.get("/", ctrl("getAll"));

router.get("/:contactId", ctrl("getById"));

router.post("/", validateBody(schemaPost), ctrl("add"));

router.delete("/:contactId", ctrl("removeById"));

router.put("/:contactId", validateBody(schemaPut), ctrl("updateByID"));

router.patch(
  "/:contactId/favorite",
  validateBody(schemaFavorite),
  ctrl("updateFavorites")
);

module.exports = router;
