const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user-repository");
const { jwt_key } = require("../config/serverConfig");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const user = this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Error in user-service");
      throw error;
    }
  }
  createToken(user) {
    try {
      const result = jwt.sign(user, jwt_key, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("something went wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, jwt_key);
      return response;
    } catch (error) {
      console.log("something went wrong in token validation");
      throw error;
    }
  }
}
module.exports = UserService;
