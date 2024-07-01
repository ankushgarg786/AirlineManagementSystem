const { AirplaneRepository, FlightRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      console.log(data);
      // if (!compareTime(airplane.arrivalTime > airplane.departureTime)) {
      //   throw { error: "Arrival time cannot be less than departure time" };
      // }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      console.log(airplane.capacity);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
  async getAllFlights(data) {
    try {
      const flight = await this.flightRepository.getAllFlights(data);
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
  async updateFlights(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlights(
        flightId,
        data
      );
      return response;
    } catch (error) {
      console.log("Error in the flight-repository");
      throw { error };
    }
  }
}

module.exports = FlightService;
