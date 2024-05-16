const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");

app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: "utf-8" }));
const startAndSetupServer = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

startAndSetupServer();
