const express = require("express");
const router = express.Router();

const QuestionController = require("../controller/questionController");
router.post("/add_question", QuestionController.addQuestion);
router.get("/get_questions", QuestionController.getQuestions);
router.get("/update_status/:id", QuestionController.updateStatus);

router
  .route("/:id")
  .get(QuestionController.getById)
  .patch(QuestionController.updateById)
  .delete(QuestionController.deleteById);

module.exports = router;
