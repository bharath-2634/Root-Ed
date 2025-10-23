import React from 'react'
import bg from "../../assets/background_img.png"
import user_img from "../../assets/user_img.png"
import "../../App.css";
import { TiTick } from "react-icons/ti";
import { ArrowRight, Users, Check } from 'lucide-react';
import { FaUsers } from "react-icons/fa";
import lapView from "../../assets/lap_view_img.png";

const HomeDash = () => {
  return (
    <div className='relative w-[90%] sm:px-6  
                 flex flex-col items-center justify-center 
                 bg-cover bg-center bg-no-repeat rounded-[1rem] lg:mt-10 md:mt-10 sm:mt-8 mt-5 font-poppins gap-6' 
                 style={{ backgroundImage: `url(${bg})` }}>

          <h2 className='xl:text-[4rem] lg:text-[2.4rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8rem] font-semibold text-primary_nav text-center m-6'>Discover the <span className='bg-white xl:text-[3rem] lg:text-[2.5rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.8 rem] p-1 rounded'>Innovator</span> In you</h2>

          <div className='flex flex-col items-center justify-center gap-3 '>
              <h2 className='xl:text-[1.7rem] lg:text-[1.1rem] md:text-[]'>Join over <span className='text-white font-bold'>2M</span> global social users</h2>
              <img src={user_img} alt="Root-Ed" className='xl:w-40 lg:w-30 md:w-20 sm:w-20 w-20'/>
          </div>

          {/* <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-3 p-2 m-3 lg:text-[1rem] md:text-[.9rem] sm:text-[1rem] text-[.8rem] md:items-start sm:items-start lg:items-center items-start'>
            <h2 className='flex items-center justify-center gap-4 text-start'><TiTick /> Acquire knowledge of novel STEM technologies</h2>
            <h2 className='flex items-center justify-center gap-4 text-start'><TiTick /> Experience Art based Instruction</h2>
            <h2 className='flex items-center justify-center gap-4 text-start'><TiTick /> Develop Research and Entrepreneurial Thinking</h2>
          </div> */}

          <div className="flex flex-row justify-center items-center gap-4 mt-6 mb-16 xl:gap-8">
  <button
    className="
      flex items-center justify-center
      xl:px-7 xl:py-5 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3
      bg-white text-primary_nav
      text-sm sm:text-[0.9rem] md:text-[1rem]
      rounded-full shadow-xl
      transition-all duration-300 ease-in-out
      hover:-translate-y-1 hover:shadow-2xl
    "
  >
    Start now
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 text-primary_nav" />
  </button>

  <button
    className="
      flex items-center justify-center
      px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 xl:px-7 xl:py-5
      bg-primary_nav text-white
      text-sm sm:text-[0.9rem] md:text-[1rem]
      rounded-full shadow-xl
      transition-all duration-300 ease-in-out
      hover:-translate-y-1 hover:shadow-2xl
    "
  >
    Join now
    <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 text-white" />
  </button>
</div>

  <div className='sticky bottom-0 xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] '>
    <img src={lapView} alt="Root-Ed" className='lg:w-[100%] md:w-[100%] sm:w-[120%] w-[120%]'/>
  </div>

    </div>
  )
}

export default HomeDash
