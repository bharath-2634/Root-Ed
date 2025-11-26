const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
    metadata: {
    created_at: {
    type: Date,
    default: Date.now,
    },
    updated_at: {
    type: Date,
    default: Date.now,
    },
    }
});

// Update the updatedAt timestamp before saving
PostSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
