const { ValidationError } = require("sequelize");
const { booking } = require("../models/index");
const { AppError } = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class BookingRepository {
  async create(data) {
    try {
      const response = await booking.create(data);
      return response;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepositoryError",
        "Cannot create Booking",
        "There was some issue creating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(bookingId, data) {
    try {
      const response = await booking.findByPk(bookingId);
      if (data.status) {
        response.status = data.status;
      }
      await response.save();
      return response;
    } catch (error) {
      throw new AppError(
        "RepositoryError",
        "Cannot update Booking",
        "There was some issue updating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}
module.exports = BookingRepository;
