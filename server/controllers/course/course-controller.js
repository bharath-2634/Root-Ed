const Course = require("../../models/Course");

// Create a new course
const createCourse = async (req, res) => {
  try {
    const {
      title,
      instructor,
      category,
      description,
      price,
      duration,
      level,
      rating,
      sales,
      type,
      image,
      bestSeller,
      scheduleDate,
      scheduleTime,
      maxParticipants,
    } = req.body;

    // Get the authenticated user ID from the middleware
    const createdBy = req.user.userId;

    // Validate required fields
    if (!title || !instructor || !category || !price || !duration || !type) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create new course
    const newCourse = new Course({
      title,
      instructor,
      category,
      description,
      price,
      duration,
      level,
      rating,
      sales,
      type,
      image,
      bestSeller,
      scheduleDate,
      scheduleTime,
      maxParticipants,
      createdBy,
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (error) {
    console.error("Create Course Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const { type, status, category } = req.query;

    // Build filter object
    let filter = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    if (category) filter.category = category;

    const courses = await Course.find(filter)
      .populate("createdBy", "userName email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      courses,
    });
  } catch (error) {
    console.error("Get Courses Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};

// Get a single course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id).populate(
      "createdBy",
      "userName email"
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course fetched successfully",
      course,
    });
  } catch (error) {
    console.error("Get Course Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch course",
      error: error.message,
    });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove fields that shouldn't be updated directly
    delete updateData.createdBy;
    delete updateData.createdAt;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    console.error("Update Course Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update course",
      error: error.message,
    });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      course: deletedCourse,
    });
  } catch (error) {
    console.error("Delete Course Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete course",
      error: error.message,
    });
  }
};

// Toggle course status (active/inactive)
const toggleCourseStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["active", "inactive", "archived"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const course = await Course.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Course status updated to ${status}`,
      course,
    });
  } catch (error) {
    console.error("Toggle Status Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update course status",
      error: error.message,
    });
  }
};

// Get course statistics
const getCourseStats = async (req, res) => {
  try {
    const totalCourses = await Course.countDocuments();
    const recordedCourses = await Course.countDocuments({ type: "recorded" });
    const liveCourses = await Course.countDocuments({ type: "live" });
    const bestSellers = await Course.countDocuments({ bestSeller: true });
    const activeCourses = await Course.countDocuments({ status: "active" });

    res.status(200).json({
      success: true,
      message: "Statistics fetched successfully",
      stats: {
        total: totalCourses,
        recorded: recordedCourses,
        live: liveCourses,
        bestSellers,
        active: activeCourses,
      },
    });
  } catch (error) {
    console.error("Get Stats Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch statistics",
      error: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  toggleCourseStatus,
  getCourseStats,
};
