import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import worldwide from "../../assets/worldwide_img.jpeg";

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

const WorldWideFunction = () => {
  return (
    <div className='bg-white font-poppins'>
      <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16 sm:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center gap-6 text-center ">
              <h2 className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2.2rem] text-[1.5rem] font-semibold text-primary_nav">
                Learners with <span className="text-primary mr-3">Inspiring</span> 
                journey of <span className="text-primary">learning</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover courses, learn from experts, & elevate your skills! Whether you're 
                new or expanding, there's something for everyone.
              </p>

              <div className="flex justify-center mb-8 sm:mb-12">
                <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#5BB88A] transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center gap-2 sm:gap-3">
                  Start learning
                  <FaArrowRight className="text-base sm:text-xl" />
                </button>
              </div>

              <div className="w-full">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src={worldwide} 
                  alt="Global learning network visualization" 
                  className="w-full h-auto object-contain max-w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
    </div>
  )
}

export default WorldWideFunction
