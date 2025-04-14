const User = require("../models/User");
const bcrypt = require("bcrypt");

const SignUp = (req, res) => {
  let { name, lastName, email, phoneNumber, address } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);

  if (!name || !lastName || !email || !password || !phoneNumber || !address) {
    res.send(400, "Please fill out the form");
  } else {
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (user) {
          res.status(500).json({
            status: 0,
            data: "This user exist",
          });
        } else {
            User.create({
              name,
              lastName,
              email,
              password,
              phoneNumber,
              address,
            })
              .then((newUser) => {
                res.status(200).json({
                  status: 1,
                  data: newUser,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  status: 0,
                  data: err,
                });
              });
          
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: 0,
          data: err,
        });
      });
  }
};

module.exports = SignUp;
