const express = require("express");
const router = express.Router();
const {
  getUserAddresses,
  addUserAddresses,
  deleteUserAddress,
} = require("../controllers/UserAddressesController");
// const verifyToken = require("../middleware/authMiddleware");

// router.use(verifyToken);

router.get("/", getUserAddresses);
router.post("/", addUserAddresses);
router.delete("/:id", deleteUserAddress);

module.exports = router;


// const express = require("express");
// const router = express.Router();
// const {
//   getUserAddresses,
//   addUserAddresses,
//   deleteUserAddress,
// } = require("../controllers/UserAddressesController");
// //const verifyToken = require("../middleware/authMiddleware");

// //-+*router.use(verifyToken);

// router.get("/", getUserAddresses)
// router.post("/", addUserAddresses);
// router.delete("/:id", deleteUserAddress);

// module.exports = router;
