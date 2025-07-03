'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/images/homeimg/Logo-1.svg';
import { IoCall, IoCallOutline } from 'react-icons/io5';
import box1 from '@/public/images/homeimg/box-1.jpg';
import asset1 from '@/public/images/homeimg/asset-21.jpeg';
import BtnBg from '@/app/utils/btnBg';
import TransitionLink from '@/app/utils/transitionLink';
import { FaAngleRight } from 'react-icons/fa';

const ImgShowComp = () => {
  const imgers = [box1, asset1];
  const textOptions = ['The Future', 'Your Dream', 'New House'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgers.length);
    }, 10000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex((prev) => (prev + 1) % textOptions.length);
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateY(0%)';
          void containerRef.current.offsetHeight; 
          containerRef.current.style.transition = 'transform 1s ease-in-out';
        }
      }, 1000); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (activeIndex + 1) % textOptions.length;

  return (
    <div className="relative h-[30rem] overflow-hidden">
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
            zIndex: 1,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-red-700/70 z-10" />

      <div className="relative z-20 md:px-14 px-3 pt-20 md:pt-0 h-full flex flex-col justify-start cursor-pointer text-white">
        <nav className="md:flex hidden  justify-between items-center border-b border-white/30 py-5">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div>
          <ul className="flex space-x-4 text-sm font-medium">
            {['home', 'about us', 'solutions', 'why wrc?', 'case studies', 'help center'].map(
              (item, index) => (
                <li key={index} className="text-[14px] font-bold capitalize">
                  {item}
                </li>
              )
            )}
          </ul>
          </div>
          <div className="flex space-x-3 items-center">
            <IoCallOutline  className="text-[hsl(28,94%,67%)]" size={35} />
            <div>
              <h1 className="text-[13px] font-bold">Call us now</h1>
              <p className="text-[15px]">+234 875 855</p>
            </div>
          </div>
        </nav>

        <div className="flex flex-col relative bottom-9">
          <h1 className="md:text-[95px] text-[65px] font-extrabold capitalize">Building</h1>
<div className="relative h-32 md:-translate-y-9 -translate-y-6 overflow-hidden md:text-[95px] text-[66px]  text-[#FAA45B] font-extrabold">
            <div
              ref={containerRef}
              className={`transition-transform duration-1000 ease-in`}
              style={{
                transform: isAnimating ? 'translateY(-50%)' : 'translateY(0%)',
              }}
            >
              <div className=" flex items-center">{textOptions[activeIndex]}</div>
              <div className=" flex items-center">{textOptions[nextIndex]}</div>
            </div>
          </div>
         <div className='relative -translate-y-6'>
          <div>
            <p className='text-[18px] text-[#FFFFFFB3] max-w-xl'>Honoring architectural vision, delivers exceptional execution and outstanding client services.</p>
          </div>
          <div className='flex gap-7 pt-6'>
            <div>
    <button
  className="bg-white gap-4 flex items-center text-[#B23E3E] font-bold 
  px-5 py-3 rounded-sm transition-all duration-300 transform hover:scale-105  group"
>
  <TransitionLink href="/Features">
    <div className="relative h-6 overflow-hidden">
      <div className="transition-transform duration-800 ease-in-out group-hover:-translate-y-6">
        <span className="block h-6">Go to Wena</span>
        <span className="block h-6">Features</span>
      </div>
    </div>
  </TransitionLink>
  <FaAngleRight className="text-lg" />
</button>



            </div>
              <div className="flex space-x-3 items-center">
            <IoCallOutline  className="text-[#FAA45B]" size={35} />
            <div>
              <h1 className="text-[13px] font-bold">Call us now</h1>
              <p className="text-[15px]">+234 875 855</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgShowComp;