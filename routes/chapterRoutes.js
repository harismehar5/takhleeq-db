const express = require("express");
const router = express.Router();

const ChapterController = require("../controller/chapterController");
router.post("/add_chapter", ChapterController.addChapter);
router.get("/get_chapters", ChapterController.getChapters);
router.get("/update_status/:id", ChapterController.updateStatus);

router
  .route("/:id")
  .get(ChapterController.getById)
  .patch(ChapterController.updateById)
  .delete(ChapterController.deleteById);

module.exports = router;
