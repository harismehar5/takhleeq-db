const express = require("express");
const router = express.Router();

const SubjectController = require("../controller/subjectController");
router.post("/add_subject", SubjectController.addSubject);
router.get("/get_subjects", SubjectController.getSubjects);
router.get("/update_status/:id", SubjectController.updateStatus);

router
  .route("/:id")
  .get(SubjectController.getById)
  .patch(SubjectController.updateById)
  .delete(SubjectController.deleteById);

module.exports = router;
