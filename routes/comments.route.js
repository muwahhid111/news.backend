const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controllers");

const router = Router();
router.post("/comments", commentsController.addComments);
router.get("/comments/:id", commentsController.getAddComments);
router.delete("/comments/:id", commentsController.dporComments);

module.exports = router;
