import React from 'react'
import storyImage from "../../assets/intro_aboutUs_home.png"

const OurStory = () => {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins'>
      <div className='md:px-2'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          
          {/* Left Content */}
          <div className='space-y-6'>
            <div className='inline-block bg-green-400/30 p-1 rounded-[.5rem]'>
              <span className='text-primary font-semibold text-xs sm:text-base tracking-wide uppercase'>
                Our Story
              </span>
            </div>
            
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D] leading-tight'>
              Gateway To <span className='text-primary'>Personal</span><br />
              And Professional<br />
              <span className='text-primary'>Growth</span>
            </h2>
            
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Eduvance was founded with one goal: to make high-quality education accessible to everyone, everywhere. 
              We believe learning should be flexible, affordable, and deeply impactful—empowering individuals to pursue 
              their goals and adapt in an ever-changing world.
            </p>

            {/* Optional: Add a decorative element */}
           
          </div>

          {/* Right Image */}
          <div className='relative flex items-center justify-center lg:justify-end'>
            <div className='relative w-full max-w-md lg:max-w-lg'>
              {/* Background decorative circle */}
              <div className='absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl'></div>
              <div className='absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl'></div>
              
              {/* Main Image */}
              <div className='relative z-10'>
                <img 
                  src={storyImage}
                  alt="Professional Growth" 
                  className='w-full h-auto object-contain rounded-2xl'
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display='none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                        <div class="text-center p-8">
                          <div class="w-32 h-32 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <h3 class="text-2xl font-bold text-purple-600">Personal Growth</h3>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Decorative badge */}
             
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className='mt-16 lg:mt-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            
            {/* Stat 1 */}
            <div className='text-center space-y-2'>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                50k+
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                Learners Worldwide
              </p>
            </div>

            {/* Stat 2 */}
            <div className='text-center space-y-2'>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                120+
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                Courses in Countries
              </p>
            </div>

            {/* Stat 3 */}
            <div className='text-center space-y-2'>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                300+
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                Industry-Relevant Courses
              </p>
            </div>

            {/* Stat 4 */}
            <div className='text-center space-y-2'>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131D2D]'>
                98%
              </h3>
              <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>
                Learner Satisfaction Rate
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default OurStory
