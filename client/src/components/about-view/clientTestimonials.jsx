import React from 'react'
import { Star, Quote } from 'lucide-react'

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Head of customer experience',
      testimonial: "I've even started building my own mini apps! Highly recommended for anyone who wants to learn the smart way I've even started building my own mini apps! Highly recommended for anyone who wants to learn the smart way I've even started building my own mini apps! Highly recommended smart way",
      rating: 5,
      image: null
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'Head of customer experience',
      testimonial: "I've even started building my own mini apps! Highly recommended for anyone who wants to learn the smart way I've even started building my own mini apps! Highly recommended for anyone who wants to learn the smart way I've even started building my own mini apps! Highly recommended smart way",
      rating: 5,
      image: null
    }
  ]

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-white'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#131D2D] mb-4'>
            What <span className='text-primary'>Our Clients</span> Say
          </h2>
          <p className='text-gray-600 text-lg'>
            Here Directly Our Satisfied Partners
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className='bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              {/* Quote Icon */}
              <div className='flex justify-between items-start mb-6'>
                <Quote className='w-12 h-12 text-gray-200' />
                
                {/* Star Rating */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index}
                      className={`w-5 h-5 ${
                        index < testimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className='text-gray-600 text-base leading-relaxed mb-8'>
                {testimonial.testimonial}
              </p>

              {/* Author Info */}
              <div className='flex items-center gap-4'>
                {/* Avatar */}
                <div className='w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-md'>
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className='w-full h-full rounded-full object-cover'
                    />
                  ) : (
                    <span>{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>

                {/* Name and Position */}
                <div>
                  <h4 className='font-bold text-[#131D2D] text-lg'>
                    {testimonial.name}
                  </h4>
                  <p className='text-gray-500 text-sm'>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add More Testimonials Button */}
        <div className='text-center mt-12'>
          <button className='text-primary font-semibold hover:underline transition-all duration-300'>
            View More Reviews →
          </button>
        </div>

      </div>
    </section>
  )
}

export default ClientTestimonials
