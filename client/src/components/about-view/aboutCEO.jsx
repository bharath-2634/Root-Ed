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
                Anila Kanna holds a Bachelor's degree from Pondicherry University,India and a Master's degrees From stevens Institute of Technology,New Jersey in Chemical Engineering and was pursuing a PhD in Mechanical Engineering at Rutgers University ,New Jersey before pausing her studies to launch Root “Ed”. With more than a decade of industry and academic research and development experience in areas including biomaterials, biomechanics, batteries, fuel cells, and sugar production, Anila leverages her solid academic foundation in both  chemical and mechanical engineering to design innovative STEM programs grounded in the latest technologies shaping today's world. 
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
