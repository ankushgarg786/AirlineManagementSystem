const { BookingService } = require("../services/booking-service");
const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      message: "Flight booking successful",
      error: {},
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: {},
      message: "Flight not booked",
      error: error,
    });
  }
};
module.exports = {
  create,
};
