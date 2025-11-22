import React from 'react'
import { Outlet } from 'react-router-dom'


const HomeLayout = () => {
  return (
    <div className='flex items-center bg-white flex-col justify-center gap-3 w-full'>
        <div className='w-full'>
          <Outlet/>
        </div>
    </div>
  )
}

export default HomeLayout
