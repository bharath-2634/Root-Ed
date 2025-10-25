import React, { useState, useEffect } from 'react';
import { X, Upload, Star, Calendar, Award, Bell, Trophy, Tag } from 'lucide-react';

const AddPostDialog = ({ isOpen, onClose, onAdd, editMode = false, postData = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: 'achievement',
    tags: '',
    featured: false,
  });

  // Load post data when in edit mode
  useEffect(() => {
    if (editMode && postData) {
      setFormData({
        title: postData.title || '',
        description: postData.description || '',
        image: postData.image || '',
        category: postData.category || 'achievement',
        tags: Array.isArray(postData.tags) ? postData.tags.join(', ') : '',
        featured: postData.featured || false,
      });
    } else if (!isOpen) {
      // Reset form when dialog closes
      setFormData({
        title: '',
        description: '',
        image: '',
        category: 'achievement',
        tags: '',
        featured: false,
      });
    }
  }, [editMode, postData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert tags string to array
    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    onAdd({ 
      ...formData, 
      tags: tagsArray 
    });
  };

  if (!isOpen) return null;

  const categoryIcons = {
    achievement: <Trophy className="w-5 h-5" />,
    event: <Calendar className="w-5 h-5" />,
    announcement: <Bell className="w-5 h-5" />,
    milestone: <Award className="w-5 h-5" />,
    other: <Tag className="w-5 h-5" />,
  };

  const categories = [
    { value: 'achievement', label: '🏆 Achievement', description: 'Accomplishments & awards' },
    { value: 'event', label: '📅 Event', description: 'Upcoming or past events' },
    { value: 'announcement', label: '📢 Announcement', description: 'Important updates' },
    { value: 'milestone', label: '🎯 Milestone', description: 'Major milestones reached' },
    { value: 'other', label: '🏷️ Other', description: 'General posts' },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-poppins">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 sticky top-0 bg-white rounded-t-3xl z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D]">
              {editMode ? 'Edit Post' : 'Add New Post'}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {editMode ? 'Update your post details' : 'Share your recent achievements and updates'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          {/* Category Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Post Category *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat.value })}
                  className={`p-4 border-2 rounded-xl text-left transition-all hover:shadow-md ${
                    formData.category === cat.value
                      ? 'border-[#40B47C] bg-[#40B47C]/5 shadow-md'
                      : 'border-gray-200 hover:border-[#40B47C]/50'
                  }`}
                >
                  <div className="font-semibold text-sm mb-0.5 text-[#131D2D]">{cat.label}</div>
                  <div className="text-xs text-gray-600">{cat.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Post Title */}
          <div className="space-y-3">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700">
              Post Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Students Won National Coding Competition 2025"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Share the details of this achievement or event. What happened? Why is it significant? Include key highlights and context..."
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent resize-none transition-all"
            />
            <p className="text-xs text-gray-500">
              Provide a comprehensive description to engage your audience
            </p>
          </div>

          {/* Post Image URL */}
          <div className="space-y-3">
            <label htmlFor="image" className="text-sm font-semibold text-gray-700">
              Image URL *
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                title="Upload Image"
              >
                <Upload className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Add a high-quality image that represents your achievement or event
            </p>
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Image Preview</label>
              <div className="relative w-full h-64 rounded-xl overflow-hidden border-2 border-gray-200">
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                  }}
                />
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-3">
            <label htmlFor="tags" className="text-sm font-semibold text-gray-700">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g., competition, coding, students, achievement"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-500">
              Separate tags with commas to help categorize your post
            </p>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 text-[#40B47C] focus:ring-[#40B47C]"
            />
            <label htmlFor="featured" className="text-sm font-semibold text-gray-700 flex items-center gap-2 cursor-pointer">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              Mark as Featured Post
              <span className="text-xs font-normal text-gray-600 ml-2">
                (Will be highlighted on the homepage)
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
              {editMode ? 'Update Post' : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostDialog;
