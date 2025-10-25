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
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
        <div className='p-10'>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
            
            {/* Left - Images Section */}
            <div className='relative'>
              {/* Main Background Image */}
              <div className='relative w-full h-full rounded-3xl '>
                  <img src={missionImg} alt="Our Mission" className="w-full h-full " />
              </div>
            </div>

            {/* Right - Content Section */}
            <div className='space-y-6'>
              <div>
                <h2 className='text-4xl md:text-5xl xl:text-6xl font-bold text-[#131D2D] mb-6'>
                  Our Mission
                </h2>
                
                <p className='text-gray-600 text-base leading-relaxed mb-8 text-justify xl:text-xl'>
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
                    <p className='text-gray-700 text-base xl:text-xl font-medium group-hover:text-primary transition-colors duration-300'>
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
      <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
        <div className='md:px-20'>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
            
            {/* Left - Content Section */}
            <div className='space-y-6 lg:order-1 order-2'>
              <div>
                <h2 className='text-4xl xl:text-6xl md:text-5xl font-bold text-[#131D2D] mb-6'>
                  Our Vision
                </h2>
                
                <p className='text-gray-600 text-base leading-relaxed mb-8 text-justify xl:text-xl'>
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
                    <p className='text-gray-700 text-base xl:text-xl font-medium group-hover:text-primary transition-colors duration-300'>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Images Section */}
            <div className='relative lg:order-2 order-1'>
              {/* Main Background Image */}
              <div className='relative w-full rounded-3xl h-full'>
                <img src={visionImg} alt="Our Vision" className="w-full h-full " />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default MissionVision
