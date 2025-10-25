import React from 'react'
import aboutHeaderBg from "../../assets/about_header.png"

const AboutHeader = () => {
  return (
    <div className='relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[80vh] 
                 px-4 sm:px-6 md:px-8 lg:px-12
                 flex flex-col items-center justify-center 
                 bg-cover bg-center bg-no-repeat font-poppins gap-4 sm:gap-6 overflow-hidden' 
                 style={{ 
                   backgroundImage: `url(${aboutHeaderBg})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundAttachment: 'scroll'
                 }}>
      <div className='absolute inset-0 bg-black/10'></div>
      
      <div className='relative z-10 text-center space-y-4 sm:space-y-6 px-6 py-12 sm:py-14 md:py-16'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold text-primary_nav leading-tight'>
            Learn With <span className='text-primary_nav'>Purpose</span>
          </h1>
          
          <h2 className='lg:text-[3rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold text-[#131D2D] '>
            Grow With <span className='text-[#131D2D]'>Root-Ed</span>
          </h2>
        </div>
        
        <p className='lg:text-[1.2rem] md:text-[1.1rem] text-[1rem] text-[#131D2D]/80 w-full mx-auto leading-relaxed mt-6'>
          Discover who we are, what we stand for, and how we're shaping the future of learning.
        </p>
      </div>

      {/* Decorative elements matching the image style */}
      <div className='absolute top-2 left-2 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-30'>
        <svg viewBox="0 0 100 100" className="text-[#131D2D]">
          <path d="M 10 10 Q 10 50 50 50 Q 10 50 10 90" stroke="currentColor" fill="none" strokeWidth="3"/>
        </svg>
      </div>
      
      <div className='absolute bottom-2 left-3 sm:bottom-4 sm:left-6 opacity-40'>
        <div className='flex gap-1'>
          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#131D2D] rounded-full'></div>
          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#131D2D] rounded-full'></div>
          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#131D2D] rounded-full'></div>
        </div>
        <div className='flex gap-1 mt-1'>
          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#131D2D] rounded-full'></div>
          <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#131D2D] rounded-full'></div>
        </div>
      </div>

      <div className='absolute top-3 right-3 sm:top-6 sm:right-6 opacity-30'>
        <svg width="40" height="40" viewBox="0 0 60 60" className="text-[#131D2D] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
          <path d="M 30 5 L 35 25 L 55 30 L 35 35 L 30 55 L 25 35 L 5 30 L 25 25 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className='absolute bottom-3 right-4 sm:bottom-6 sm:right-8 opacity-40'>
        <svg width="35" height="35" viewBox="0 0 50 50" className="text-[#131D2D] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]">
          <circle cx="25" cy="25" r="20" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="5,5"/>
        </svg>
      </div>
    </div>
  )
}

export default AboutHeader
