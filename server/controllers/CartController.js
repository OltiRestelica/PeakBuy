const Cart = require("../models/Cart");

exports.addCart = async (req, res) => {
  try {
    const { user_id, product_id, order_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      return res
        .status(400)
        .json({
          message: "user_id, product_id, , order_id and quantity are required.",
        });
    }

    const newItem = await Cart.create({
      user_id,
      product_id,
      quantity,
      order_id,
    });

    res.status(201).json({ message: "Item added to cart.", item: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add item to cart.", error: error.message });
  }
};

exports.getCartByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const items = await Cart.findAll({
      where: { user_id: userId },
    });

    res.status(200).json({ Cart: items });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch cart items.", error: error.message });
  }
};

exports.updateCartQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
      return res.status(400).json({ message: "Quantity is required." });
    }

    const item = await Cart.findByPk(id);
    if (!item) return res.status(404).json({ message: "Cart item not found." });

    item.quantity = quantity;
    await item.save();

    res.status(200).json({ message: "Cart item quantity updated.", item });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update cart item.", error: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Cart.findByPk(id);
    if (!item) return res.status(404).json({ message: "Cart item not found." });

    await item.destroy();

    res.status(200).json({ message: "Cart item removed." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to remove cart item.", error: error.message });
  }
};
