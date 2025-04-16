const  Order = require('../models/Orders'); 
const  OrderItems  = require('../models/OrderItems'); 

exports.createOrder = async (req, res) => {
  try {
    const { user_id, total_price, status } = req.body;

    if (!user_id || !total_price) {
      return res.status(400).json({ message: 'user_id and total_price are required.' });
    }

    const newOrder = await databaza.models.orders.create({
      user_id,
      total_price,
      status: status || 'pending',  
    });

    res.status(201).json({ message: 'Order created successfully', order: neworders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await databaza.models.orders.findAll();

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error: error.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await databaza.models.orders.findOne({
      where: { id },
      include: [{ model: orders, as: 'orderItems' }],
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve order', error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await Order.findByPk(id); 
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      await OrderItems.destroy({ where: { order_id: id } });
  
      await order.destroy();
  
      res.status(200).json({ message: 'Order and its items deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete order', error: error.message });
    }
  };