const express = requires("express");
const router = express.Router();
const CartContorller = requrie("../contorllers/CartController");

router.post("/add", CartContorller.addCart);
router.get("/user/:userId", CartController.getCardByUserId);
router.put("/update/:id", CartController.updateCartQuantity);
router.delete("/delete/:id", CartContorller.deleteCart);

module.exports = router;
