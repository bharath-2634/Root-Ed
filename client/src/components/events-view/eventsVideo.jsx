import React, { useState } from 'react';
import thumbnail_img from "../../assets/thumbnail_img.jpeg";


const EventsVideo = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4';
    // const thumbnailSrc = '/assets/video-thumbnail.jpg'; 

  return (
    <div className='w-full flex flex-col items-center justify-center gap-3 p-6 font-poppins mt-20'>
        <h2 className='lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2.2rem] text-[1.3rem] font-semibold text-primary'> Our Grandpals painted a Wall!
        </h2>
        {/* <p className='lg:text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] text-[1.4rem] font-semibold text-primary_nav lg:text-start '>All in One Place</p> */}

        <div className='w-full max-w-4xl aspect-video bg-primary relative rounded-[1.2rem] overflow-hidden shadow-lg '>
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <img
              src={thumbnail_img}
              alt='Video thumbnail'
              className='w-full h-full object-cover cursor-pointer'
              onClick={() => setIsPlaying(true)}
            />

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(true)}
              className='absolute inset-0 flex items-center justify-center'
            >
              <div className='bg-white/80 hover:bg-white text-primary rounded-full p-6 transition'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='w-10 h-10'
                >
                  <path d='M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z' />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <video
            src={videoSrc}
            controls
            autoPlay
            className='w-full h-full object-cover'
          />
        )}
        </div>
    </div>
  )
}

export default EventsVideo
