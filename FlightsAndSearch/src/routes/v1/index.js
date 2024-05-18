const express = require("express");
const router = express.Router();

// routes for city
const cityController = require("../../conrollers/city-controller");
router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.patch("/city/:id", cityController.update);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);

//routes for airport
const airportController = require("../../conrollers/airport-controller");
router.post("/airport", airportController.create);
router.get("/airport/:id", airportController.get);
router.patch("/airport/:id", airportController.update);
router.delete("/airport/:id", airportController.destroy);

//routes for flights
const flightController = require("../../conrollers/flight-controller");
router.post("/flights", flightController.create); //flights beacus of conventions try to always write a clean code
router.get("/flights", flightController.getAll);
module.exports = router;
