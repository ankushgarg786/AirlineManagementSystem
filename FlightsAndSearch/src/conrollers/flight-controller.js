const { FlightService } = require("../services/index");

const flightService = new FlightService();
const create = async (req, res) => {
  try {
    //console.log(req.body);
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight successfully created",
      err: {},
    });
  } catch (error) {
    console.log("Error in the flight-controller");
    return res.status(500).json({
      data: {},
      success: true,
      message: "Not able to create a flight",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    console.log(req.params);
    const flight = await flightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flights fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Error in the flight-controller");
    return res.status(500).json({
      data: {},
      success: true,
      message: "Not able to fetch a flight",
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
};
