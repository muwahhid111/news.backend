const { Router } = require("express");
const newsController = require("../controllers/news.controller");
const router = Router();

router.get("/news/:id", newsController.getNews);
router.post("/news", newsController.addNews);
router.patch("/news/:id", newsController.patchNews);
router.get("/news/categories/:id", newsController.getNewsCat);
router.delete("/news", newsController.dropNews);
router.get("/news", newsController.getAllNews);

module.exports = router;
