import React from 'react'
import intro_img from "../../assets/intro_img.jpg"
import { ArrowRight, Users, Check } from 'lucide-react';
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

const EducationSystemIntro = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 sm:py-20 lg:py-24 bg-white -mt-12"
    >
        <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-24 font-poppins'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row  items-start justify-between gap-12 lg:gap-20'>
                    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center relative'>
                        <motion.img  
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={intro_img} 
                            alt="Global learning network visualization" 
                            className='lg:w-[80%] md:w-[60%] sm:w-[60%] w-[70%] h-auto object-contain rounded-3xl'
                            onError={(e) => e.target.style.display='none'}
                        />
                    </div>

                    <div className='w-full lg:w-1/2  lg:pt-0 font-poppins flex flex-col items-center justify-center gap-3'>
                        <h2 className='lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2.2rem] text-[1.5rem] font-semibold text-primary lg:text-start mb-5 
                        lg:-ml-[1.6rem] md:-ml-[1rem] sm:ml-[1rem] lg:mt-0 md:-mt-10 sm:mt-0'>Our Education System <br /><span className='text-primary_nav lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2.2rem] text-[1.8rem]'>Inspires</span> you more</h2>

                        <p className='lg:text-lg md:text-[1.1rem] text-gray-600 leading-relaxed lg:p-6 md:p-6 sm:pl-12 sm:pr-12'>
                            We believe learning should spark creativity, not memorization. Our <span className='text-primary'> STEM-based approach</span> connects science, technology, engineering, and math to real-world applications.
                            We empower students to <span className='text-primary'>think</span>, <span className='text-primary'>create</span>, and <span className='text-primary'>lead</span> with confidence.
                        </p>

                        {/* Paragraph 2 */}
                        {/* <p className='text-lg text-gray-600  leading-relaxed p-4'>
                            We empower students to <span className='text-primary'>think</span>, <span className='text-primary'>create</span>, and <span className='text-primary'>lead</span> with confidence.
                        </p> */}
                        
                        {/* CTA Button */}
                        <button
                            className="
                              lg:self-start flex items-center justify-center
                              px-4 py-4 sm:px-4 sm:py-4 md:px-4 md:py-4 
                              bg-primary text-white
                              text-sm sm:text-[0.9rem] md:text-[1rem]
                              rounded shadow-xl
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-1 hover:shadow-2xl sm:-ml-6 lg:ml-6 md:ml-6 mt-10
                            "
                          >
                            Start now
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 text-white" />
                          </button>
                    </div>
                </div>
            </div>
        </section>
    </motion.section>
    
  )
}

export default EducationSystemIntro
