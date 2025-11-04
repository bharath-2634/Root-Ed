import React, { useState } from 'react';
import thumbnail_img from "../../assets/thumbnail_img.jpg";
import white_grid_bg from "../../assets/white-grid-bg.jpg";

const AboutHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4';

  return (
    <div className="w-full relative flex flex-col items-center justify-center gap-3 font-poppins">
      {/* Background section */}
      <div
        className="w-full h-[30rem]  bg-center"
        style={{ backgroundImage: `url(${white_grid_bg})` }}
      >

        <div className='w-full flex flex-col items-center justify-center gap-6 p-3'>
          <h2 className='lg:text-[2.4rem] md:text-[2.1rem] sm:text-[2rem] text-[2rem] font-semibold text-primary_nav text-center m-6'>About <span className='text-primary'>Root-Ed</span></h2>
          <p className='text-gray-600 text-[.8rem] sm:text-[1.2rem] md:text-[1rem] xl:text-[1.2rem] leading-relaxed text-center w-[90%]'>
            Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
          </p>
        </div>
      </div>

      

      {/* Video Section */}
      <div className="absolute xl:top-[115%] sm:top-[100%] top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-4xl aspect-video bg-primary relative rounded-[1.2rem] overflow-hidden shadow-lg">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <img
                src={thumbnail_img}
                alt="Video thumbnail"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsPlaying(false)}
              />

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 hover:bg-white text-primary rounded-full p-6 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-10 h-10"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
