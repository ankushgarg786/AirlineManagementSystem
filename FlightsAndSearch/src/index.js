const express = require("express");
const app = express();
//const { PORT } = require("./config/serverConfig.js");
const PORT = 3000;
const bodyParser = require("body-parser");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");
//const { City, Airport } = require("./models/index");
const sequelize = require("sequelize");
const startAndSetupServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: "utf-8" }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);

    // db.sequelize.sync({ alter: true }); it has to be run one time
    //be careful if you do force:true it will erase all the data of all the tables
  });
};

startAndSetupServer();
