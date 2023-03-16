const express = require("express");
const router = express.Router();
const Sauce = require("../models/Sauce");

const sauceCtrl = require("../controllers/sauce");

router.get("/", sauceCtrl.getAllSauces);
router.get("/:id", sauceCtrl.getOneSauce);
router.post("/", sauceCtrl.createSauce);
router.post("/:id/like", sauceCtrl.likeSauce);
router.put("/:id", sauceCtrl.updateSauce);
router.delete("/:id", sauceCtrl.deleteSauce);

module.exports = router;