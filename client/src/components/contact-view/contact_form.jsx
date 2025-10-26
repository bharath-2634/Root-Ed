import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../../assets/Root-Ed-logo.png";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ContactForm = () => {
  

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    try {
      const res = await fetch('http://localhost:5000/api/mail/send-faq-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setFeedback({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const testimonial_data = [
    {
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facere, nemo quae cum repellendus nulla, suscipit debitis dolorum ab quibusdam autem sequi."
    },
    {
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facere, nemo quae cum repellendus nulla, suscipit debitis dolorum ab quibusdam autem sequi."
    },
    {
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facere, nemo quae cum repellendus nulla, suscipit debitis dolorum ab quibusdam autem sequi."
    },
    {
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facere, nemo quae cum repellendus nulla, suscipit debitis dolorum ab quibusdam autem sequi."
    }
  ]

  return (
    <section className="w-full px-10 py-16 sm:py-20 lg:py-24 bg-white font-poppins">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-8 lg:mt-0">
            <div className="mb-6 sm:mb-8">

              <h3 className="text-xl sm:text-2xl font-bold text-primary_nav mb-3 sm:mb-4">
                We're here to help 
              </h3>
            </div>

            <form className="space-y-4 sm:space-y-6" >
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name...."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email...."
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message...."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 resize-none text-sm sm:text-base sm:rows-6"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="w-full bg-primary_nav text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full sm:rounded-2xl font-semibold hover:bg-black transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {feedback && (
                <p className={`text-sm mt-2 ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback.message}
                </p>
              )}
              </div>
            </form>
          </div>
          <div className='h-full flex items-start justify-center lg:w-full md:w-[50%]'>
              <Swiper navigation={false} modules={[Navigation]} className="mySwiper mb-10">
                {
                    testimonial_data.map(({description})=>{
                        return (
                            <SwiperSlide>
                                <div className='bg-gray-50 shadow-lg rounded-[1rem] w-full flex flex-col items-start justify-between gap-6 p-6 h-[20rem]'>
                                    <div className="flex justify-center items-center lg:w-[7rem] md:w-[6rem] sm:w-[7rem] w-[7rem]">
                                        <img src={logo} alt="Root-Ed" className=''/>
                                    </div>
                                    <p className='text-[.8rem] sm:text-[1rem] p-2 font-medium'>{description}</p>    
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;