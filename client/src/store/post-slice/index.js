import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  posts: [],
  stats: {
    total: 0,
    published: 0,
    draft: 0,
    featured: 0,
    totalViews: 0,
    totalLikes: 0,
  },
  error: null,
};

const API_URL = "http://localhost:5000/api/post";

// Create a new post
export const createPost = createAsyncThunk(
  "/admin/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/create`,
        postData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to create post" });
    }
  }
);

// Get all posts
export const getAllPosts = createAsyncThunk(
  "/admin/getAllPosts",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/all`, {
        params: filters,
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch posts" });
    }
  }
);

// Get post by ID
export const getPostById = createAsyncThunk(
  "/admin/getPostById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch post" });
    }
  }
);

// Update post
export const updatePost = createAsyncThunk(
  "/admin/updatePost",
  async ({ id, postData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        postData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to update post" });
    }
  }
);

// Delete post
export const deletePost = createAsyncThunk(
  "/admin/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to delete post" });
    }
  }
);

// Toggle post status
export const togglePostStatus = createAsyncThunk(
  "/admin/togglePostStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${id}/status`,
        { status },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to update post status" });
    }
  }
);

// Get post statistics
export const getPostStats = createAsyncThunk(
  "/admin/getPostStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/stats`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch post statistics" });
    }
  }
);

// Like a post
export const likePost = createAsyncThunk(
  "/admin/likePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/${id}/like`, {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to like post" });
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Post
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [action.payload.post, ...state.posts];
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to create post";
      })

      // Get All Posts
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch posts";
      })

      // Get Post By ID
      .addCase(getPostById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch post";
      })

      // Update Post
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.posts.findIndex(
          (post) => post._id === action.payload.post._id
        );
        if (index !== -1) {
          state.posts[index] = action.payload.post;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to update post";
      })

      // Delete Post
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.filter(
          (post) => post._id !== action.meta.arg
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to delete post";
      })

      // Toggle Post Status
      .addCase(togglePostStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(togglePostStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.posts.findIndex(
          (post) => post._id === action.payload.post._id
        );
        if (index !== -1) {
          state.posts[index] = action.payload.post;
        }
      })
      .addCase(togglePostStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to update post status";
      })

      // Get Post Stats
      .addCase(getPostStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload.stats;
      })
      .addCase(getPostStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch post statistics";
      })

      // Like Post
      .addCase(likePost.pending, (state) => {
        state.error = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        // Update the likes count in the posts array if needed
      })
      .addCase(likePost.rejected, (state, action) => {
        state.error = action.payload?.message || "Failed to like post";
      });
  },
});

export default postSlice.reducer;
