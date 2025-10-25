const Post = require("../../models/Post");

// Create a new post
const createPost = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      category,
      tags,
      featured,
    } = req.body;

    // Get the authenticated user ID from the middleware
    const createdBy = req.user.userId;

    // Validate required fields
    if (!title || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (title, description, image)",
      });
    }

    // Create new post
    const newPost = new Post({
      title,
      description,
      image,
      category,
      tags,
      featured,
      createdBy,
    });

    await newPost.save();

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: error.message,
    });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const { status, category, featured } = req.query;

    // Build filter object
    let filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === "true";

    const posts = await Post.find(filter)
      .populate("createdBy", "userName email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.error("Get Posts Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id).populate(
      "createdBy",
      "userName email"
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Increment view count
    post.views += 1;
    await post.save();

    res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      post,
    });
  } catch (error) {
    console.error("Get Post By ID Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch post",
      error: error.message,
    });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: Date.now() },
      { new: true, runValidators: true }
    ).populate("createdBy", "userName email");

    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Update Post Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update post",
      error: error.message,
    });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Delete Post Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete post",
      error: error.message,
    });
  }
};

// Toggle post status (published/draft/archived)
const togglePostStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["published", "draft", "archived"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const post = await Post.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Post ${status} successfully`,
      post,
    });
  } catch (error) {
    console.error("Toggle Post Status Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update post status",
      error: error.message,
    });
  }
};

// Get post statistics
const getPostStats = async (req, res) => {
  try {
    const totalPosts = await Post.countDocuments();
    const publishedPosts = await Post.countDocuments({ status: "published" });
    const draftPosts = await Post.countDocuments({ status: "draft" });
    const featuredPosts = await Post.countDocuments({ featured: true });
    
    // Get posts by category
    const postsByCategory = await Post.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    // Get total views and likes
    const engagement = await Post.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
          totalLikes: { $sum: "$likes" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        total: totalPosts,
        published: publishedPosts,
        draft: draftPosts,
        featured: featuredPosts,
        byCategory: postsByCategory,
        totalViews: engagement[0]?.totalViews || 0,
        totalLikes: engagement[0]?.totalLikes || 0,
      },
    });
  } catch (error) {
    console.error("Get Post Stats Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch post statistics",
      error: error.message,
    });
  }
};

// Like a post
const likePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    post.likes += 1;
    await post.save();

    res.status(200).json({
      success: true,
      message: "Post liked successfully",
      likes: post.likes,
    });
  } catch (error) {
    console.error("Like Post Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to like post",
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  togglePostStatus,
  getPostStats,
  likePost,
};
