const Category = require("../models/Categories");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching categories." });
  }
};

exports.addCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory)
      return res.status(400).json({ message: "Category already exists." });

    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Error adding category." });
  }
};
exports.updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description} = req.body;
  
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: 'category not found' });
      }
  
      await category.update({
        name,
        description,
      });
  
      res.status(200).json({ message: 'category updated successfully', category });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update category', error: error.message });
    }
  };


exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category)
      return res.status(404).json({ message: "Category not found." });

    res.json({ message: "Category deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting category." });
  }
};
