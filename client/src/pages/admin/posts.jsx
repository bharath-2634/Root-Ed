import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, deletePost } from '@/store/post-slice'; // make sure deletePost exists
import { Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-toastify';

const PostsDashboard = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const result = await dispatch(deletePost(id));
      if (result.payload?.success) {
        toast.success('Post deleted successfully!');
        dispatch(getAllPosts()); // refresh list
      } else {
        toast.error(result.payload?.message || 'Failed to delete post');
      }
    }
  };

  return (
    <div className="w-[90%] bg-white rounded-3xl mb-8 p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#131D2D] mb-6">All Posts</h2>

      {/* Loading State */}
      {isLoading ? (
        <div className="text-center py-16">
          <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
            <ImageIcon className="w-16 h-16 text-gray-400 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg">Loading posts...</p>
        </div>
      ) : error ? (
        <div className="text-center py-16 text-red-500 text-lg">
          Failed to load posts: {error}
        </div>
      ) : posts?.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-flex p-6 bg-gray-50 rounded-full mb-6">
            <ImageIcon className="w-16 h-16 text-gray-400" />
          </div>
          <p className="text-gray-600 text-lg mb-6">No posts available yet</p>
        </div>
      ) : (
        // Posts Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="aspect-video bg-gray-100 relative">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                  </div>
                )}

                {/* Action buttons on hover */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toast.info('Edit post functionality coming soon!')}
                    className="p-2 bg-white hover:bg-blue-50 text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                    title="Edit post"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="p-2 bg-white hover:bg-red-50 text-red-600 rounded-lg shadow-md hover:shadow-lg transition-all"
                    title="Delete post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#131D2D]">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">by {post.author}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.content}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <span>Created: {new Date(post.metadata?.created_at).toLocaleDateString()}</span>
                  <span>Updated: {new Date(post.metadata?.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsDashboard;
