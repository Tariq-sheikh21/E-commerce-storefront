import React from 'react';
import exclusive_image from '../../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] w-11/12 md:w-10/12 xl:w-8/12 mx-auto flex items-center justify-between  shadow-lg overflow-hidden my-16 md:my-12 lg:my-8">
      <div className="offers-left flex-1 p-10 lg:p-14 flex flex-col justify-center">
        <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-2 md:mb-4 lg:mb-6">Exclusive</h1>
        <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-2 md:mb-4 lg:mb-6">Offers For You</h1>
        <p className="text-lg xl:text-2xl text-gray-900 mb-4 md:mb-6">ONLY FOR BEST SELLERS PRODUCTS</p>
        <button className="bg-red-500 text-white px-8 py-3 xl:px-12 xl:py-4 rounded-full text-lg xl:text-xl font-medium cursor-pointer hover:bg-red-600 transition duration-300 md:mt-6 lg:mt-8">
          Check Now
        </button>
      </div>
      <div className="offers-right flex-1 hidden lg:flex items-center justify-end">
        <img src={exclusive_image} alt="Exclusive Offer" className="w-2/3" />
      </div>
    </div>
  );
};

export default Offers;
