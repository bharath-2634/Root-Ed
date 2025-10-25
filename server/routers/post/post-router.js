const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  togglePostStatus,
  getPostStats,
  likePost,
} = require("../../controllers/post/post-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");

const router = express.Router();

// All post routes require authentication
// Only admins should be able to create, update, delete posts
// Students and tutors can view posts

// Create a new post (Admin only)
router.post("/create", authMiddleware, createPost);

// Get all posts (Anyone authenticated)
router.get("/all", authMiddleware, getAllPosts);

// Get post statistics (Admin only)
router.get("/stats", authMiddleware, getPostStats);

// Get a single post by ID (Anyone authenticated)
router.get("/:id", authMiddleware, getPostById);

// Update a post (Admin only)
router.put("/:id", authMiddleware, updatePost);

// Delete a post (Admin only)
router.delete("/:id", authMiddleware, deletePost);

// Toggle post status (Admin only)
router.patch("/:id/status", authMiddleware, togglePostStatus);

// Like a post (Anyone authenticated)
router.post("/:id/like", authMiddleware, likePost);

module.exports = router;
