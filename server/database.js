const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const databaza = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

let connectToDatabase = async () => {
  try {
    await databaza.authenticate();
    console.log("connected to the database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { databaza, connectToDatabase };
