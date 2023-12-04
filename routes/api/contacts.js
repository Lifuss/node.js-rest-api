const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const {
  schemaPost,
  schemaPut,
  schemaFavorite,
} = require("../../schemas/JoiValidator");
const authentication = require("../../middlewares/authentication");
const {
  getAll,
  getById,
  add,
  removeById,
  updateByID,
  updateFavorites,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", authentication, getAll);
router.get("/:contactId", authentication, getById);
router.post("/", authentication, validateBody(schemaPost), add);
router.delete("/:contactId", authentication, removeById);
router.put("/:contactId", authentication, validateBody(schemaPut), updateByID);
router.patch(
  "/:contactId/favorite",
  authentication,
  validateBody(schemaFavorite),
  updateFavorites
);

module.exports = router;
