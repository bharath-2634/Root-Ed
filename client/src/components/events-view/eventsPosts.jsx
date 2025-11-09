import { deletePost, getAllPosts } from '@/store/post-slice';
import React, { useEffect, useState } from 'react';
import { FiCameraOff } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";
import no_data_found from "../../assets/no_data_found.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BlogSection = () => {

  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (

    <section className="py-16 font-poppins -mb-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className='w-full m-6'>
         
            <h2 className='lg:text-[2.6rem] md:text-[2.1rem] sm:text-[1.8rem] text-[1.8rem] font-bold text-primary_nav text-center mt-10'>Lets Discover Our Blog Post <br /> And News Content.</h2>
          </div>
        </div>

        {
          posts==null || posts.length==0 ? (
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="py-16 sm:py-20 lg:py-24 bg-white -mt-12"
            >
            <div className='w-full flex flex-col items-center justify-center gap-3'>
                {/* <FiCameraOff className='w-full text-[7rem] font-medium'/>
                <h2 className=" text-4xl md:text-5xl font-bold text-primary text-center">
                  No posts yet !
                </h2> */}
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center relative'>
                      <motion.img  
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          src={no_data_found} 
                          alt="Global learning network visualization" 
                          className='lg:w-[80%] md:w-[60%] sm:w-[60%] w-[70%] h-auto object-contain rounded-3xl'
                          onError={(e) => e.target.style.display='none'}
                      />
                      <p className='lg:text-lg md:text-[1.1rem] text-gray-600 leading-relaxed lg:p-6 md:p-6 sm:pl-12 sm:pr-12 w-full text-center'>
                        We have not posted annything yet ! Keep Looking     
                      </p>
                      
                  </div>
            </div>
            </motion.section>
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