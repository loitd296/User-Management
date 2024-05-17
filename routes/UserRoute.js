const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

//Route CRUD
router.post("/create", userController.createUser);

router.put("/users/:username", userController.updateUser);

router.delete("/users/:username", userController.deleteUser);

router.get("/users", userController.searchUsers);

module.exports = router;
