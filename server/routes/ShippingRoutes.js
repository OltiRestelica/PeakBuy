const express = require("express");
const router = express.Router();
const ShippingController = require("../controllers/ShippingController");

router.post("/addShipping", ShippingController.createShipping);
router.get("/getShipping/:order_id", ShippingController.getShippingByOrder);

module.exports = router;
