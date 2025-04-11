const Sequelize = require("sequelize");

const databaza = new Sequelize("peakbuy", "root", "", {
  host: "localhost",
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
