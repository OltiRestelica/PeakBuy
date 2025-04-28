const UserAddresses = require("../models/User_Addresses");

exports.getUserAddresses = async (req, res) => {
  const user_id = req.user.user_id;

  try {
    const addresses = await UserAddresses.findAll({ where: { user_id } });
    res.status(200).json({ status: 1, data: addresses });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Could not fetch addresses",
      error: err.message,
    });
  }
};

exports.addUserAddresses = async (req, res) => {
  // const user_id = req.user.user_id;
  const { user_id, address, city, country } = req.body;

  try {
    const newAddress = await UserAddresses.create({
      user_id,
      address,
      city,
      country,
    });
    res.status(201).json({ status: 1, message: "Address created", data: newAddress });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Failed to create address",
      error: err.message,
    });
  }
};

exports.deleteUserAddress = async (req, res) => {
  const user_id = req.body;
  const address_id = req.params.id;

  try {
    const deleted = await UserAddresses.destroy({
      where: { address_id, user_id },
    });

    if (deleted) {
      res.status(200).json({ status: 1, message: "Address deleted" });
    } else {
      res.status(404).json({ status: 0, message: "Address not found" });
    }
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Failed to delete address",
      error: err.message,
    });
  }
};




// const UserAddresses = require("../models/UserAdresses");

// const getUserAddresses = async (req, res) => {
//   const user_id = req.user_id;

//   try {
//     const addresses = await UserAddresses.findAll({ where: { user_id } });
//     res.status(200).json({ status: 1, data: addresses });
//   } catch (err) {
//     res.status(500).json({
//       status: 0,
//       message: "Could not fetch adresses",
//       error: err.message,
//     });
//   }
// };

// // const addUserAddresses = async (req, res) => {
// //   const user_id = req.user.user_id;
// //   const { address, city, country } = req.body;

// //   try {
// //     const newAddress = await UserAddresses.create({
// //       user_id,
// //       address,
// //       city,
// //       country,
// //     });
// //     res.status(201)
// //       .json({ status: 1, message: "Address created", data: newAddress });
// //   } catch (err) {
// //     res.status(500).json({
// //       status: 0,
// //       message: "Faild to create address",
// //       error: err.message,
// //     });
// //   }
// // };

// // const deleteUserAddress = async (req, res) => {
// //   const user_id = req.user.user_id;
// //   const address_id = req.params.id;

// //   try {
// //     const deleted = await UserAddresses.destroy({
// //       where: { address_id, user_id },
// //     });

// //     if (deleted) {
// //       res.status(200).json({ status: 1, message: "Address deleted" });
// //     } else {
// //       res.status(404).json({ status: 0, message: "Address not found " });
// //     }
// //   } catch (err) {
// //     res.status(500).json({
// //       status: 0,
// //       message: "Failed to deleted address",
// //       error: err.message,
// //     });
// //   }
// // };

// module.exports = {
//   getUserAddresses,
//   // addUserAddresses,
//   // deleteUserAddress,
// };
