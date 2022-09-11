const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    const cat = await Category.findById(req.params.id);
    res.json(cat);
  },
  addCategories: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },
  dropCategories: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      res.json(error);
    }
  },
};
