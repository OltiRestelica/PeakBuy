const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/signUp", UserController.SignUp);
router.post("/logIn", UserController.Login);

module.exports = router;
