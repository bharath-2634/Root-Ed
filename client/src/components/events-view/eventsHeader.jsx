import React, { useState } from 'react'
import world_img from "../../assets/world_bg.png";

const EventsHeader = () => {
    const [email,setEmail] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-3 font-poppins h-96 bg-cover" style={{ backgroundImage: `url(${world_img})`}}>
            <div className='w-full flex flex-col items-center justify-center gap-6 p-3'>
                <h2 className='lg:text-[2rem] md:text-[1.8rem] sm:text-[1.8rem] text-[1.2rem] font-semibold text-primary_nav text-center m-6'> Subscribe <span className='text-primary'>Root-Ed</span> for exclusive, <br />insider info on pre-seed, emerging tech, and venture investing</h2>
                <div className='flex items-center justify-center gap-3 relative w-full h-90' >
                    <input
                    type="text"
                    //   name="email"
                    placeholder="Enter your email .."
                    value={email}
                    onChange={(e)=>{setEmail(e.value)}}
                    className="xl:w-[30%] md:w-[30%] sm:w-[60%] px-6 sm:px-10 py-3 sm:py-4 bg-slate-100 rounded-[6rem] sm:rounded-[6rem] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6EC59B] transition-colors duration-300 text-sm sm:text-base text-start"
                    />
                    <button
                        className="
                          flex items-center justify-center
                          px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3
                          bg-primary_nav text-white
                          text-sm sm:text-[0.9rem] md:text-[1rem]
                          rounded-full shadow-xl
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-1 hover:shadow-2xl
                        "
                        onClick={()=>handleSubmit()}
                      >
                        subscribe
                        
                      </button>
                </div>
            </div>
        </div>
    )
}

export default EventsHeader
