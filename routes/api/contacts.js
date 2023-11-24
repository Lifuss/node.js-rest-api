const express = require("express");
const ctrl = require("../../controllers/index");
const { ctrlWrapper } = require("../../services");
const validateBody = require("../../middlewares/validateBody");
const {
  schemaPost,
  schemaPut,
  schemaFavorite,
} = require("../../schemas/JoiValidator");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemaPost), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  validateBody(schemaPut),
  ctrlWrapper(ctrl.updateByID)
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemaFavorite),
  ctrlWrapper(ctrl.updateFavorites)
);

module.exports = router;
