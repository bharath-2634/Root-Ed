import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, Video, Users, TrendingUp, Sparkles, Edit, Trash2, MoreVertical, FileText, Eye, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getCourseStats, deleteCourse, getAllPosts, getPostStats, deletePost } from '../../store/admin-slice';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const { courses, stats, posts, postStats, isLoading } = useSelector((state) => state.admin);

  // Fetch courses and posts on component mount
  useEffect(() => {
    dispatch(getAllCourses({ status: 'active' }));
    dispatch(getCourseStats());
    dispatch(getAllPosts({ status: 'published' }));
    dispatch(getPostStats());
  }, [dispatch]);

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const result = await dispatch(deleteCourse(id));
      if (result.payload?.success) {
        toast.success('Course deleted successfully!');
        dispatch(getCourseStats()); // Refresh stats
      } else {
        toast.error(result.payload?.message || 'Failed to delete course');
      }
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const result = await dispatch(deletePost(id));
      if (result.payload?.success) {
        toast.success('Post deleted successfully!');
        dispatch(getPostStats()); // Refresh stats
      } else {
        toast.error(result.payload?.message || 'Failed to delete post');
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-3 gap-8 font-poppins">
      {/* Header Section with gradient background */}
      <div className="w-[90%] bg-gradient-to-br from-[#6EC59B] to-[#40B47C] rounded-3xl p-8 md:p-12 shadow-2xl mt-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-white/90 text-lg md:text-xl">
              Manage courses, posts, and content
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/admin/courses"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#131D2D] rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-base whitespace-nowrap"
            >
              <BookOpen className="w-5 h-5" />
              Manage Courses
            </Link>
            <Link
              to="/admin/posts"
              className="flex items-center gap-2 px-6 py-3 bg-[#131D2D] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-base whitespace-nowrap"
            >
              <FileText className="w-5 h-5" />
              Manage Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Total Courses</h3>
            <div className="p-3 bg-blue-50 rounded-full">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{stats.total}</p>
          <p className="text-sm text-gray-500 mt-2">All courses</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Recorded Classes</h3>
            <div className="p-3 bg-green-50 rounded-full">
              <Video className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{stats.recorded}</p>
          <p className="text-sm text-gray-500 mt-2">Pre-recorded content</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Live Workshops</h3>
            <div className="p-3 bg-purple-50 rounded-full">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{stats.live}</p>
          <p className="text-sm text-gray-500 mt-2">Interactive sessions</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

      {/* Course Management Section */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl">
        <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">Course Management</h2>
          <Link 
            to="/admin/courses" 
            className="text-[#40B47C] hover:text-[#6EC59B] font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="p-6 md:p-8">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
                <BookOpen className="w-16 h-16 text-gray-400 animate-pulse" />
              </div>
              <p className="text-gray-600 text-lg">Loading courses...</p>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
                <BookOpen className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg mb-6">No courses added yet</p>
              <Link
                to="/admin/courses"
                className="inline-block px-8 py-4 bg-[#40B47C] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                Manage Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course._id} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    {course.image ? (
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-3 py-1.5 bg-white rounded-full text-xs font-semibold shadow-md">
                      {course.type === 'recorded' ? '📹 Recorded' : '🎥 Live'}
                    </span>
                    {course.bestSeller && (
                      <span className="absolute top-3 right-3 px-3 py-1.5 bg-[#40B47C] text-white rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                        ⭐ Best Seller
                      </span>
                    )}
                    
                    {/* Action buttons on hover */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link 
                        to="/admin/courses"
                        state={{ editCourse: course }}
                        className="p-2 bg-white hover:bg-blue-50 text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                        title="Edit course"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => handleDeleteCourse(course._id)}
                        className="p-2 bg-white hover:bg-red-50 text-red-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                        title="Delete course"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#131D2D]">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">- {course.instructor}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <span className="text-orange-500 text-lg">⭐</span>
                        <span className="text-sm font-bold text-[#131D2D]">{course.rating}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">+{course.sales} sales</span>
                      <button className="text-sm text-[#40B47C] font-semibold hover:text-[#6EC59B] transition-colors">
                        learn more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Post Stats Cards */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Total Posts</h3>
            <div className="p-3 bg-indigo-50 rounded-full">
              <FileText className="w-6 h-6 text-indigo-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{postStats.total}</p>
          <p className="text-sm text-gray-500 mt-2">All posts</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Published</h3>
            <div className="p-3 bg-green-50 rounded-full">
              <MessageSquare className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{postStats.published}</p>
          <p className="text-sm text-gray-500 mt-2">Live posts</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Total Views</h3>
            <div className="p-3 bg-blue-50 rounded-full">
              <Eye className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{postStats.totalViews}</p>
          <p className="text-sm text-gray-500 mt-2">Post views</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Featured Posts</h3>
            <div className="p-3 bg-yellow-50 rounded-full">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#131D2D]">{postStats.featured}</p>
          <p className="text-sm text-gray-500 mt-2">Highlighted posts</p>
        </div>
      </div>

      {/* Post Management Section */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8">
        <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">Post Management</h2>
          <Link 
            to="/admin/posts" 
            className="text-[#40B47C] hover:text-[#6EC59B] font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="p-6 md:p-8">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
                <FileText className="w-16 h-16 text-gray-400 animate-pulse" />
              </div>
              <p className="text-gray-600 text-lg">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
                <FileText className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg mb-6">No posts published yet</p>
              <Link
                to="/admin/posts"
                className="inline-block px-8 py-4 bg-[#40B47C] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                Manage Posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <div key={post._id} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md ${
                      post.category === 'achievement' ? 'bg-yellow-100 text-yellow-800' :
                      post.category === 'event' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'announcement' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'milestone' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category === 'achievement' && '🏆'} 
                      {post.category === 'event' && '📅'} 
                      {post.category === 'announcement' && '📢'} 
                      {post.category === 'milestone' && '🎯'} 
                      {post.category === 'other' && '🏷️'} 
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="absolute top-3 right-3 px-3 py-1.5 bg-[#40B47C] text-white rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                        ⭐ Featured
                      </span>
                    )}
                    
                    {/* Action buttons on hover */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link 
                        to="/admin/posts"
                        state={{ editPost: post }}
                        className="p-2 bg-white hover:bg-blue-50 text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                        title="Edit post"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => handleDeletePost(post._id)}
                        className="p-2 bg-white hover:bg-red-50 text-red-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                        title="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#131D2D]">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          ❤️ {post.likes || 0}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        post.status === 'published' ? 'bg-green-100 text-green-800' :
                        post.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
