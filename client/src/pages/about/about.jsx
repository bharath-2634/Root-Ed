import React from 'react'
import NavHeader from '@/components/common/navHeader'
import AboutHeader from '@/components/about-view/aboutHeader'
import OurStory from '@/components/about-view/ourStory'
import WhyChoose from '@/components/about-view/whyChoose'
import CareerAI from '@/components/about-view/careerAI'
import AboutCEO from '@/components/about-view/aboutCEO'
import MissionVision from '@/components/about-view/missionVision'
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
      <MissionVision/>
      <TestimonialCarousel/>
      <FAQSection/>
      <Footer/>

    </div>
  )
}

export default About
