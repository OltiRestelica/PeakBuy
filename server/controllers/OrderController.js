const  Order = require('../models/Orders'); 
const  OrderItems  = require('../models/OrderItems'); 


exports.createOrder = async (req, res) => {
  try {
    const { address_id ,user_id,  total_price, status } = req.body;

    if (!user_id || !total_price) {
      return res.status(400).json({ message: 'user_id and total_price are required.' });
    }

    const newOrder = await Order.create({
      address_id,
      user_id,
      total_price,
      status: status || 'pending',  
    });

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error: error.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({
      where: { order_id: id },
      include: [
        {
          model: OrderItems,
          as: 'OrderItems'  // match the exact alias defined in hasMany association
        }
      ]
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