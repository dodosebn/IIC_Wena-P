'use client';

import React, { useEffect, useState } from 'react';

import box1 from '@/public/images/homeimg/box-1.jpg';
import asset1 from '@/public/images/homeimg/asset-21.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionLink from '@/app/utils/transitionLink';
import { FaAngleRight } from 'react-icons/fa';

const videoUrl = '/assets/videos/section-bg-video.mp4';

const HeroTextSwitcher = ({ textOptions }: { textOptions: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % textOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textOptions.length]);

  return (
    <div className="relative w-full text-[#FAA45B] font-extrabold text-[45px] 
    md:text-[90px] leading-tight h-[5.5rem] md:min-h-[10rem]">

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="w-full text-start"
        >
          {textOptions[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const imgers = [box1, asset1];
  const textOptions = [
    '1.5 Billion People',
    '60% Under 25 Years Old',
    'Booming Tech Ecosystem',
    'The Next Billion Market',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgers.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  px-8 w-full h-screen overflow-hidden bg-black/70">


      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

<div className="relative max-w-7xl mx-auto md:px-12 z-20 flex items-center justify-center md:justify-start h-full w-full text-white">
  <div className="flex flex-col items-start gap-8 w-full">
   <h1 className="md:text-[90px] text-[45px] font-black capitalize relative top-7 md:top-0 tracking-tight leading-none">
  Africa
</h1>


    <HeroTextSwitcher textOptions={textOptions} />

    <div className="mt-8">
      <button className="bg-white gap-4 flex items-center text-black font-bold px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 group">
        <TransitionLink href="/Features">
          <div className="relative h-6 overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
              <span className="block h-6">Wena Website</span>
              <span className="block h-6">Proceed</span>
            </div>
          </div>
        </TransitionLink>
        <FaAngleRight className="text-lg" />
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
