import React from 'react'
import { GraduationCap, Award, Target, BookOpen, ArrowRight } from 'lucide-react'

const WhyChoose = () => {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='md:px-20'>
        
        {/* Section Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D] leading-tight'>
            Why <span className='text-primary'>expert.io</span> Is The Right Choice for You
          </h2>
        </div>

        {/* Grid Layout - 3 columns in first row, full width in second row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          
          {/* Card 1: Expert Instructors */}
          <div className='bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col py-16'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <GraduationCap className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl font-bold mb-4 text-[#131D2D]'>
              Expert Instructors
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
            </p>
          </div>

          {/* Card 2: Career-Boost Certify */}
          <div className='bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col  py-16'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <Award className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl font-bold mb-4 text-[#131D2D]'>
              Career-Boost Certify
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition, and open doors to new career opportunities.
            </p>
          </div>

          {/* Card 3: Flexible Learning Schedules - Deep Blue Highlight */}
          <div className='bg-[#0C2D57] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col row-span-2'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white/20'>
              <BookOpen className='w-7 h-7 text-white' />
            </div>
            <h3 className='text-xl font-bold mb-4'>
              Flexible Learning Schedules
            </h3>
            <p className='text-white/90 text-sm leading-relaxed mb-4'>
              At expert.io, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
            </p>
            <p className='text-white/80 text-sm leading-relaxed mb-6'>
              Whether you're a working professional or a student, you can customize your schedule to fit your needs.
            </p>
            <button className='bg-[#00C16A] hover:bg-[#00a859] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg group mt-auto w-fit'>
              Start Free Trial
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>

          {/* Card 4: 100+ High Impact Courses - Full Width */}
          <div className='md:col-span-2 bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col  py-16'>
            <div className='w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-white shadow-sm'>
              <Target className='w-7 h-7 text-gray-700' />
            </div>
            <h3 className='text-xl font-bold mb-4 text-[#131D2D]'>
              100+ High Impact Courses
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              expert.io offers over 100 courses that cover essential skills in today's tech industry. Whether you're a beginner or an experienced professional, our courses in web development, data science, and cybersecurity provide practical, hands-on learning to help you apply your skills immediately & competitively.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChoose
