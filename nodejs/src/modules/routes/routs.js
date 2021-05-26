const express = require("express");
const router = express.Router();

const {
  getAllCosts,
  createNewCost,
  changeCostInfo,
  deletCost,
  deletAllCost,
} = require("../controllers/costs.controllers");

router.get("allCosts", getAllCosts);
router.post("createCost", createNewCost);
router.patch("updateCost", changeCostInfo);
router.delete("deleteCost", deletCost);
router.delete("deleteAllCosts", deletAllCost);

module.exports = router;
