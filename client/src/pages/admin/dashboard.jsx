import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, Video, Users, TrendingUp, Sparkles, Edit, Trash2, MoreVertical } from 'lucide-react';
import AddCourseDialog from '../../components/admin-view/AddCourseDialog';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, getAllCourses, getCourseStats, deleteCourse } from '../../store/admin-slice';

const Dashboard = () => {
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const dispatch = useDispatch();
  
  const { courses, stats, isLoading } = useSelector((state) => state.admin);

  // Fetch courses on component mount
  useEffect(() => {
    dispatch(getAllCourses({ status: 'active' }));
    dispatch(getCourseStats());
  }, [dispatch]);

  const handleAddCourse = async (newCourse) => {
    const result = await dispatch(createCourse(newCourse));
    if (result.payload?.success) {
      setIsAddCourseOpen(false);
      toast.success('Course added successfully!');
      dispatch(getCourseStats()); // Refresh stats
    } else {
      toast.error(result.payload?.message || 'Failed to add course');
    }
  };

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

  return (
    <div className="w-full flex flex-col items-center justify-center p-3 gap-8 font-poppins">
      {/* Header Section with gradient background */}
      <div className="w-[90%] bg-gradient-to-br from-[#6EC59B] to-[#40B47C] rounded-3xl p-8 md:p-12 shadow-2xl mt-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Course Management</h1>
            </div>
            <p className="text-white/90 text-lg md:text-xl">
              Add and manage your recorded classes and live workshops
            </p>
          </div>
          <button
            onClick={() => setIsAddCourseOpen(true)}
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#131D2D] rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap"
          >
            <Plus className="w-6 h-6" />
            Add Course
          </button>
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

      {/* Courses List */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8">
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">All Courses</h2>
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
              <button
                onClick={() => setIsAddCourseOpen(true)}
                className="px-8 py-4 bg-[#40B47C] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                Add Your First Course
              </button>
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
                      <button 
                        onClick={() => toast.info('Edit functionality coming soon!')}
                        className="p-2 bg-white hover:bg-blue-50 text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                        title="Edit course"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
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

      {/* Add Course Dialog */}
      <AddCourseDialog
        isOpen={isAddCourseOpen}
        onClose={() => setIsAddCourseOpen(false)}
        onAdd={handleAddCourse}
      />
    </div>
  );
};

export default Dashboard;
