const express = require("express");

const cityController = require("../../conrollers/city-controller");
const router = express.Router();
router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.patch("/city/:id", cityController.update);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);

const airportController = require("../../conrollers/airport-controller");
router.post("/airport", airportController.create);
router.get("/airport/:id", airportController.get);
router.patch("/airport/:id", airportController.update);
router.delete("/airport/:id", airportController.destroy);
module.exports = router;
