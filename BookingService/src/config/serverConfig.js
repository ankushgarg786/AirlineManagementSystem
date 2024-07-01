const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT);
module.exports = {
  PORT: process.env.PORT,
  FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
};
