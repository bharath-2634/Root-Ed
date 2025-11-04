import React from 'react'
import { Briefcase, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import img from "../../assets/ceo.png"
import { useNavigate } from 'react-router-dom'


const AboutCEO = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='p-10'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
          
          {/* Left - Image Section */}
          <div className='relative  md:px-0 sm:px-6 px-4'>
            {/* Main Image Container */}
            <div className='relative rounded-3xl shadow-2xl'>
              {/* Placeholder Image */}
              
              <div className='relative aspect-[5/3] lg:aspect-[5/4] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl rotate-6 hover:rotate-0 transition-all duration-500'>
              <div className='absolute aspect-[5/3] lg:aspect-[5/4] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl'>
                <div className='w-full h-full flex items-center justify-center'>
                  <img src={img} alt="CEO" className='w-full h-full object-cover rounded-2xl' />
                </div>
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
              
              <p className='text-gray-600 text-base md:text-xl leading-relaxed mb-4 text-justify'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ea ex quaerat, necessitatibus sequi explicabo magni esse asperiores quo libero sint, voluptatibus illo eveniet hic, iusto eligendi eum vitae atque.
              </p>
            </div>

            {/* CTA and Social Links */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              {/* Connect Button */}
              <button className='bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 group' onClick={()=>navigate("/main/connect")}>
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
