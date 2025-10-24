import React from 'react'
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react'
import img from "../../assets/about_carrer.png"

const CareerAI = () => {
  const benefits = [
    { icon: <BookOpen className='w-5 h-5' />, text: 'Learn AI and more' },
    { icon: <Award className='w-5 h-5' />, text: 'Prep for a certification' },
    { icon: <Users className='w-5 h-5' />, text: 'Practice with AI coaching' },
    { icon: <TrendingUp className='w-5 h-5' />, text: 'Advance your career' }
  ]

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins'>
      <div className='md:px-20'>
        
        <div className='bg-[#1a1d2e] rounded-3xl overflow-hidden shadow-2xl '>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-0 items-center justify-center'>
            
            {/* Left Content */}
            <div className='p-8 md:p-12 lg:p-16 flex flex-col justify-center'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                Reimagine your career in the AI era
              </h2>
              
              <p className='text-gray-300 text-base md:text-lg mb-8 leading-relaxed'>
                Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
              </p>

              {/* Benefits List */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                      <div className='text-primary'>
                        {benefit.icon}
                      </div>
                    </div>
                    <span className='text-white text-sm md:text-base'>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className='space-y-4'>
                <button className='bg-white hover:bg-gray-100 text-[#1a1d2e] font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-lg'>
                  Learn more
                </button>
                <p className='text-gray-400 text-sm'>
                  Starting at ₹500/month
                </p>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className='relative h-full min-h-[400px] lg:min-h-[700px]'>
              {/* Gradient Background */}
              <div className='h-full items-center justify-center flex'>
                <img src={img} alt="" />
              </div>
              {/* Additional decorative elements */}
              <div className='absolute top-1/4 left-8 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm'></div>
              <div className='absolute bottom-1/4 left-12 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm'></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CareerAI
