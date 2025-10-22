import React, { useState } from 'react';
import { X, Upload, Star } from 'lucide-react';

const AddCourseDialog = ({ isOpen, onClose, onAdd }) => {
  const [courseType, setCourseType] = useState('recorded');
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    rating: '4.5',
    sales: '1k',
    image: '',
    bestSeller: false,
    description: '',
    price: '',
    duration: '',
    level: 'beginner',
    category: '',
    // For live workshops
    scheduleDate: '',
    scheduleTime: '',
    maxParticipants: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, type: courseType });
    // Reset form
    setFormData({
      title: '',
      instructor: '',
      rating: '4.5',
      sales: '1k',
      image: '',
      bestSeller: false,
      description: '',
      price: '',
      duration: '',
      level: 'beginner',
      category: '',
      scheduleDate: '',
      scheduleTime: '',
      maxParticipants: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-poppins">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 sticky top-0 bg-white rounded-t-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">Add New Course</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Course Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Course Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCourseType('recorded')}
                className={`p-5 border-2 rounded-2xl text-left transition-all hover:shadow-lg ${
                  courseType === 'recorded'
                    ? 'border-[#40B47C] bg-[#40B47C]/5 shadow-md'
                    : 'border-gray-200 hover:border-[#40B47C]/50'
                }`}
              >
                <div className="font-bold text-lg mb-1 text-[#131D2D]">📹 Recorded Class</div>
                <div className="text-sm text-gray-600">Pre-recorded video content</div>
              </button>
              <button
                type="button"
                onClick={() => setCourseType('live')}
                className={`p-5 border-2 rounded-2xl text-left transition-all hover:shadow-lg ${
                  courseType === 'live'
                    ? 'border-[#40B47C] bg-[#40B47C]/5 shadow-md'
                    : 'border-gray-200 hover:border-[#40B47C]/50'
                }`}
              >
                <div className="font-bold text-lg mb-1 text-[#131D2D]">🎥 Live Workshop</div>
                <div className="text-sm text-gray-600">Interactive live session</div>
              </button>
            </div>
          </div>

          {/* Course Title */}
          <div className="space-y-3">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700">
              Course Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., UI/UX Design Level up with Prototyping"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Instructor Name */}
          <div className="space-y-3">
            <label htmlFor="instructor" className="text-sm font-semibold text-gray-700">
              Instructor Name *
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="e.g., Bharath"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Category */}
          <div className="space-y-3">
            <label htmlFor="category" className="text-sm font-semibold text-gray-700">
              Category *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., UI/UX Design, Programming, Business"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description of the course..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent resize-none transition-all"
            />
          </div>

          {/* Row: Price & Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label htmlFor="price" className="text-sm font-semibold text-gray-700">
                Price *
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., $99 or Free"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="duration" className="text-sm font-semibold text-gray-700">
                Duration *
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 4 hours, 6 weeks"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row: Level */}
          <div className="space-y-3">
            <label htmlFor="level" className="text-sm font-semibold text-gray-700">
              Skill Level
            </label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all bg-white"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="all">All Levels</option>
            </select>
          </div>

          {/* Row: Rating & Sales */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label htmlFor="rating" className="text-sm font-semibold text-gray-700">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="e.g., 4.5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="sales" className="text-sm font-semibold text-gray-700">
                Sales/Enrollments
              </label>
              <input
                type="text"
                id="sales"
                name="sales"
                value={formData.sales}
                onChange={handleChange}
                placeholder="e.g., +1k sales"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Live Workshop Specific Fields */}
          {courseType === 'live' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label htmlFor="scheduleDate" className="text-sm font-semibold text-gray-700">
                    Schedule Date *
                  </label>
                  <input
                    type="date"
                    id="scheduleDate"
                    name="scheduleDate"
                    value={formData.scheduleDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="scheduleTime" className="text-sm font-semibold text-gray-700">
                    Schedule Time *
                  </label>
                  <input
                    type="time"
                    id="scheduleTime"
                    name="scheduleTime"
                    value={formData.scheduleTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="maxParticipants" className="text-sm font-semibold text-gray-700">
                  Max Participants
                </label>
                <input
                  type="number"
                  id="maxParticipants"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
                />
              </div>
            </>
          )}

          {/* Course Image URL */}
          <div className="space-y-3">
            <label htmlFor="image" className="text-sm font-semibold text-gray-700">
              Course Image URL
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Upload className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Best Seller Checkbox */}
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-100">
            <input
              type="checkbox"
              id="bestSeller"
              name="bestSeller"
              checked={formData.bestSeller}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 text-[#40B47C] focus:ring-[#40B47C]"
            />
            <label htmlFor="bestSeller" className="text-sm font-semibold text-gray-700 flex items-center gap-2 cursor-pointer">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              Mark as Best Seller
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#40B47C] text-white font-semibold rounded-full hover:bg-[#6EC59B] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseDialog;
