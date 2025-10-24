import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import intro_img from "../../assets/intro_img.jpg";

const ContactInfo = () => {

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20 font-poppins'>
      <div className='max-w-7xl mx-auto'>

        {/* Main Content - Two Column Layout */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-16'>
          
          {/* Left Side - Image */}
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <img 
              src={intro_img}
              alt="Contact Root-Ed" 
              className='w-full max-w-md lg:max-w-lg h-auto object-contain rounded-3xl shadow-lg'
              onError={(e) => e.target.style.display='none'}
            />
          </div>

          {/* Right Side - Content */}
          <div className='w-full lg:w-1/2 flex flex-col items-start justify-center gap-6'>
            
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-primary leading-tight'>
              Get In Touch
              <br />
              <span className='text-primary_nav'>We're Here To Help</span>
            </h2>

            {/* Description */}
            <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed'>
              Have questions about our courses or need assistance? We're here to support you on your learning journey. 
              Our team is dedicated to providing you with the <span className='text-primary font-medium'>best learning experience</span> possible.
            </p>

            {/* Contact Details Cards */}
            <div className='w-full space-y-4 mt-4'>
              
              {/* Phone Card */}
              <div className='bg-white border-2 border-gray-100 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-primary_nav mb-1'>Call Us</h3>
                    <p className='text-gray-700 font-semibold'>+1 (555) 123-4567</p>
                    <p className='text-gray-500 text-sm'>Mon-Fri, 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className='bg-white border-2 border-gray-100 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-primary_nav mb-1'>Email Us</h3>
                    <p className='text-gray-700 font-semibold'>info@rooted.com</p>
                    <p className='text-gray-500 text-sm'>We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className='bg-white border-2 border-gray-100 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-primary_nav mb-1'>Visit Us</h3>
                    <p className='text-gray-700 font-semibold'>123 Education Street</p>
                    <p className='text-gray-500 text-sm'>Learning City, State 12345</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className='bg-white border-2 border-gray-100 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Clock className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-primary_nav mb-1'>Working Hours</h3>
                    <p className='text-gray-700 font-semibold'>Mon - Fri: 9AM - 6PM</p>
                    <p className='text-gray-500 text-sm'>Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button
              className="
                flex items-center justify-center
                px-6 py-3 md:px-8 md:py-4
                bg-primary text-white
                text-sm md:text-base
                rounded-lg shadow-lg
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-xl
                mt-4
              "
            >
              Send a Message
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
