const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({
        name,
        address,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("Error in airport-repository");
      throw { error };
    }
  }
  async updateAiport(airportId, data) {
    try {
      const response = await Airport.update(data, {
        where: {
          id: airportId,
        },
      });
      return response;
    } catch (error) {
      console.log("Error in airport-repository");
      throw { error };
    }
  }
  async getAirport(airportId) {
    try {
      const response = await Airport.findByPk(airportId);
      return response;
    } catch (error) {
      console.log("Error in airport-repository");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("Error in airport-repository");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
