import { deletePost, getAllPosts } from '@/store/post-slice';
import React, { useEffect, useState } from 'react';
import { FiCameraOff } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';

const BlogSection = () => {

  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  


  return (

    <section className="py-16 font-poppins">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className='w-full m-6'>
            {/* <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Insights & Inspiration</p> */}
            <h2 className=" text-4xl md:text-5xl font-bold text-primary_nav text-center">
              Lets Discover Our Blog Post <br /> And News Content.
            </h2>
          </div>
        </div>

        {
          posts==null || posts.length==0 ? (
            <div className='w-full flex flex-col items-center justify-center gap-3'>
                <FiCameraOff className='w-full text-[7rem] font-medium'/>
                <h2 className=" text-4xl md:text-5xl font-bold text-primary text-center">
                  No posts yet !
                </h2>
            </div>
          ):(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded" />
                  </div>
                  <div className="p-5">
                    <h2 className='lg:text-[1.6rem] md:text-[1.3rem] sm:text-[1.2rem] text-[1rem] font-semibold text-primary_nav text-start'>
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-3">by {post.author}</p>
                    <p className="text-gray-700 lg:text-[1rem] md:text-[.9rem] sm:text-[.8rem] text-[.7rem] mb-4 line-clamp-3">{post.content}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                      <span>Posted on: {new Date(post.metadata?.created_at).toLocaleDateString()}</span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
        
      </div>
    </section>
  );
};

export default BlogSection;