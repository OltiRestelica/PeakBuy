const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const { connectToDatabase, databaza } = require("./database");
const User = require("./models/User");
const Categories = require("./models/Categories");
const Products = require("./models/Products");
const Orders = require("./models/Orders")

dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});

// app.get("/allUsers", (req, res) => {
//   User.findAll()
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.post("/addUser", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(200).json({
        message: "User was added",
        data: user,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

databaza.sync();
app.listen(process.env.PORT, () => {
  console.log("server is running on port " + process.env.PORT);
  connectToDatabase();
});
