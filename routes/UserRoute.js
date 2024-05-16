const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// router.get("/users", userController.getAllUsers);

router.post("/create", userController.createUser);

router.put("/users/:username", userController.updateUser);

router.delete("/users/:username", userController.deleteUser);

// router.get("/users/:username", userController.getUserByUsername);

router.get("/users", userController.searchUsers);

// Implement other routes (create, read by ID, update, delete)

module.exports = router;
