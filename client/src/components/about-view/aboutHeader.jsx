import React, { useState } from 'react';
import thumbnail_img from "../../assets/thumbnail_img.jpeg";
import white_grid_bg from "../../assets/white-grid-bg.jpg";

const AboutHeader = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4';

  return (
    <div className="w-full flex flex-col items-center justify-center font-poppins">
      {/* Background section */}
      <div
        className="w-full py-12 md:py-16 lg:py-20 bg-center"
        style={{ backgroundImage: `url(${white_grid_bg})` }}
      >
        <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-8'>
          <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-primary_nav text-center'>About <span className='text-primary'>Root-Ed</span></h2>
          <p className='text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-4xl'>
            Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center px-4 sm:px-8 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-4xl aspect-video bg-primary relative rounded-2xl overflow-hidden shadow-2xl">
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
