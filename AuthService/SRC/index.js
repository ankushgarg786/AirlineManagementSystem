const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");
const app = express();
const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(3001, () => {
    console.log(`Server started on Port :3001`);
  });
};

prepareAndStartServer();
