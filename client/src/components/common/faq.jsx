import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQSection = () => {
  // FAQ state management
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  // FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: "What is Telemedicine?",
      answer: "Telemedicine is the practice of providing healthcare services remotely using technology such as video calls, phone consultations, and digital health platforms. It allows patients to consult with healthcare providers from the comfort of their homes."
    },
    {
      id: 2,
      question: "How do I schedule an online consultation?",
      answer: "You can schedule an online consultation by visiting our platform, selecting your preferred healthcare provider, choosing an available time slot, and completing the booking process. You'll receive a confirmation email with the meeting details."
    },
    {
      id: 3,
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. However, coverage may vary depending on your specific plan and the type of consultation. We recommend checking with your insurance provider or contacting our support team to verify coverage."
    },
    {
      id: 4,
      question: "Is my personal information secure?",
      answer: "Absolutely. We use industry-standard encryption and security measures to protect your personal information. Our platform is HIPAA compliant and follows strict privacy protocols to ensure your medical data remains confidential and secure."
    }
  ]

  // Toggle FAQ expansion
  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - FAQ Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <p className="text-[#6EC59B] font-medium mb-3 sm:mb-4 text-sm sm:text-base">We've Got Answers</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#131D2D] mb-4 sm:mb-6 leading-tight">
                Frequently Asked
                <br />
                Questions.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Save time and find instant solutions without the hassle. From detailed guidance to quick tips, everything you need is just a click away. Reach out to us directly, and we'll be happy to assist.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className="bg-[#6EC59B]/10 rounded-xl sm:rounded-2xl border border-[#6EC59B]/20 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#6EC59B]/20 rounded-xl sm:rounded-2xl"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-[#6EC59B] transition-transform duration-300">
                      {expandedFAQ === faq.id ? (
                        <FaChevronUp className="text-lg" />
                      ) : (
                        <FaChevronDown className="text-lg" />
                      )}
                    </div>
                  </button>
                  
                  {/* Expandable Answer */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-2 border-t border-[#6EC59B]/20">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-8 lg:mt-0">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-[#131D2D] rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <span className="text-white text-lg sm:text-2xl">💬</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#131D2D] mb-3 sm:mb-4">
                Any Question For Us?
              </h3>
            </div>

            <form className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name...."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email...."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  rows="4"
                  placeholder="Enter your message...."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#6EC59B]/10 border border-[#6EC59B]/20 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 resize-none text-sm sm:text-base sm:rows-6"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#131D2D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-black transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg text-sm sm:text-base"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection