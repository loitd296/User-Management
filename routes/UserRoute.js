const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

//Route CRUD
router.get("/getAllUser", userController.getAllUsers);

router.post("/create", userController.createUser);

router.patch("/users/:username/update", userController.updateUser);

router.delete("/users/:username/delete", userController.deleteUser);

router.get("/users", userController.searchUsers);

module.exports = router;
