import NavHeader from '@/components/common/navHeader'
import React from 'react'
import HomeDash from '../../components/home-view/homeDash'
import EducationSystemIntro from '@/components/home-view/educationSystem'

const home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-3 gap-6'>
      <div className="w-full ">
        <NavHeader/>
      </div>
      <HomeDash/>
      <EducationSystemIntro/>

    </div>
  )
}

export default home
