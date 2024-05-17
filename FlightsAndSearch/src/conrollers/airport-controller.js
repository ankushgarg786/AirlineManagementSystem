const { AirportService } = require("../services/index");
const airportService = new AirportService();
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to add a airport",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully updated a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a airport",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully fetched a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a airport",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a airport",
      err: error,
    });
  }
};
module.exports = {
  create,
  update,
  destroy,
  get,
};
