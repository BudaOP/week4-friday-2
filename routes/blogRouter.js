const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  patchBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

// GET /blogs
router.get("/", getAllBlogs);

// POST /blogs
router.post("/", createBlog);

// GET /blogs/:blogId
router.get("/:blogId", getBlogById);

// PATCH /blogs/:blogId - Update a blog by ID (PATCH behavior)
router.patch("/:blogId", patchBlog);

// DELETE /blogs/:blogId
router.delete("/:blogId", deleteBlog);

// Update blog using PATCH
// router.patch('/:blogId', patchBlog)

module.exports = router;
