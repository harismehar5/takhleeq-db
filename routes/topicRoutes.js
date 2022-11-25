const express = require("express");
const router = express.Router();

const TopicController = require("../controller/topicController");
router.post("/add_topic", TopicController.addTopic);
router.get("/get_topics", TopicController.getTopics);
router.get("/update_status/:id", TopicController.updateStatus);

router
  .route("/:id")
  .get(TopicController.getById)
  .patch(TopicController.updateById)
  .delete(TopicController.deleteById);

module.exports = router;
