'use client'
import React, { useState } from 'react';
import Loading from '../Loading';
import AboutModal from '../../Features/NAVBAR/about-modal/AboutModal';
import BtnBg from '@/app/utils/btnBg';

const videoUrl = '/assets/videos/section-bg-video.mp4';

const Hero = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black/70">
      <div className="absolute top-6 left-6 z-20">
        <BtnBg btnpath='/Features'btnName='Features'/>
       
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
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center px-4">
          Welcome to Wena
        </h1>
        
        <Loading />
      </div>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default Hero;