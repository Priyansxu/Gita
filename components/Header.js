import React from "react";
import Image from 'next/image';
import headerImage from '../public/header.jpg';
import fluteImage from '../public/flute.png';

const Header = () => {
  return (
    <header className="relative text-center my-8 px-4">
      <div className="fixed left-0 top-0 w-full max-w-5xl bg-deepBlue border-b border-deepBlue backdrop-blur-2xl z-10 mb-20">
        <p className="text-center text-saffron text-2xl lg:text-2xl font-serif py-2 flex items-center justify-center">
          Bhagavad&nbsp;Gita
          <Image 
            src={fluteImage} 
            alt="Flute" 
            width={50} 
            height={50} 
            className="ml-2 object-contain"
          />
        </p>
      </div>
      <div className="pt-8">
      <div className="relative mx-auto my-7 p-3 shadow-lg">
        <Image 
          src={headerImage} 
          alt="Bhagavad Gita" 
          layout="responsive" 
          className="object-cover rounded-lg shadow-md"
        />
      </div>
      <p className="mt-4 px-4 font-sans text-deepBlue text-lg italic">
        "In the midst of the battle, Krishna imparts timeless wisdom to guide the soul."
      </p>
    </div>
    </header>
  );
};

export default Header;