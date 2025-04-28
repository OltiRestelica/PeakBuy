const Shipping = require("../models/Shipping");

const createShipping = async (req, res) => {
  try {
    const { order_id, tracking_number, carrier, status, estimated_delivery } =
      req.body;

    if (!order_id || !tracking_number || !estimated_delivery) {
      return res.status(400).json({
        status: 0,
        message:
          "order_id, tracking_number, and estimated_delivery are required",
      });
    }

    const newShipping = await Shipping.create({
      order_id,
      tracking_number,
      carrier,
      status,
      estimated_delivery,
    });

    res.status(201).json({
      status: 1,
      message: "Shipping created successfully",
      data: newShipping,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 0, message: "Something went wrong", error });
  }
};

const getShippingByOrder = async (req, res) => {
  try {
    const order_id = req.params.order_id;

    const shipping = await Shipping.findOne({
      where: { order_id },
    });

    if (!shipping) {
      return res
        .status(404)
        .json({ status: 0, message: "No shipping found for this order" });
    }

    res.status(200).json({
      status: 1,
      data: shipping,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 0, message: "Something went wrong", error });
  }
};

module.exports = {
  createShipping,
  getShippingByOrder,
};
