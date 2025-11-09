import Footer from '@/components/common/footer'
import NavHeader from '@/components/common/navHeader'
import ContactForm from '@/components/contact-view/contact_form'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="w-full ">
        <NavHeader/>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
