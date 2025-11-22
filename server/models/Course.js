const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced", "all"],
    default: "beginner",
  },
  rating: {
    type: String,
    default: "4.5",
  },
  sales: {
    type: String,
    default: "0",
  },
  type: {
    type: String,
    enum: ["recorded", "live"],
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  bestSeller: {
    type: Boolean,
    default: false,
  },
  
  // Live Workshop Specific Fields
  scheduleDate: {
    type: Date,
    required: function () {
      return this.type === "live";
    },
  },
  scheduleTime: {
    type: String,
    required: function () {
      return this.type === "live";
    },
  },
  maxParticipants: {
    type: Number,
    default: 0,
  },

  // Metadata
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "archived"],
    default: "active",
  },
});

// Update the updatedAt timestamp before saving
CourseSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
