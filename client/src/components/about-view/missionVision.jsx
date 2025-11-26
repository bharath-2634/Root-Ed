import React from 'react'
import { CheckCircle } from 'lucide-react'
import missionImg from "../../assets/our_mission.png"
import visionImg from "../../assets/our_vission.png"

const MissionVision = () => {
  const missionPoints = [
    'Innovating for a Sustainable Future',
    'Customer-Centric Approach',
    'Building Stronger Communities'
  ]

  const visionPoints = [
    'Inspiring Modern Architecture',
    'Pioneering Sustainable Construction'
  ]

  return (
    <>
      {/* Mission Section */}
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 font-poppins bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
            
            {/* Left - Images Section */}
            <div className='relative flex items-center justify-center'>
              {/* Main Background Image - constrained to match text width */}
              <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-lg mx-auto lg:mx-0'>
                  <img src={missionImg} alt="Our Mission" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Right - Content Section */}
            <div className='space-y-6'>
              <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#131D2D] mb-6'>
                  Our Mission
                </h2>
                
                <p className='text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-justify'>
                  To provide exceptional construction services that exceed client expectations through innovation, craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities. We aim to build projects that inspire and improve the lives of those who experience them. Through our dedication to quality and our client-centric approach, we strive to exceed expectations in every project. Our dedication to integrity and excellence drives us to build lasting relationships and a legacy of trust.
                </p>
              </div>

              {/* Mission Points List */}
              <div className='space-y-4'>
                {missionPoints.map((point, index) => (
                  <div key={index} className='flex items-start gap-3 group'>
                    <div className='flex-shrink-0 mt-1'>
                      <CheckCircle className='w-6 h-6 text-primary' />
                    </div>
                    <p className='text-gray-700 text-base md:text-lg font-medium group-hover:text-primary transition-colors duration-300'>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 font-poppins bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
            
            {/* Left - Content Section */}
            <div className='space-y-6 order-2 lg:order-1'>
              <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#131D2D] mb-6'>
                  Our Vision
                </h2>
                
                <p className='text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-justify'>
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
                    <p className='text-gray-700 text-base md:text-lg font-medium group-hover:text-primary transition-colors duration-300'>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Images Section */}
            <div className='relative order-1 lg:order-2 flex items-center justify-center'>
              {/* Main Background Image - constrained width to align with content */}
              <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-lg mx-auto lg:mx-0'>
                <img src={visionImg} alt="Our Vision" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
