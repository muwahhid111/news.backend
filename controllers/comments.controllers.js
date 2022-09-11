const Comments = require("../models/Comment.model");
module.exports.commentsController = {
  addComments: async (req, res) => {
    //добавление комментария

    const { nameComments, textComments, NewsComments } = req.body;
    try {
      await Comments.create({
        nameComments,
        textComments,
        NewsComments,
      });
      res.json("Добавлен");
    } catch (error) {
      res.json(error.message);
    }
  },

  //удаление комментария
  dporComments: async (req, res) => {
    try {
      await Comments.findByIdAndRemove(req.params.id);
      res.json("Комментарий удален");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAddComments: async (req, res) => {
    try {
      const comList = await Comments.find({
        newsIdNewsComments: req.params.id,
      });
      res.json(comList);
    } catch (error) {
      res.json(error.message);
    }
  },
};
