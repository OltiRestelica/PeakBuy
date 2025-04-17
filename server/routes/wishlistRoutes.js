const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/WishlistController');

router.post('/', wishlistController.addToWishlist);

router.get('/', wishlistController.getAllWishlistItems);

router.get('/order/:order_id', wishlistController.getWishlistByOrderId);

router.delete('/:id', wishlistController.removeFromWishlist);

module.exports = router;