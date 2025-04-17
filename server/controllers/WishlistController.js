const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
  try {
    const { order_id, product_id } = req.body;

    if (!order_id || !product_id) {
      return res.status(400).json({ message: 'order_id and product_id are required.' });
    }

    const newItem = await Wishlist.create({ order_id, product_id });

    res.status(201).json({ message: 'Item added to wishlist', wishlistItem: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to wishlist', error: error.message });
  }
};

exports.getAllWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await Wishlist.findAll();
    res.status(200).json({ wishlistItems });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve wishlist items', error: error.message });
  }
};

exports.getWishlistByOrderId = async (req, res) => {
  try {
    const { order_id } = req.params;

    const items = await Wishlist.findAll({ where: { order_id } });

    res.status(200).json({ wishlist: items });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve wishlist', error: error.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Wishlist.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }

    await item.destroy();

    res.status(200).json({ message: 'Item removed from wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item from wishlist', error: error.message });
  }
};