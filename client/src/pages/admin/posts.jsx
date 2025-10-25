import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Trash2, Eye, Heart, Calendar, Sparkles, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, deletePost, createPost, updatePost, getPostStats } from '../../store/post-slice';
import AddPostDialog from '../../components/admin-view/AddPostDialog';

const PostsList = () => {
  const [filter, setFilter] = useState('all');
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  
  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // Check if we're coming from dashboard with edit data
  useEffect(() => {
    if (location.state?.editPost) {
      handleEdit(location.state.editPost);
      // Clear the location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleAddPost = async (newPost) => {
    if (isEditMode && editingPost) {
      // Update existing post
      const result = await dispatch(updatePost({ id: editingPost._id, postData: newPost }));
      if (result.payload?.success) {
        setIsAddPostOpen(false);
        setIsEditMode(false);
        setEditingPost(null);
        toast.success('Post updated successfully!');
        dispatch(getPostStats());
      } else {
        toast.error(result.payload?.message || 'Failed to update post');
      }
    } else {
      // Create new post
      const result = await dispatch(createPost(newPost));
      if (result.payload?.success) {
        setIsAddPostOpen(false);
        toast.success('Post published successfully!');
        dispatch(getPostStats());
      } else {
        toast.error(result.payload?.message || 'Failed to publish post');
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsEditMode(true);
    setIsAddPostOpen(true);
  };

  const handleCloseDialog = () => {
    setIsAddPostOpen(false);
    setIsEditMode(false);
    setEditingPost(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const result = await dispatch(deletePost(id));
      if (result.payload?.success) {
        toast.success('Post deleted successfully!');
        dispatch(getPostStats());
      } else {
        toast.error(result.payload?.message || 'Failed to delete post');
      }
    }
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      achievement: '🏆',
      event: '📅',
      announcement: '📢',
      milestone: '🎯',
      other: '🏷️'
    };
    return emojis[category] || '📝';
  };

  const getCategoryColor = (category) => {
    const colors = {
      achievement: 'bg-yellow-100 text-yellow-800',
      event: 'bg-blue-100 text-blue-800',
      announcement: 'bg-purple-100 text-purple-800',
      milestone: 'bg-green-100 text-green-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.category === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Manage Posts</h1>
              </div>
              <p className="text-white/90 text-lg">Add, edit, or remove posts</p>
            </div>
          </div>
          <button
            onClick={() => setIsAddPostOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#131D2D] rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add Post
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
          All Posts ({posts.length})
        </button>
        <button
          onClick={() => setFilter('achievement')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'achievement' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          🏆 Achievements ({posts.filter(p => p.category === 'achievement').length})
        </button>
        <button
          onClick={() => setFilter('event')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'event' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          📅 Events ({posts.filter(p => p.category === 'event').length})
        </button>
        <button
          onClick={() => setFilter('announcement')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'announcement' 
              ? 'bg-[#40B47C] text-white shadow-lg -translate-y-0.5' 
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#40B47C] hover:text-[#40B47C]'
          }`}
        >
          📢 Announcements ({posts.filter(p => p.category === 'announcement').length})
        </button>
      </div>

      {/* Posts Table */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8 overflow-hidden">
        {isLoading ? (
          <div className="text-center py-16">
            <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
              <Sparkles className="w-16 h-16 text-gray-400 animate-pulse" />
            </div>
            <p className="text-gray-600 text-lg">Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No posts found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-100">
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">IMAGE</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">TITLE</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">CATEGORY</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">DATE</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">ENGAGEMENT</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">STATUS</th>
                  <th className="text-left p-6 font-bold text-gray-700 text-sm">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr 
                    key={post._id} 
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {/* Image */}
                    <td className="p-6">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                        <img 
                          src={post.image || 'https://via.placeholder.com/100'} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    {/* Title */}
                    <td className="p-6">
                      <div className="max-w-xs">
                        <p className="font-semibold text-[#131D2D] text-sm mb-1 line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {post.description}
                        </p>
                        {post.featured && (
                          <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-6">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {getCategoryEmoji(post.category)} {post.category}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.createdAt)}
                      </div>
                    </td>

                    {/* Engagement */}
                    <td className="p-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Eye className="w-4 h-4" />
                          <span>{post.views || 0} views</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes || 0} likes</span>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="p-6">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800'
                          : post.status === 'draft'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-6">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(post)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit Post"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(post._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Post"
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

      {/* Add Post Dialog */}
      <AddPostDialog
        isOpen={isAddPostOpen}
        onClose={handleCloseDialog}
        onAdd={handleAddPost}
        editMode={isEditMode}
        postData={editingPost}
      />
    </div>
  );
};

export default PostsList;
