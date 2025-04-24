const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

router.post("/add", CartController.addCart);
router.get("/user/:userId", CartController.getCartByUserId);
router.put("/update/:id", CartController.updateCartQuantity);
router.delete("/delete/:id", CartController.deleteCart);

module.exports = router;
