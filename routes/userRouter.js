const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:userId
router.get("/:userId", getUserById);

// PATCH /users/:userId - Update a user by ID (PATCH behavior)
router.patch("/:userId", patchUser);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

// Update user using PATCH
// router.patch('/:userId', patchUser)

module.exports = router;
