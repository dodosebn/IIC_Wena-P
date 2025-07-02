'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/images/homeimg/Logo-1.svg';
import { IoCall } from 'react-icons/io5';
import box1 from '@/public/images/homeimg/box-1.jpg';
import asset1 from '@/public/images/homeimg/asset-21.jpeg';

const ImgShowComp = () => {
  const imgers = [box1, asset1];
  const textOptions = ['The Features', 'Your Dream'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgers.length);
    }, 10000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTextIndex((prev) => (prev + 1) % textOptions.length);
        setIsTransitioning(false);
      }, 1000); // Transition duration
    }, 5000);
    return () => clearInterval(textInterval);
  }, []);

  const nextTextIndex = (activeTextIndex + 1) % textOptions.length;

  return (
    <div className="relative h-[30rem] overflow-hidden">
      {/* Backgrounds */}
      {imgers.map((img, index) => (
       <div
  key={index}
  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
    index === currentIndex ? 'opacity-100 scale-100 animate-zoom-forward' : 'opacity-0 scale-110'
  }`}
  style={{
    backgroundImage: `url(${img.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1
  }}
/>

      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-red-700/70 z-10" />

      {/* Content */}
      <div className="relative z-20 px-14 h-full flex flex-col justify-start text-white">
        <nav className="flex justify-between items-center border-b border-white/30 py-5">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <ul className="flex space-x-4 text-sm font-medium">
            {['home', 'about us', 'solutions', 'why wrc?', 'case studies', 'help center'].map(
              (item, index) => (
                <li key={index} className="text-[14px] font-bold capitalize">
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex space-x-3 items-center">
            <IoCall className="text-[#FAA45B]" size={35} />
            <div>
              <h1 className="text-[13px] font-bold">Call us now</h1>
              <p className="text-[15px]">+234 875 855</p>
            </div>
          </div>
        </nav>

        {/* ACTUAL SLIDE-UP TEXT */}
        <div className="flex flex-col mt-10 relative">
          <h1 className="text-9xl font-extrabold">Building</h1>

          <div className="relative h-32 overflow-hidden text-9xl font-extrabold mt-4">
            {/* Current text - Slide out upwards */}
            <div
              className={`absolute w-full transition-transform duration-1000 ${
                isTransitioning ? '-translate-y-full' : 'translate-y-0'
              }`}
              style={{ top: 0 }}
            >
              <div className="h-32 flex items-center">
                {textOptions[activeTextIndex]}
              </div>
            </div>

            <div
              className={`absolute w-full transition-transform duration-1000 ${
                isTransitioning ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ top: 0 }}
            >
              <div className="h-32 flex items-center">
                {textOptions[nextTextIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ImgShowComp;