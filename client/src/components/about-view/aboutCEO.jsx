import React from 'react'
import { Briefcase, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import img from "../../assets/ceo.png"


const AboutCEO = () => {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='md:px-2'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left - Image Section */}
          <div className='relative  md:px-0 sm:px-6 px-4'>
            {/* Main Image Container */}
            <div className='relative rounded-3xl shadow-2xl'>
              {/* Placeholder Image */}
              <div className='aspect-[11/7] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl'>
                <div className='w-full h-full flex items-center justify-center'>
                  <img src={img} alt="CEO" className='w-full h-full object-cover rounded-2xl' />
                </div>
              </div>

              {/* Top Badge - Qualified Instructor */}
              <div className='absolute -top-6 -right-7 bg-primary rounded-l-2xl rounded-tr-2xl px-6 py-4 shadow-xl flex items-center gap-3 '>
                <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
                  <Briefcase className='w-6 h-6 text-primary' />
                </div>
                <div className='text-white'>
                  <p className='font-bold text-sm'>Qualified Instructor</p>
                  <p className='text-xs opacity-90'>10+ years</p>
                </div>
              </div>

              {/* Bottom Badge - Qualified Instructor */}
              <div className='absolute -bottom-7 left-0 bg-primary rounded-r-2xl rounded-bl-2xl px-6 py-4 shadow-xl flex items-center gap-3 '>
                <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
                  <Briefcase className='w-6 h-6 text-primary' />
                </div>
                <div className='text-white'>
                  <p className='font-bold text-sm'>Qualified Instructor</p>
                  <p className='text-xs opacity-90'>10+ years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className='space-y-6'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-[#131D2D] mb-6'>
                About Our <span className='text-primary'>CEO</span>
              </h2>
              
              <p className='text-gray-600 text-base md:text-xl leading-relaxed mb-4 tracking-widest'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              </p>
            </div>

            {/* CTA and Social Links */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              {/* Connect Button */}
              <button className='bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 group'>
                Lets Connect
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>

              {/* Social Icons */}
              <div className='flex items-center gap-3'>
                <a 
                  href='#' 
                  className='w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
                  aria-label='Instagram'
                >
                  <Instagram className='w-5 h-5' />
                </a>
                <a 
                  href='#' 
                  className='w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
                <a 
                  href='#' 
                  className='w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
                  aria-label='Twitter'
                >
                  <Twitter className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutCEO
