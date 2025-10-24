import NavHeader from '@/components/common/navHeader'
import React from 'react'
import HomeDash from '../../components/home-view/homeDash'
import EducationSystemIntro from '@/components/home-view/educationSystem'
import HomeVideo from '@/components/home-view/homeVideo'
import LearnSmarterSection from '@/components/home-view/learnSmarter'
import OurCourses from '@/components/home-view/ourCourses'
import LovedByLearners from '@/components/common/companyLink'
import WorldWideFunction from '@/components/home-view/worldWideEducation'

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
      {/* <LovedByLearners/> */}
      <WorldWideFunction/>

    </div>
  )
}

export default home
