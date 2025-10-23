import React from 'react'
import intro_img from "../../assets/intro_img.jpg"
import { ArrowRight } from 'lucide-react'

const EducationSystemIntro = () => {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins'>
      <div className='max-w-7xl mx-auto'>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16'>
          
          {/* Image Section */}
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <img 
              src={intro_img}
              alt="Root-Ed Education System" 
              className='w-full max-w-md lg:max-w-lg h-auto object-contain rounded-3xl shadow-lg'
              onError={(e) => e.target.style.display='none'}
            />
          </div>

          {/* Content Section */}
          <div className='w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 lg:gap-6'>
            
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] font-semibold text-primary leading-tight'>
              Our Education System
              <br />
              <span className='text-primary_nav'>Inspires</span> you more
            </h2>

            {/* Description */}
            <p className='text-sm sm:text-base lg:text-lg xl:text-xl text-justify text-gray-600 leading-relaxed'>
              We believe learning should spark creativity, not memorization. Our <span className='text-primary font-medium'>STEM-based approach</span> connects science, technology, engineering, and math to real-world applications.
              We empower students to <span className='text-primary font-medium'>think</span>, <span className='text-primary font-medium'>create</span>, and <span className='text-primary font-medium'>lead</span> with confidence.
            </p>
            
            {/* CTA Button */}
            <button
              className="
                flex items-center justify-center
                px-6 py-3 md:px-8 md:py-4
                bg-primary text-white
                text-sm md:text-base
                rounded shadow-lg
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-xl
                mt-4
              "
            >
              Start now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSystemIntro
