const express = require("express");
const router = express.Router();

const UserController = require("../controller/userController");
router.post("/add_user", UserController.addUser);
router.get("/get_users", UserController.getUsers);
router.get("/update_status/:id", UserController.updateStatus);

router
  .route("/:id")
  .get(UserController.getById)
  .patch(UserController.updateById)
  .delete(UserController.deleteById);

module.exports = router;
