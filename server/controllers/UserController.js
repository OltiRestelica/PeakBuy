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

const Login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Please fill out the form");
  } else {
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({
            status: 0,
            data: "User not found",
          });
        } else {
          const isPasswordValid = bcrypt.compareSync(password, user.password);
          
          if (!isPasswordValid) {
            res.status(401).json({
              status: 0,
              data: "Invalid password",
            });
          } else {
            res.status(200).json({
              status: 1,
              data: user,
            });
          }
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

module.exports =  {SignUp , Login};