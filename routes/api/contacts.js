const express = require("express");
const ctrl = require("../../controllers/index");
const { ctrlWrapper } = require("../../services");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", ctrlWrapper(ctrl.updateByID));

router.patch("/:contactId/favorite", ctrlWrapper(ctrl.updateFavorites));

module.exports = router;
