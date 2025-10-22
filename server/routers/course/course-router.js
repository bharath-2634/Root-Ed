const express = require("express");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  toggleCourseStatus,
  getCourseStats,
} = require("../../controllers/course/course-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");

const router = express.Router();

// All course routes require authentication
// Only admins should be able to create, update, delete courses
// Students and tutors can view courses

// Create a new course (Admin only)
router.post("/create", authMiddleware, createCourse);

// Get all courses (Anyone authenticated)
router.get("/all", authMiddleware, getAllCourses);

// Get course statistics (Admin only)
router.get("/stats", authMiddleware, getCourseStats);

// Get a single course by ID (Anyone authenticated)
router.get("/:id", authMiddleware, getCourseById);

// Update a course (Admin only)
router.put("/:id", authMiddleware, updateCourse);

// Delete a course (Admin only)
router.delete("/:id", authMiddleware, deleteCourse);

// Toggle course status (Admin only)
router.patch("/:id/status", authMiddleware, toggleCourseStatus);

module.exports = router;
