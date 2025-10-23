import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getAllCourses } from '@/store/admin-slice';
import { TiStarFullOutline } from "react-icons/ti";

const OurCourses = () => {

    const { isLoading, courses, stats }  = useSelector((state)=>state.admin);
    const dispatch = useDispatch();

    const [course,setCourse] = useState([]);

    useEffect(()=>{
        dispatch(getAllCourses()).then((course)=>setCourse(course)).catch((error)=>console.log(error));
    },[]);

    console.log(courses);

    
    return (
        <div className='w-full flex flex-col items-center justify-center gap-3 font-poppins'>
            <h2 className='lg:text-[2.6rem] md:text-[2.1rem] sm:text-[1.8rem] text-[1.8rem] font-bold text-primary text-center mt-20'>Our Courses</h2>

            {/* Carousel */}
            <div className='w-full p-6'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper lg:w-[100%] md:w-[80%] sm:w-[60%]"
                    breakpoints={{
                        0: {           // small devices
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {         // medium devices (md)
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {        // large devices (lg)
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {
                        courses!=null && courses.length>0 ? (
                            courses.map(({bestSeller, category, description, duration, image, instructor, level, maxParticipants, price, rating, sales,scheduleDate, scheduleTime, title, type})=>{
                                return (
                                    <SwiperSlide>
                                        <div className='w-[100%] bg-white rounded shadow flex flex-col items-start justify-center gap-3'>
                                            <div className="h-50 flex items-center justify-center relative">
                                                <img 
                                                    src={image} 
                                                    alt={title} 
                                                    className='w-full h-full object-cover rounded-[.5rem]'
                                                    onError={(e) => { 
                                                        e.target.onerror = null; 
                                                        e.target.src = "https://placehold.co/300x200/cccccc/333333?text=Course+Image";
                                                    }}
                                                />
                                                <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center">
                                                    {category}
                                                </span>
                                            </div>
                                            
                                            <div className='flex flex-col items-start justify-between gap-2 p-3'>
                                                <h2 className='font-semibold lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.5rem]'>{title}</h2>
                                                <div className='flex items-start justify-between gap-3'>
                                                    <p className='font-medium lg:text-[1rem] md:text-[1.2rem] sm:text-[1.5rem] text-slate-400'>Author: <span className='text-primary_nav'>{instructor}</span></p>

                                                    {bestSeller ? (<span className=" bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center"> <TiStarFullOutline className='-mt-[.1rem] mr-1'/>Best Seller
                                                    </span>) : (<span className=" bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center"> <TiStarFullOutline className='-mt-[.1rem] mr-1'/>Best Seller
                                                    </span>)}
                                                </div>


                                            </div>
                                            
                                            <div className='w-full flex items-center justify-between'>
                                                
                                            </div>


                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        ) : (
                            <div>

                            </div>
                        )
                    }
                </Swiper>
            </div>
            

        </div>
    )
}

export default OurCourses
