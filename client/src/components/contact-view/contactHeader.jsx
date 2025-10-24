import React from 'react';

const ContactHeader = () => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-16 py-16 lg:py-24 font-poppins bg-gradient-to-br from-primary/10 via-white to-primary/5'>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary_nav mb-6'>
          Contact <span className='text-primary'>Us</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          Have questions about our courses or need assistance? We're here to help you on your learning journey. 
          Get in touch with our team and we'll respond as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
