import React from 'react';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#fde1ff] to-[#eaffea22] flex flex-col xl:flex-row">
      {/* Left side content */}
      <div className="flex-1 flex flex-col justify-center gap-5 pl-6 md:pl-24 xl:pl-40 line-height-1.1">
        <h2 className="text-[#090909] text-3xl xl:text-4xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div className="flex items-center gap-5">
          <p className="text-[#171717] text-6xl xl:text-8xl font-bold">new</p>
          <img src={hand_icon} alt="Hand Icon" className="w-14 xl:w-20 hidden md:block" />
        </div>
        <p className="text-[#171717] text-6xl xl:text-8xl font-bold">collections</p>
        <p className="text-[#171717] text-6xl xl:text-8xl font-bold">for everyone</p>
        <div className="flex items-center justify-center gap-4 w-36 sm:w-80 md:w-80 xl:w-80 h-12 xl:h-18 rounded-full mt-8 bg-red-500 text-white text-lg xl:text-xl font-medium cursor-pointer hover:bg-red-600 transition duration-300">
            <span>Latest Collections</span>
              <img src={arrow_icon} alt="Arrow Icon" className="w-4 h-4 xl:w-6 xl:h-6" />
        </div>


      </div>

      {/* Right side content */}
      <div className="flex-1 flex justify-center items-center">
        {/* Conditional rendering of the image based on screen size */}
        <img src={hero_image} alt="Hero" className="w-64 xl:w-full max-w-lg hidden md:block md:w-80" />
      </div>
    </div>
  );
};

export default Hero;
