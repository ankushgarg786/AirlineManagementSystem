//here the logic will be written to connect to models or take data from the models
// it is to interact with the model, we can create the cities , update ,delete etc
//const city = require("../models/city");  //or
const { City } = require("../models/index");

class CityRepository {
  async createCity(obj) {
    //or ({name}) it is destructuring object so we can directly use name
    try {
      const city = await City.create({
        name: obj.name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong inside City repositpry");
      return { error };
    }
  }

  async deleteCity(cityID) {
    try {
      await City.destroy({
        where: {
          id: cityID,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong inside City repositpry");
      return { error };
    }
  }

  async updateCity(cityID, data) {
    // data would be like {name:"Firozpur"}
    try {
      const city = await City.update(data, {
        where: {
          id: cityID,
        },
      });
      return city;
    } catch (error) {
      console.log("Soething went wrong inside city Repo");
      throw { error };
    }
  }

  async getCity(cityID) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (error) {
      console.log("Soething went wrong inside city Repo");
      throw { error };
    }
  }
}

module.exports = CityRepository;
