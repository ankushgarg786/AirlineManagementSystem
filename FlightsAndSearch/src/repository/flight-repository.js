//const { FlightRepository } = require(".");
const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.gte]: data.minPrice } },
          { price: { [Op.lte]: data.maxPrice } },
        ],
      });
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    return filter;
  }

  async createFlight(data) {
    try {
      //console.log(data);
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.create(flightId);
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      console.log(filter);
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
}
module.exports = FlightRepository;

/*
{
  flightNumber,
  airplaneId,
  departureAirportId,
  arrivalAirportId,
  arrivalTime,
  departureTime,
  price,
  totalSeats->airplane
}

*/
/*
where:{
  arrivalAirportId:2,
  departureAirportId:4,
  price:{[Op.gte]:4000}
}

*/
