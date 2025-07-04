'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import BtnBg from '@/app/utils/btnBg';
import box1 from '@/public/images/homeimg/box-1.jpg';
import asset1 from '@/public/images/homeimg/asset-21.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="relative h-[80px] md:h-[120px] w-full overflow-hidden text-[#FAA45B] font-extrabold text-[20px] md:text-[95px]">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute w-full text-center"
          >
            {textOptions[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
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
    <div className="relative w-full h-screen overflow-hidden bg-black/70">
      <div className="absolute top-6 left-6 z-20">
        <BtnBg btnpath="/Features" btnName="Features" />
      </div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white gap-8">
        <h1 className="md:text-[95px] text-[50px] font-extrabold capitalize relative top-7 md:top-0">
          Africa
        </h1>

        <HeroTextSwitcher textOptions={textOptions} />

        {/* <Loading /> */}
      </div>
    </div>
  );
};

export default Hero;
