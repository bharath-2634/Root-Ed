import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  courses: [],
  posts: [],
  stats: {
    total: 0,
    recorded: 0,
    live: 0,
    bestSellers: 0,
    active: 0,
  },
  postStats: {
    total: 0,
    published: 0,
    draft: 0,
    featured: 0,
    totalViews: 0,
    totalLikes: 0,
  },
  error: null,
};

const API_URL = "http://localhost:5000/api/course";

// Create a new course
export const createCourse = createAsyncThunk(
  "/admin/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/create`,
        courseData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to create course" });
    }
  }
);

// Get all courses
export const getAllCourses = createAsyncThunk(
  "/admin/getAllCourses",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/all`, {
        params: filters,
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch courses" });
    }
  }
);

// Get course by ID
export const getCourseById = createAsyncThunk(
  "/admin/getCourseById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch course" });
    }
  }
);

// Update course
export const updateCourse = createAsyncThunk(
  "/admin/updateCourse",
  async ({ id, courseData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        courseData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to update course" });
    }
  }
);

// Delete course
export const deleteCourse = createAsyncThunk(
  "/admin/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        withCredentials: true,
      });
      return { ...response.data, id };
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to delete course" });
    }
  }
);

// Toggle course status
export const toggleCourseStatus = createAsyncThunk(
  "/admin/toggleCourseStatus",
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
      return rejectWithValue(error.response?.data || { message: "Failed to update status" });
    }
  }
);

// Get course statistics
export const getCourseStats = createAsyncThunk(
  "/admin/getCourseStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/stats`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch statistics" });
    }
  }
);

// ============================================
// POST MANAGEMENT THUNKS
// ============================================

const POST_API_URL = "http://localhost:5000/api/post";

// Create a new post
export const createPost = createAsyncThunk(
  "/admin/createPost",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${POST_API_URL}/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to create post" });
    }
  }
);

// Get all posts
export const getAllPosts = createAsyncThunk(
  "/admin/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${POST_API_URL}/all`, {
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
      const response = await axios.get(`${POST_API_URL}/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to fetch post" });
    }
  }
);

// Update a post
export const updatePost = createAsyncThunk(
  "/admin/updatePost",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${POST_API_URL}/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to update post" });
    }
  }
);

// Delete a post
export const deletePost = createAsyncThunk(
  "/admin/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${POST_API_URL}/${id}`, {
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
        `${POST_API_URL}/${id}/status`,
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
      const response = await axios.get(`${POST_API_URL}/stats`, {
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
      const response = await axios.post(`${POST_API_URL}/${id}/like`, {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Failed to like post" });
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Course
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.courses.unshift(action.payload.course);
        }
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to create course";
      })

      // Get All Courses
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.courses = action.payload.courses;
        }
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch courses";
      })

      // Get Course By ID
      .addCase(getCourseById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch course";
      })

      // Update Course
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          const index = state.courses.findIndex(
            (course) => course._id === action.payload.course._id
          );
          if (index !== -1) {
            state.courses[index] = action.payload.course;
          }
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to update course";
      })

      // Delete Course
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.courses = state.courses.filter(
            (course) => course._id !== action.payload.id
          );
        }
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to delete course";
      })

      // Toggle Course Status
      .addCase(toggleCourseStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleCourseStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          const index = state.courses.findIndex(
            (course) => course._id === action.payload.course._id
          );
          if (index !== -1) {
            state.courses[index] = action.payload.course;
          }
        }
      })
      .addCase(toggleCourseStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to update status";
      })

      // Get Course Stats
      .addCase(getCourseStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCourseStats.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.stats = action.payload.stats;
        }
      })
      .addCase(getCourseStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch statistics";
      })

      // ============================================
      // POST MANAGEMENT REDUCERS
      // ============================================

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
        state.postStats = action.payload.stats;
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

export const { clearError } = adminSlice.actions;

export default adminSlice.reducer;
