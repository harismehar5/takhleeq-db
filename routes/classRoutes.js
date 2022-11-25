const express = require("express");
const router = express.Router();

const ClassController = require("../controller/classController");
router.post("/add_class", ClassController.addClass);
router.get("/get_classes", ClassController.getClasses);
router.get("/update_status/:id", ClassController.updateStatus);

router
  .route("/:id")
  .get(ClassController.getById)
  .patch(ClassController.updateById)
  .delete(ClassController.deleteById);

module.exports = router;
