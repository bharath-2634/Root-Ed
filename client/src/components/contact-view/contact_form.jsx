import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../../assets/Root-Ed-logo.png";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { VscActivateBreakpoints } from "react-icons/vsc";

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

  return (
    <section className="w-full px-10 py-16 sm:py-20 lg:py-24 font-poppins">
      <div className='px-40 mb-20'>
          <h2 className='lg:text-[2.4rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8rem] font-semibold text-primary_nav text-center '>Contact and Support</h2>
          <p className='text-gray-600 text-sm md:text-base xl:text-[1rem] leading-relaxed text-center mt-10'>
                  Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
          </p>
      </div>
  
      <div className="w-full mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          
          <div className='bg-primary_nav rounded-2xl sm:rounded-3xl h-full flex flex-col items-start justify-between lg:w-full md:w-[90%] w-full lg:p-6 sm:p-8 p-3'>
              <h2 className='lg:text-[1.4rem] md:text-[1.8rem] sm:text-[1.4rem] text-[1.2rem] font-medium text-white text-start '>Discover the Talk to an <span className='text-primary'>Expert</span> today</h2>
              <div>
                  <div className='w-full flex flex-col items-start justify-start gap-3'>
                      <div className='w-full flex items-center justify-start gap-3 lg:ml-10 md:ml-10 sm:ml-0 ml-0'>
                        <VscActivateBreakpoints className='text-primary text-[1.6rem]'/>
                        <h2 className='lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] text-[1rem] font-medium text-white text-start m-6'>Discover the Talk to an today</h2>
                      </div>
                  </div>

                  <div className='w-full flex flex-col items-start justify-center gap-3'>
                      <div className='w-full flex items-center justify-start gap-3 lg:ml-10 md:ml-10 sm:ml-0 ml-0'>
                        <VscActivateBreakpoints className='text-primary text-[1.6rem]'/>
                        <h2 className='lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] text-[1rem] font-medium text-white text-start m-6'>Discover the Talk to an today</h2>
                      </div>
                  </div>

                  <div className='w-full flex flex-col items-start justify-center gap-3'>
                      <div className='w-full flex items-center justify-start gap-3 lg:ml-10 md:ml-10 sm:ml-0 ml-0'>
                        <VscActivateBreakpoints className='text-primary text-[1.6rem]'/>
                        <h2 className='lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] text-[1rem] font-medium text-white text-start m-6'>Discover the Talk to an today</h2>
                      </div>
                  </div>

                  <h2 className='lg:text-[1rem] md:text-[1.4rem] sm:text-[1rem] text-[1rem] font-regular text-white text-start self-start mt-10 p-2'>Looking for customer support ? <span className='text-primary cursor-pointer underline'>click here</span></h2>
              </div>
              
          </div>

          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-8 lg:mt-0">
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
          
        </div>
      </div>
    </section>
  )
}

export default ContactForm;