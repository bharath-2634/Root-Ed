import React from 'react';
import NavHeader from '@/components/common/navHeader';
import ContactHeader from '@/components/contact-view/contactHeader';
import ContactInfo from '@/components/contact-view/contactInfo';
import ContactForm from '@/components/contact-view/contactForm';
import FAQSection from '@/components/common/faq';

const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white'>
      <div className='w-full'>
        <NavHeader />
      </div>
      
      <ContactHeader />
      

      
      {/* Contact Form Section */}
      <div className='w-full px-4 md:px-8 lg:px-16 py-12 lg:py-20'>
        <ContactForm />
      </div>

      {/* Optional: Map Section */}
    
    </div>
  );
};

export default Contact;
