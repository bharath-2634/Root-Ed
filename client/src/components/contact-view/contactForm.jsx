import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, resetContactState } from '@/store/contact-slice';
import { toast } from 'react-toastify';
import { ArrowRight } from 'lucide-react';
import thumbnail_img from "../../assets/thumbnail_img.jpg";

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.contact
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    dispatch(submitContactForm(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message || 'Your message has been sent successfully!');
      setFormData(initialFormData);
      dispatch(resetContactState());
    }

    if (isError) {
      toast.error(message || 'Failed to send message. Please try again.');
      dispatch(resetContactState());
    }
  }, [isSuccess, isError, message, dispatch]);

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins bg-gray-50'>
      <div className='max-w-7xl mx-auto'>

        {/* Main Content - Two Column Layout */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16'>
          
          {/* Left Side - Content and Form */}
          <div className='w-full lg:w-1/2 flex flex-col items-start justify-center gap-6'>
            
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-primary leading-tight'>
              Send Us A Message
              <br />
              <span className='text-primary_nav'>We'd Love To Hear From You</span>
            </h2>

            {/* Description */}
            <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed'>
              Fill out the form below and our team will get back to you within <span className='text-primary font-medium'>24 hours</span>. 
              We're here to answer any questions you may have.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className='w-full space-y-5 mt-4'>
              {/* Name and Email Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Full Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Phone <span className='text-gray-400 text-xs'>(Optional)</span>
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='+1 (555) 000-0000'
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Subject <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='How can we help?'
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell us more about your inquiry...'
                  rows='5'
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none'
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isLoading}
                className='flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-primary text-white text-sm md:text-base rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    <span className='ml-2'>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className='w-5 h-5 md:w-6 md:h-6 ml-2' />
                  </>
                )}
              </button>

            </form>

          </div>

          {/* Right Side - Image */}
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <img 
              src={thumbnail_img}
              alt="Contact Form" 
              className='w-full max-w-md lg:max-w-lg h-auto object-contain rounded-3xl shadow-lg'
              onError={(e) => e.target.style.display='none'}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
