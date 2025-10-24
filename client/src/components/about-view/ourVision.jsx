import React from 'react'
import { CheckCircle } from 'lucide-react'
import img from "../../assets/our_vission.png"

const OurVision = () => {
  const visionPoints = [
    'Inspiring Modern Architecture',
    'Pioneering Sustainable Construction'
  ]

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='md:p-20'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left - Content Section */}
          <div className='space-y-6 lg:order-1 order-2'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-[#131D2D] mb-6'>
                Our Vision
              </h2>
              
              <p className='text-gray-600 text-base leading-relaxed mb-8 text-justify'>
                At Rancours , our vision is to redefine the future of construction through innovation, sustainability, and excellence. We aim to create structures that not only inspire but also contribute to the well-being of communities and the environment. By embracing cutting-edge technology and eco-friendly practices, we strive to lead the industry toward a greener, smarter future. Our focus is on delivering value, quality, and longevity in every project we undertake. Together, we envision a world where construction empowers progress and transforms lives.
              </p>
            </div>

            {/* Vision Points List */}
            <div className='space-y-4'>
              {visionPoints.map((point, index) => (
                <div key={index} className='flex items-start gap-3 group'>
                  <div className='flex-shrink-0 mt-1'>
                    <CheckCircle className='w-6 h-6 text-primary' />
                  </div>
                  <p className='text-gray-700 text-base font-medium group-hover:text-primary transition-colors duration-300'>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images Section */}
          <div className='relative lg:order-2 order-1'>
            {/* Main Background Image */}
            <div className='relative w-full aspect-[4/3] rounded-3xl overflow-hidden '>
              <img src={img} alt="Our Vision" className="w-full h-full object-cover" />
            </div>

  
          </div>

        </div>

      </div>
    </section>
  )
}

export default OurVision
