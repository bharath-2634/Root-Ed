import React from 'react'
import storyImage from "../../assets/intro_aboutUs_home.png"
import { motion } from "framer-motion";

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

const OurStory = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white"
    >
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 font-poppins'>
        <div className='max-w-7xl mx-auto'>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-between '>
            
            {/* Left Content */}
            <div className='space-y-6 '>

              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary_nav text-center md:text-left'>
                Gateway To <span className='text-primary'>Personal </span>
                And Professional 
                <span className='text-primary'> Growth</span>
              </h2>
              
              <p className='text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-justify'>
               Rooted is an STEAM education company offering enrichment programs for students from kindergarten through grade 12 in cutting-edge scientific fields. Our instructional methods integrate art-based activities to encourage critical thinking and enhance comprehension. 
              </p>
            
            </div>

            {/* Right Image */}
            <div className='relative flex items-center justify-center lg:justify-end w-full'>
              <div className='relative w-full'>
                {/* Background decorative circle */}
                <div className='absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl hidden md:block'></div>
                <div className='absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl hidden md:block'></div>

                {/* Main Image - limit max width so it aligns with text */}
                <div className='relative z-10 flex w-full justify-center lg:justify-end'>
                  <motion.img  
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      src={storyImage} 
                      alt="Global learning network visualization" 
                      className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-3xl"
                      onError={(e) => e.target.style.display='none'}
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Stats Section */}
          {/* <div className='mt-16 lg:mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
              
              
              <div className='text-center space-y-2'>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                  50k+
                </h3>
                <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                  Learners Worldwide
                </p>
              </div>

             
              <div className='text-center space-y-2'>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                  120+
                </h3>
                <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                  Courses in Countries
                </p>
              </div>

             
              <div className='text-center space-y-2'>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                  300+
                </h3>
                <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                  Industry-Relevant Courses
                </p>
              </div>

              <div className='text-center space-y-2'>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                  98%
                </h3>
                <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                  Learner Satisfaction Rate
                </p>
              </div>

            </div>
          </div> */}

        </div>
      </section>
    </motion.section>
  )
}

export default OurStory
