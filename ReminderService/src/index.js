const express = require("express");

const bodyParser = require("body-parser");
const { sendBasicEmail } = require("./services/email-service");
const { PORT } = require("./config/serverConfig");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");
const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(`Port started on ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "notificationservicce@gmail.com",
    //   "this is a testing email",
    //   "Hey,hope you are well. This is a temp email"
    // );
  });
};

setupAndStartServer();
