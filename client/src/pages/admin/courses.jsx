import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Trash2, Users, Calendar, Clock, Sparkles, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, deleteCourse, updateCourse } from '../../store/admin-slice';

const CoursesList = () => {
  const [filter, setFilter] = useState('all');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    category: '',
    type: 'recorded',
    rating: 0,
    sales: 0,
    price: 0,
    description: '',
    image: '',
    bestSeller: false
  });
  
  const dispatch = useDispatch();
  const location = useLocation();
  
  const { courses, isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  // Handle navigation from dashboard with editCourseId
  useEffect(() => {
    if (location.state?.editCourseId && courses.length > 0) {
      const courseToEdit = courses.find(c => c._id === location.state.editCourseId);
      if (courseToEdit) {
        handleEdit(courseToEdit);
      }
    }
  }, [location.state, courses]);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title || '',
      instructor: course.instructor || '',
      category: course.category || '',
      type: course.type || 'recorded',
      rating: course.rating || 0,
      sales: course.sales || 0,
      price: course.price || 0,
      description: course.description || '',
      image: course.image || '',
      bestSeller: course.bestSeller || false
    });
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setEditingCourse(null);
    setFormData({
      title: '',
      instructor: '',
      category: '',
      type: 'recorded',
      rating: 0,
      sales: 0,
      price: 0,
      description: '',
      image: '',
      bestSeller: false
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!editingCourse) return;

    const result = await dispatch(updateCourse({ 
      id: editingCourse._id, 
      courseData: formData 
    }));
    
    if (result.payload?.success) {
      toast.success('Course updated successfully!');
      handleCloseModal();
      dispatch(getAllCourses());
    } else {
      toast.error(result.payload?.message || 'Failed to update course');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const result = await dispatch(deleteCourse(id));
      if (result.payload?.success) {
        toast.success('Course deleted successfully!');
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
        <div className="flex items-center gap-6 text-white">
          <Link to="/admin/dashboard" className="p-3 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Manage Courses</h1>
            </div>
            <p className="text-white/90 text-lg">Edit or remove existing courses</p>
          </div>
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
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(course._id)}
                          className="p-3 hover:bg-red-50 text-red-600 rounded-xl transition-all hover:shadow-md"
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

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-br from-[#6EC59B] to-[#40B47C] text-white p-6 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Edit className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Edit Course</h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Course Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Instructor and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Instructor <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Type and Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Course Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    required
                  >
                    <option value="recorded">📹 Recorded</option>
                    <option value="live">🎥 Live Workshop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Rating and Sales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Rating (0-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Sales Count
                  </label>
                  <input
                    type="number"
                    name="sales"
                    value={formData.sales}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                    min="0"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#40B47C] focus:outline-none transition-colors resize-none"
                  placeholder="Course description..."
                />
              </div>

              {/* Best Seller Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="bestSeller"
                  name="bestSeller"
                  checked={formData.bestSeller}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#40B47C] border-2 border-gray-300 rounded focus:ring-[#40B47C]"
                />
                <label htmlFor="bestSeller" className="text-sm font-bold text-gray-700 cursor-pointer">
                  ⭐ Mark as Best Seller
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#6EC59B] to-[#40B47C] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Update Course
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesList;
