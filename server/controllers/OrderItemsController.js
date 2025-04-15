const OrderItems = require('../models/OrderItems');

exports.addOrderItem = async (req, res) => {
  try {
    const { order_id, product_id, price, quantity } = req.body;

    if (!order_id || !product_id || !quantity) {
      return res.status(400).json({ message: 'order_id, product_id and quantity are required.' });
    }

    const newItem = await OrderItems.create({
      order_id,
      product_id,
      price,
      quantity
    });

    res.status(201).json({ message: 'Order item added successfully.', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add order item.', error: error.message });
  }
};

exports.getOrderItemsByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;

    const items = await OrderItems.findAll({
      where: { order_id: orderId }
    });

    res.status(200).json({ orderItems: items });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order items.', error: error.message });
  }
};

exports.updateOrderItemQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
      return res.status(400).json({ message: 'Quantity is required.' });
    }

    const item = await OrderItems.findByPk(id);
    if (!item) return res.status(404).json({ message: 'Order item not found.' });

    item.quantity = quantity;
    await item.save();

    res.status(200).json({ message: 'Order item quantity updated.', item });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order item.', error: error.message });
  }
};


exports.deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await OrderItems.findByPk(id);
    if (!item) return res.status(404).json({ message: 'Order item not found.' });

    await item.destroy();

    res.status(200).json({ message: 'Order item deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order item.', error: error.message });
  }
};