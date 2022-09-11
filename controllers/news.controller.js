const { update } = require("../models/new.models.js");
const News = require("../models/new.models.js");
const newsController = {
  //вывод одной новости
  getNews: async (req, res) => {
    const news = await News.findById(req.params.id);
    res.json(news);
  },
  //добавить новость
  addNews: async (req, res) => {
    const { title, text, _categoriesId } = req.body;
    try {
      await News.create({
        title,
        text,
        _categoriesId,
      });
      res.json("Новость добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  //Удалить новость
  dropNews: async (req, res) => {
    try {
      await News.findByIdAndRemove(req.params.id);
      res.json("Новость удалена");
    } catch (e) {
      res.json(e.message);
    }
  },
  //изменить новость
  patchNews: async (req, res) => {
    const { title, text, _categoriesId } = req.body;
    try {
      const updated = await News.findByIdAndUpdate(req.params.id, {
        title,
        text,
        _categoriesId,
      });
      res.json(updated);
    } catch (e) {
      res.json(e.message);
    }
  },
  //Вывести новости из определенной категории
  getNewsCat: async (req, res) => {
    try {
      const newsListByCategory = await News.find({
        _categoriesId: req.params.id,
      });
      res.json(newsListByCategory);
    } catch (error) {
      res.json(error);
    }
  },
  //вывести все новости
  getAllNews: async (req, res) => {
    const news = await News.find();
    res.json(news);
  },
};
module.exports = newsController;
