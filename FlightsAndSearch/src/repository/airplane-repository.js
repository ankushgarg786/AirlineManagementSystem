const { airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airPlane = await airplane.findByPk(id);
      return airPlane;
    } catch (error) {
      console.log("Error in the airplane-repository");
      throw { error };
    }
  }
}
module.exports = AirplaneRepository;
