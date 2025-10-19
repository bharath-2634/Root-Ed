import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';


const Account = () => {

  const {user,isAuthenticated,isLoading}  = useSelector((state)=>state.auth);
  const [userName,setUserName] = useState("");

  useEffect(()=>{
    setUserName(user?.userName);
  },user);

  return (
    <div className='fixed top-5 right-10 text-white flex items-center justify-center gap-2 z-20'>
      <div className='flex items-center justify-center border-gray-500 px-2 py-2 border-[.1rem] 
        rounded-[.5rem] relative'>
            
            <div className='bg-[#453FF3] rounded-3xl w-[.5rem] h-[.5rem] absolute top-1 right-1'>
            </div>
        </div>
        <div className='flex items-center justify-center border-gray-500 px-2 py-2 border-[.1rem] 
        rounded-[.5rem] relative'>
            <IoIosNotifications className='text-xl'/>
            <div className='bg-[#453FF3] rounded-3xl w-[.5rem] h-[.5rem] absolute top-1 right-1'>
            </div>
        </div>
        <div className='flex items-center border-gray-500 justify-center px-1 py-[.2rem] border-[.1rem] rounded-[.5rem] cursor-pointer'>
           <h2 className='rounded-[.1rem] font-poppins text-[1rem] p-1 '>{userName||"Get Started"}</h2>
           <MdKeyboardArrowRight />
        </div>
    </div> 
  )
}

export default Account;
