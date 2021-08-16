require("dotenv").config();

module.exports = {
  mongoURI: "mongodb://localhost:27017/category",
  nodeENV: process.env.NODE_ENV,

};
