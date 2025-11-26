import React from 'react'
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react'
import img from "../../assets/about_carrer.jpeg"
import { useNavigate } from 'react-router-dom'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CareerAI = () => {
  const benefits = [
    { icon: <BookOpen className='w-5 h-5' />, text: 'Learn AI and more' },
    { icon: <Award className='w-5 h-5' />, text: 'Prep for a certification' },
    { icon: <Users className='w-5 h-5' />, text: 'Practice with AI coaching' },
    { icon: <TrendingUp className='w-5 h-5' />, text: 'Advance your career' }
  ]

  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 font-poppins'>
        <div className='max-w-7xl mx-auto'>
          
          <div className='bg-primary_nav rounded-3xl overflow-hidden shadow-2xl '>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 items-center justify-between'>
              
              {/* Left Content */}
              <div className='p-8 md:p-10 lg:p-12 flex flex-col justify-center'>
                <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-medium text-white mb-6 font-poppins'>
                  Reimagine your career in the AI era
                </h2>
                
                <p className='text-gray-300 text-base md:text-lg xl:text-[1.2rem] mb-8'>
                  Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
                </p>

                {/* Benefits List */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                  {benefits.map((benefit, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                        <div className='text-primary'>
                          {benefit.icon}
                        </div>
                      </div>
                      <span className='text-white text-sm md:text-base'>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className='space-y-1'>
                  <button className='bg-white hover:bg-gray-100 text-[#1a1d2e] font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-lg' onClick={()=>navigate("/main/about")}>
                    Learn more
                  </button>
                </div>
              </div>

              {/* Right Visual Content */}
              <div className='relative flex items-center justify-end w-full'>
                {/* Gradient Background */}
                <div className='w-full flex justify-end items-center'>
                  <img src={img} alt="Career AI" className='w-full h-auto hidden xl:block max-h-[550px] object-cover' />
                </div>
                {/* Additional decorative elements */}
                <div className='absolute top-1/4 left-8 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm hidden md:block'></div>
                <div className='absolute bottom-1/4 left-12 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm hidden md:block'></div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </motion.section>
  )
}

export default CareerAI
