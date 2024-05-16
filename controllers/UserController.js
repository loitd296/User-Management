const UserModel = require("../models/UserModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await UserModel.createUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const updatedUserData = req.body;
    const user = await UserModel.updateUser(username, updatedUserData);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { username } = req.params;
    await UserModel.deleteUser(username);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserModel.getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const queryParams = req.query;
    const users = await UserModel.searchUsers(queryParams);
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
