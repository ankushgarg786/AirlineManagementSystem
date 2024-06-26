const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not abele to create a city",
      err: error,
    });
  }
};
//DELETE .->/city/:id

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not abele to delete a city",
      err: error,
    });
  }
};
// PATCH /city/:id ->req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City updated Suceessfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not abele to update a city",
      err: error,
    });
  }
};
// GET /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City fetched Suceessfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not abele to fetch a city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAll(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Cities fetched Suceessfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not abele to fetch all cities",
      err: error,
    });
  }
};
module.exports = {
  create,
  update,
  destroy,
  get,
  getAll,
};
