const TicketService = require("../services/email-service");
const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      error: {},
      message: "Successfully registered an email reminder",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "Unable to register an email reminder",
      data: {},
    });
  }
};
module.exports = {
  create,
};
