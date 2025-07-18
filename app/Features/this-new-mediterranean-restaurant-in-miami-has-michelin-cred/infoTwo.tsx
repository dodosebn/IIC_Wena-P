'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { TfiFacebook } from 'react-icons/tfi';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoPinterest } from 'react-icons/io5';
import { FaInstagramSquare } from "react-icons/fa";

import bigHero from '@/public/latest-imgs/prob1.jpg';
import ffirstTwo from '@/public/latest-imgs/1firsttwo.jpg';
import tfirstTwo from '@/public/latest-imgs/2firsttwo.jpg';
import fFour from '@/public/latest-imgs/1four.jpg';
import twFour from '@/public/latest-imgs/2four.jpg';
import thFour from '@/public/latest-imgs/2info.jpg';
import foFour from '@/public/latest-imgs/4four.jpg';
        import { toast } from 'react-toastify';

const InfoTwo = () => {
  const ref = useRef(null);
  const footerRef = useRef(null);  // const [shareMessage, setShareMessage] = useState("");

  // Hero scroll-fold effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -25]); 
  const skewY = useTransform(scrollYProgress, [1, 1], [1, 1]); 

  // Footer zoom effect with fold
  const { scrollYProgress: footerScroll } = useScroll({
    target: footerRef,
    offset: ['start center', 'end start'],
  });


  const fourr = [
    { id: 1, img: fFour, spandescrip: 'INTERIORS', maindescrip: 'Interior inspiration to Kick-start your week' },
    { id: 2, img: twFour, spandescrip: 'INTERIORS', maindescrip: 'Humble Chicken serves up an intimate, new look in London' },
    { id: 3, img: thFour, spandescrip: 'PROPERTY', maindescrip: 'The Woodstock sanctuary that inspired Bob Dylan is for sale' },
    { id: 4, img: foFour, spandescrip: 'TRAVEL', maindescrip: "Nordic minimalism comes to Warsaw's Old Town at the Puro" },
  ];

  const firstTwo = [
    { id: 1, img: ffirstTwo, spanDescrib: 'ART, NEWS', mainDescrib: 'Ai Weiwei headlines a new open-air sculpture exhibition in London' },
    { id: 2, img: tfirstTwo, spanDescrib: 'ART, NEWS', mainDescrib: "Artistic interventions perk up Ibiza's summer cultural calendar" },
  ];

  const iconsinfooter = [
    { key: 1, icon: <TfiFacebook size={22} strokeWidth={1} />, name: 'Facebook' },
    { key: 2, icon: <FaXTwitter size={22} strokeWidth={1} />, name: 'Twitter' },
    { key: 3, icon: <FaInstagramSquare size={22} strokeWidth={1} />, name: 'Instagram' },
    { key: 4, icon: <IoLogoPinterest size={22} strokeWidth={1} />, name: 'Pinterest' },
  ];

  return (
    <>
      {/* Hero Section with 3D Fold Effect */}
      <div ref={ref} className="relative w-full md:h-[35rem] h-[25rem] overflow-hidden">
        <motion.div
          style={{ 
            y,
            scale,
            opacity,
            rotateX,
            skewY,
            transformPerspective: 1000, // Enables 3D space
            transformOrigin: "bottom center", // Changed to fold from bottom
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src={bigHero}
            alt="Main property image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#000]/30 z-10" />
        </motion.div>

        <div className="absolute pt-12 inset-0 flex justify-center mx-auto z-20 px-4 sm:px-6 lg:px-8 text-center items-center">
          <div className="w-full max-w-4xl">
            <div>
              <h1 className="text-[34px] text-[#f1f1f1] font-serif tracking-[3px] md:block hidden mb-4 leading-tight">
                <span className="block">A contemporary Palladian pile stuffed with</span>
                <span className="block">surprises hits the market for £6m</span>
              </h1>
              <h1 className="text-[25px] text-[#f1f1f1] font-serif md:hidden block mb-4 leading-tight">
                A contemporary Palladian pile stuffed with surprises hits the market for £6m
              </h1>
            </div>
            <div>
              <p className="text-[18px] text-white md:block hidden tracking-[0.5px] mb-4 leading-widest">
                <span className="block">The Gloucestershire property has handcrafted</span>
                <span className="block">vintage details, plus all the mod cons</span>
              </p>
              <p className="text-[18px] text-white md:hidden block tracking-[0.5px] mb-4 leading-widest">
                The Gloucestershire property has handcrafted vintage details, plus all the mod cons
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Stories */}
      <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {firstTwo.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-72 w-full mb-4 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.mainDescrib}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-medium">
                {item.spanDescrib}
              </p>
              <h2 className="text-[18px] font-serif text-gray-900 leading-tight">
                {item.mainDescrib}
              </h2>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 my-14" />

        {/* Most Popular Stories */}
        <div className="mb-20 text-center">
          <h1 className="text-[16px] font-serif tracking-[2px] text-[#000] mb-10">
            MOST POPULAR STORIES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {fourr.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative h-64 sm:h-72 w-full mb-4 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.maindescrip}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-start uppercase tracking-widest text-gray-500 mb-2 font-medium">
                  {item.spandescrip}
                </p>
                <h2 className="text-[18px] text-start font-serif text-gray-900 leading-tight">
                  {item.maindescrip}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section with 3D Fold Effect */}
      <div ref={footerRef} className="relative w-full md:h-[35rem] h-[25rem] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.div 
          style={{ 
            scale: scale, 
            opacity: opacity,
            rotateX: rotateX,
            skewY: skewY,
            transformPerspective: 1000,
            transformOrigin: "bottom center", // Folds from the bottom
          }} 
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src={bigHero}
            alt="Main property image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 flex justify-center mx-auto z-20 px-4 sm:px-6 lg:px-8 pt-12 text-center items-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-[42px] font-medium  text-white font-serif tracking-[3px] leading-tight">
              Sign up to our weekly <br /> newsletter
            </h1>
            <p className="text-[18px] font-medium text-white tracking-[0.5px] mb-4 leading-widest">
              Never miss a thing
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors text-sm md:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-[12px] font-serif font-semibold tracking-[2px] text-[#000] mb-10">
          CONNECT WITH US
        </h1>
        <div className="flex justify-center space-x-8 md:space-x-12">

{iconsinfooter.map(item => {
  const handleClick = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const mediaUrl = encodeURIComponent(`${window.location.origin}/_next/image?url=${bigHero.src}&w=1200&q=75`);
    const description = encodeURIComponent("Check out this beautiful property!");

    switch (item.name.toLowerCase()) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
        toast.success('Sharing on Facebook...');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, '_blank');
        toast.success('Sharing on Twitter...');
        break;
      case 'pinterest':
        window.open(`https://www.pinterest.com/pin/create/button/?url=${shareUrl}&media=${mediaUrl}&description=${description}`, '_blank');
        toast.success('Sharing on Pinterest...');
        break;
      case 'instagram':
        toast.info("Instagram sharing is only available via the mobile app.");
        break;
      default:
        toast.error("Unsupported platform.");
        break;
    }
  };

  return (
    <button
      key={item.key}
      onClick={handleClick}
      className="flex flex-col items-center group cursor-pointer focus:outline-none"
    >
      <div className="text-3xl md:text-4xl text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
        {item.icon}
      </div>
      <div className="text-[11px] uppercase tracking-widest text-gray-700 font-medium">
        {item.name}
      </div>
    </button>
  );
})}

        </div>
      </div>
    </>
  );
};

export default InfoTwo;