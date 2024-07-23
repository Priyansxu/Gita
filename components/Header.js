import React from "react";
import Image from 'next/image';
import headerImage from '../public/header.jpg';

const Header = () => {
  return (
    <header className="relative text-center my-8 px-4">
      <div className="fixed left-0 top-0 w-full max-w-5xl bg-deepBlue border-b border-deepBlue backdrop-blur-2xl z-10 mb-20">
        <p className="text-center text-saffron text-xl lg:text-2xl font-serif py-2">
          Bhagavad&nbsp;Gita
        </p>
      </div>
      <div className="relative mx-auto">
        <Image 
          src={headerImage} 
          alt="Bhagavad Gita" 
          layout="responsive" 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 bottom-0 h-32" />
      </div>
      <p className="mt-4 px-4 font-sans text-deepBlue text-lg italic">
        "In the midst of the battle, Krishna imparts timeless wisdom to guide the soul."
      </p>
    </header>
  );
};

export default Header;