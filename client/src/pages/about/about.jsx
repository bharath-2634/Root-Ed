import React from 'react'
import NavHeader from '@/components/common/navHeader'
import AboutHeader from '@/components/about-view/aboutHeader'
import OurStory from '@/components/about-view/ourStory'
import WhyChoose from '@/components/about-view/whyChoose'
import CareerAI from '@/components/about-view/careerAI'
import AboutCEO from '@/components/about-view/aboutCEO'
import OurMission from '@/components/about-view/ourMission'
import OurVision from '@/components/about-view/ourVision'
import ClientTestimonials from '@/components/about-view/clientTestimonials'
import TestimonialCarousel from '@/components/common/testimonial'
import FAQSection from '@/components/common/faq'
import Footer from '@/components/common/footer'


const About = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center  gap-6'>
      <div className="w-full">
        <NavHeader/>
      </div>
      <AboutHeader/>
      <OurStory/>
      <WhyChoose/>
      <CareerAI/>
      <AboutCEO/>
      <OurMission/>
      <OurVision/>
      <TestimonialCarousel/>
      <FAQSection/>
      <Footer/>

    </div>
  )
}

export default About
