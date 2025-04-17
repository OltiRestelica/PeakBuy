const Coupons = require('../models/Coupons');

exports.createCoupon = async (req, res) => {
  try {
    const { code, discount, expiration_date } = req.body;

    if (!code || !expiration_date) {
      return res.status(400).json({ message: 'code and expiration_date are required.' });
    }

    const newCoupon = await Coupons.create({ code, discount, expiration_date });

    res.status(201).json({ message: 'Coupon created successfully', coupon: newCoupon });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create coupon', error: error.message });
  }
};

exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupons.findAll();
    res.status(200).json({ coupons });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve coupons', error: error.message });
  }
};

exports.getCouponById = async (req, res) => {
  try {
    const { id } = req.params;

    const coupon = await Coupons.findByPk(id);

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    res.status(200).json({ coupon });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve coupon', error: error.message });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;

    const coupon = await Coupons.findByPk(id);

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    await coupon.destroy();

    res.status(200).json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete coupon', error: error.message });
  }
};
