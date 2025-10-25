import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Trash2, Users, Calendar, Clock, Sparkles, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, deleteCourse, createCourse, updateCourse, getCourseStats } from '../../store/admin-slice';
import AddCourseDialog from '../../components/admin-view/AddCourseDialog';

const CoursesList = () => {
  const [filter, setFilter] = useState('all');
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  
  const { courses, isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  // Check if we're coming from dashboard with edit data
  useEffect(() => {
    if (location.state?.editCourse) {
      handleEdit(location.state.editCourse);
      // Clear the location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleAddCourse = async (newCourse) => {
    if (isEditMode && editingCourse) {
      // Update existing course
      const result = await dispatch(updateCourse({ id: editingCourse._id, courseData: newCourse }));
      if (result.payload?.success) {
        setIsAddCourseOpen(false);
        setIsEditMode(false);
        setEditingCourse(null);
        toast.success('Course updated successfully!');
        dispatch(getCourseStats());
      } else {
        toast.error(result.payload?.message || 'Failed to update course');
      }
    } else {
      // Create new course
      const result = await dispatch(createCourse(newCourse));
      if (result.payload?.success) {
        setIsAddCourseOpen(false);
        toast.success('Course added successfully!');
        dispatch(getCourseStats());
      } else {
        toast.error(result.payload?.message || 'Failed to add course');
      }
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsEditMode(true);
    setIsAddCourseOpen(true);
  };

  const handleCloseDialog = () => {
    setIsAddCourseOpen(false);
    setIsEditMode(false);
    setEditingCourse(null);
  };

  const handleDelete = async (id) => {
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

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.type === filter);

  return (
    <div className="w-full flex flex-col items-center justify-center p-3 gap-8 font-poppins">
      {/* Header */}
      <div className="w-[90%] bg-gradient-to-br from-[#6EC59B] to-[#40B47C] rounded-3xl p-8 md:p-12 shadow-2xl mt-6">
        <div className="flex items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-6">
            <Link to="/admin/dashboard" className="p-3 hover:bg-white/20 rounded-full transition-all">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-8 h-8" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Manage Courses</h1>
              </div>
              <p className="text-white/90 text-lg">Add, edit, or remove courses</p>
            </div>
          </div>
          <button
            onClick={() => setIsAddCourseOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#131D2D] rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add Course
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="w-[90%] flex flex-wrap gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'all' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          All Courses ({courses.length})
        </button>
        <button
          onClick={() => setFilter('recorded')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'recorded' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          📹 Recorded ({courses.filter(c => c.type === 'recorded').length})
        </button>
        <button
          onClick={() => setFilter('live')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'live' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          🎥 Live Workshops ({courses.filter(c => c.type === 'live').length})
        </button>
      </div>

      {/* Courses Table */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8 overflow-hidden">
        {isLoading ? (
          <div className="text-center py-16">
            <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
              <Sparkles className="w-16 h-16 text-gray-400 animate-pulse" />
            </div>
            <p className="text-gray-600 text-lg">Loading courses...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No courses found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#6EC59B] to-[#40B47C]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCourses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                          {course.image ? (
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-3xl">📚</span>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-[#131D2D] mb-1">{course.title}</div>
                          <div className="text-sm text-gray-600">{course.category}</div>
                          {course.bestSeller && (
                            <span className="inline-block mt-2 px-3 py-1 bg-[#40B47C] text-white text-xs font-semibold rounded-full">
                              ⭐ Best Seller
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                        course.type === 'recorded' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {course.type === 'recorded' ? '📹 Recorded' : '🎥 Live'}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-[#131D2D]">{course.instructor}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <span className="text-orange-500 text-lg">⭐</span>
                        <span className="text-sm font-bold text-[#131D2D]">{course.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-gray-600">+{course.sales}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleEdit(course)}
                          className="p-3 hover:bg-blue-50 text-blue-600 rounded-xl transition-all hover:shadow-md"
                          title="Edit course"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(course._id)}
                          className="p-3 hover:bg-red-50 text-red-600 rounded-xl transition-all hover:shadow-md"
                          title="Delete course"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Course Dialog */}
      <AddCourseDialog
        isOpen={isAddCourseOpen}
        onClose={handleCloseDialog}
        onAdd={handleAddCourse}
        editMode={isEditMode}
        courseData={editingCourse}
      />
    </div>
  );
};

export default CoursesList;
