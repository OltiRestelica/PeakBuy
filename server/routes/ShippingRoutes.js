const express = require("express");
const routes = express.Router();
const ShippingController = require("../controllers/ShippingController");

router.post("/shipping", ShippingController.createShipping);
router.get("/shipping/:order_id", ShippingController.getSippingByOrder);

module.exports = router;
