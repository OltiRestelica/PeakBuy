const express = require("express")
const router = express.Router();
const CategoryController = require("../controllers/CategoryControllers");

router.get("/", CategoryController.getCategories)
router.post("/", CategoryController.addCategory);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router