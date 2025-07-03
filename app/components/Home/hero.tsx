'use client'
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../Loading';
import BtnBg from '@/app/utils/btnBg';
import box1 from '@/public/images/homeimg/box-1.jpg';
import asset1 from '@/public/images/homeimg/asset-21.jpeg';
const videoUrl = '/assets/videos/section-bg-video.mp4';

const Hero = () => {
   const imgers = [box1, asset1];
const textOptions = [
  '1.5 Billion People',
  '60% Under 25 Years Old',
  'Booming Tech Ecosystem',
  'The Next Billion Market',
];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="relative w-full h-screen overflow-hidden bg-black/70">
      <div className="absolute top-6 left-6 z-20">
        <BtnBg btnpath='/features'btnName='Features'/>
       
      </div>
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-8">
        {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center px-4">
          Welcome to Wena
        </h1> */}
        
<h1 className="md:text-[95px] text-[50px] font-extrabold capitalize relative top-7 md:top-0">Africa</h1>

          <div className="relative md:-translate-y-6 translate-y-6
            h-[80px] md:h-[120px] overflow-hidden text-[#FAA45B] font-extrabold">
            <div
              ref={containerRef}
              className="transition-transform duration-1000 ease-in"
              style={{
                transform: isAnimating ? 'translateY(-50%)' : 'translateY(0%)',
              }}
            >
               <div className="h-[80px] md:h-[120px] text-[20px] md:text-[95px] flex items-center 
               justify-center w-full whitespace-nowrap">
              {textOptions[activeIndex]}
            </div>
            <div className="h-[80px] md:h-[120px] text-[20px] md:text-[95px] flex items-center justify-center
             w-full whitespace-nowrap">
              {textOptions[nextIndex]}
            </div>
            </div>
          </div>



        {/* <Loading /> */}
      </div>

      {/* <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} /> */}
    </div>
  );
};

export default Hero;