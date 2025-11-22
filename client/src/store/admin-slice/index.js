import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  courses: [],
  stats: {
    total: 0,
    recorded: 0,
    live: 0,
    bestSellers: 0,
    active: 0,
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
      });
  },
});

export const { clearError } = adminSlice.actions;

export default adminSlice.reducer;
