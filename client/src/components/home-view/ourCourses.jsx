import React from 'react'
import { useSelector } from 'react-redux';

const OurCourses = () => {

    const { isLoading, courses, stats }  = useSelector((state)=>state.admin);

    console.log(courses);
    
    return (
        <div className='flex flex-col items-center justify-center gap-3 font-poppins'>
            <h2 className='lg:text-[2.6rem] md:text-[2.1rem] sm:text-[1.8rem] text-[1.8rem] font-bold text-primary text-center mt-20'>Our Courses</h2>

        </div>
    )
}

export default OurCourses
