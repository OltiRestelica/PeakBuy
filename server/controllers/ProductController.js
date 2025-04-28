const Product = require("../models/Products");
const Category = require("../models/Categories");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;

    const category = await Category.findOne({ where: { name: categoryName } });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.findAll({
      where: { category_id: category.category_id },
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products of this category",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image, category_id } = req.body;

    if (!name || !price || !stock || !image || !category_id) {
      return res
        .status(400)
        .json({ message: "Missing required product fields" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      image,
      category_id,
    });

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, image, category_id } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.update({
      name,
      description,
      price,
      stock,
      image,
      category_id,
    });

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update product", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete product", error: error.message });
  }
};
