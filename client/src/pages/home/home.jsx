import NavHeader from '@/components/common/navHeader'
import React from 'react'
import HomeDash from '../../components/home-view/homeDash'
import EducationSystemIntro from '@/components/home-view/educationSystem'
import HomeVideo from '@/components/home-view/homeVideo'
import LearnSmarterSection from '@/components/home-view/learnSmarter'
import OurCourses from '@/components/home-view/ourCourses'
import WorldWideFunction from '@/components/home-view/worldWideEducation'
import TestimonialCarousel from '@/components/common/testimonial'
import FAQSection from '@/components/common/faq'
import Footer from '@/components/common/footer'

const home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="w-full ">
        <NavHeader/>
      </div>
      <HomeDash/>
      <EducationSystemIntro/>
      <HomeVideo/>
      <LearnSmarterSection/>
      <OurCourses/>
      <WorldWideFunction/>
      {/* <TestimonialCarousel/> */}
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default home
