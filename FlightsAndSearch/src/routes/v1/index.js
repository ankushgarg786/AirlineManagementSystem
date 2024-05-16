const express = require("express");

const cityController = require("../../conrollers/city-controller");
const router = express.Router();
router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
module.exports = router;
