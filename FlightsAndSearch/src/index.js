const express = require("express");
//const { PORT } = require("./config/serverConfig.js");
const PORT = 3000;
const bodyParser = require("body-parser");

const ApiRoutes = require("./routes/index");
const startAndSetupServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: "utf-8" }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

startAndSetupServer();
