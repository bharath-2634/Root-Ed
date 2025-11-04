import React, { useState, useEffect } from 'react';
import {
  Plus, BookOpen, Video, Users, TrendingUp, Edit, Trash2,
} from 'lucide-react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCourse, getAllCourses, getCourseStats, deleteCourse,
} from '../../store/admin-slice';
import AddCourseDialog from '../../components/admin-view/AddCourseDialog';
import AddPostDialog from '@/components/admin-view/AddPostDialog';
import { addPost } from '@/store/post-slice';
import PostsDashboard from './posts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [openPostDia, setOpenPostDia] = useState(false);
  const [selectedTab, setSelectedTab] = useState('course'); // 👈 navigation state

  const { courses, stats, isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllCourses({ status: 'active' }));
    dispatch(getCourseStats());
  }, [dispatch]);

  // --- course handlers ---
  const handleAddCourse = async (newCourse) => {
    const result = await dispatch(createCourse(newCourse));
    if (result.payload?.success) {
      setIsAddCourseOpen(false);
      toast.success('Course added successfully!');
      dispatch(getCourseStats());
    } else {
      toast.error(result.payload?.message || 'Failed to add course');
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const result = await dispatch(deleteCourse(id));
      if (result.payload?.success) {
        toast.success('Course deleted successfully!');
        dispatch(getCourseStats());
      } else {
        toast.error(result.payload?.message || 'Failed to delete course');
      }
    }
  };

  // --- post handlers ---
  const handleAddPost = async (newPost) => {
    const result = await dispatch(addPost(newPost));
    if (result.payload?.success) {
      setOpenPostDia(false);
      toast.success('Post added successfully!');
    } else {
      toast.error(result.payload?.message || 'Failed to add post');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-0 gap-8 font-poppins">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center gap-3 p-4 md:p-12 mt-6">
        <h2 className="text-xl md:text-2xl font-medium text-primary_nav text-center">
          Operations that you can perform
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-[60%] p-4 rounded">
          <button
            onClick={() => setIsAddCourseOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-primary_nav text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
          >
            <Plus className="w-6 h-6" />
            Add Course
          </button>
          <button
            onClick={() => setOpenPostDia(true)}
            className="flex items-center gap-2 px-4 py-3 bg-primary_nav text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
          >
            <Plus className="w-6 h-6" />
            Add Post
          </button>
        </div>
      </div>

      {/* 👇 Internal Navigation Tabs */}
      <div className="w-[90%] flex justify-center border-b border-gray-200">
        <button
          onClick={() => setSelectedTab('course')}
          className={`px-6 py-3 font-semibold text-md transition-all duration-300 ${
            selectedTab === 'course'
              ? 'text-primary_nav border-b-4 border-primary_nav'
              : 'text-gray-500 hover:text-primary_nav'
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => setSelectedTab('posts')}
          className={`px-6 py-3 font-semibold text-md transition-all duration-300 ${
            selectedTab === 'posts'
              ? 'text-primary_nav border-b-4 border-primary_nav'
              : 'text-gray-500 hover:text-primary_nav'
          }`}
        >
          Posts
        </button>
      </div>

      {/* 👇 Conditionally render sections */}
      {selectedTab === 'course' ? (
        <>
          {/* Stats Cards */}
          <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Total Courses</h3>
                <div className="p-3 bg-blue-50 rounded-full">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <p className="text-4xl font-bold text-[#131D2D]">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-2">All courses</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Recorded Classes</h3>
                <div className="p-3 bg-green-50 rounded-full">
                  <Video className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <p className="text-4xl font-bold text-[#131D2D]">{stats.recorded}</p>
              <p className="text-sm text-gray-500 mt-2">Pre-recorded content</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Live Workshops</h3>
                <div className="p-3 bg-purple-50 rounded-full">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <p className="text-4xl font-bold text-[#131D2D]">{stats.live}</p>
              <p className="text-sm text-gray-500 mt-2">Interactive sessions</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600">Best Sellers</h3>
                <div className="p-3 bg-orange-50 rounded-full">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <p className="text-4xl font-bold text-[#131D2D]">{stats.bestSellers}</p>
              <p className="text-sm text-gray-500 mt-2">Top performing courses</p>
            </div>
          </div>

          {/* Courses List */}
          <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8">
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">All Courses</h2>
            </div>
            <div className="p-6 md:p-8">
              {isLoading ? (
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-gray-400 animate-pulse mx-auto mb-6" />
                  <p className="text-gray-600 text-lg">Loading courses...</p>
                </div>
              ) : courses.length === 0 ? (
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <p className="text-gray-600 text-lg mb-6">No courses added yet</p>
                  <button
                    onClick={() => setIsAddCourseOpen(true)}
                    className="px-8 py-4 bg-[#40B47C] text-white rounded-full hover:shadow-xl transition-all font-semibold"
                  >
                    Add Your First Course
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <div
                      key={course._id}
                      className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all relative group"
                    >
                      <div className="aspect-video bg-gray-100 relative">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <BookOpen className="w-16 h-16 text-gray-400 absolute inset-0 m-auto" />
                        )}
                        <span className="absolute top-3 left-3 px-3 py-1.5 bg-white rounded-full text-xs font-semibold shadow-md">
                          {course.type === 'recorded' ? '📹 Recorded' : '🎥 Live'}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#131D2D]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">- {course.instructor}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-1">
                            <span className="text-orange-500 text-lg">⭐</span>
                            <span className="text-sm font-bold text-[#131D2D]">{course.rating}</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">
                            +{course.sales} sales
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        // 👇 Posts Section
        <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8 p-8 text-center">
          <PostsDashboard/>
        </div>
      )}

      {/* Dialogs */}
      <AddCourseDialog
        isOpen={isAddCourseOpen}
        onClose={() => setIsAddCourseOpen(false)}
        onAdd={handleAddCourse}
      />
      <AddPostDialog
        isOpen={openPostDia}
        onClose={() => setOpenPostDia(false)}
        onAdd={handleAddPost}
      />
    </div>
  );
};

export default Dashboard;
