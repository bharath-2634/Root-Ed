import React from 'react'
import { Briefcase, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import img from "../../assets/ceo.png"
import { useNavigate } from 'react-router-dom'


const AboutCEO = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 font-poppins bg-white'>
        <div className='max-w-7xl mx-auto'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
          
          {/* Left - Image Section */}
          <div className='relative'>
            {/* Main Image Container - constrained width to match text */}
            <div className='relative rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500 max-w-[340px] md:max-w-[420px] lg:max-w-[520px] mx-auto lg:mx-0'>
              <div className='relative aspect-[4/5] bg-gradient-to-br from-amber-100 to-amber-50'>
                <img src={img} alt="CEO" className='w-full h-full object-cover' />
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
                Anila Kanna earned her Bachelor’s in India and a Master’s in Chemical Engineering in New Jersey, later pursuing a PhD at Rutgers before launching Root “Ed.” With 10+ years of R&D experience in biomaterials and engineering, she now applies her expertise to develop innovative, technology-focused STEM programs.
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
