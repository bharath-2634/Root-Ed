import React from 'react'
import { GraduationCap, Award, Target, BookOpen, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const WhyChoose = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='p-10'>
        
        {/* Section Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-primary_nav leading-tight'>
            Why <span className='text-primary'>Root-Ed</span> Is The Right Choice for You
          </h2>
        </div>

        {/* Grid Layout - 3 columns in first row, full width in second row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* Card 1: Expert Instructors */}
          <div className='bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-10 xl:px-4 '>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <GraduationCap className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl md:text-2xl xl:text-2xl font-semibold mb-4 text-[#131D2D]'>
              Expert Instructors
            </h3>
            <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
              Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, 
            </p>
          </div>

          {/* Card 2: Career-Boost Certify */}
          <div className='bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-10 xl:px-4 '>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <Award className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl md:text-2xl xl:text-2xl font-semibold mb-4 text-[#131D2D]'>
              Career-Boost Certify
            </h3>
            <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
              Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition
            </p>
          </div>

          {/* Card 3: Flexible Learning Schedules - Deep Blue Highlight */}
          <div className='bg-primary_nav text-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1 lg:row-span-2'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white/20'>
              <BookOpen className='w-7 h-7 text-white' />
            </div>
            <h3 className='text-xl md:text-2xl font-semibold mb-4 xl:text-3xl'>
              Flexible Learning Schedules
            </h3>
            <p className='text-gray-300 text-sm md:text-base xl:text-[1rem] mb-4'>
              At expert.io, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
            </p>
           
            <button className='bg-primary hover:bg-[#00a859] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg group  w-fit mt-10' onClick={()=>navigate("/auth/login")}>
              Start Free Trial
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>

          {/* Card 4: 100+ High Impact Courses - Full Width */}
          <div className='md:col-span-2 lg:col-span-2 bg-gray-50 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col xl:py-6 xl:px-4'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <Target className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl md:text-2xl xl:text-[1.6rem] font-semibold mb-4 text-[#131D2D]'>
              100+ High Impact Courses
            </h3>
            <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed'>
              expert.io offers over 100 courses that cover essential skills in today's tech industry. Whether you're a beginner or an experienced professional Whether you're a beginner or an experienced professional
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChoose
