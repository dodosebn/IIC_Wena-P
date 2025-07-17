import React from 'react';
import Image from 'next/image';
import { TfiFacebook } from 'react-icons/tfi';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoPinterest } from 'react-icons/io5';
import { FaInstagramSquare } from "react-icons/fa";

// Import your images
import bigHero from '@/public/latest-imgs/prob1.jpg';
import ffirstTwo from '@/public/latest-imgs/1firsttwo.jpg';
import tfirstTwo from '@/public/latest-imgs/2firsttwo.jpg';
import fFour from '@/public/latest-imgs/1four.jpg';
import twFour from '@/public/latest-imgs/2four.jpg';
import thFour from '@/public/latest-imgs/2info.jpg';
import foFour from '@/public/latest-imgs/4four.jpg';

const InfoTwo = () => {
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
    { key: 3, icon: <FaInstagramSquare  size={22} strokeWidth={1} />, name: 'Instagram' },
    { key: 4, icon: <IoLogoPinterest size={22} strokeWidth={1} />, name: 'Pinterest' },
  ];

  return (
    <>
       <div className="relative w-full md:h-[50rem] h-[25rem] ">
        <div className="absolute inset-0 bg-black/25 z-10" />

        <Image
          src={bigHero}
          alt="Main property image"
          layout="fill"
          objectFit="cover"
          className="relative z-0 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute pt-12 inset-0 flex justify-center mx-auto z-20 px-4 
        sm:px-6 lg:px-8 text-center items-center">
  <div className="w-full max-w-4xl">

            <div>
              <h1 className="text-[36px] font-semibold text-[#f1f1f1] font-serif tracking-[3px] md:block hidden mb-4 leading-tight">
                <span className="block">A contemporary Palladian pile stuffed with</span>
                <span className="block">surprises hits the market for £6m</span>
              </h1>
              <h1 className="text-[27px] font-semibold text-[#f1f1f1]  font-serif md:hidden block mb-4 leading-tight">
                A contemporary Palladian pile stuffed with surprises hits the market for £6m
              </h1>
            </div>
            <div>
              <p className='text-[18px] text-white md:block hidden tracking-[0.5px] mb-4 leading-widest'>
                <span className="block">The Gloucestershire property has handcrafted</span>
                <span className="block">vintage details, plus all the mod cons</span>
              </p>
              <p className='text-[18px] text-white md:hidden block tracking-[0.5px] mb-4 leading-widest'>
                The Gloucestershire property has handcrafted vintage details, plus all the mod cons
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-16">
        {/* Two-Column Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {firstTwo.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-72 w-full mb-4 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.mainDescrib}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-medium">
                {item.spanDescrib}
              </p>
              <h2 className="text-[18px]  font-serif  text-gray-900 leading-tight">
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
                <div className="relative h-64 sm:h-72 w-full mb-4 soverflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.maindescrip}
                    layout="fill"
                    objectFit="cover"
                    // className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
               <p className="text-[11px] text-start uppercase tracking-widest text-gray-500 mb-2 font-medium">
                {item.spandescrip}
              </p>
              <h2 className="text-[18px] text-start  font-serif  text-gray-900 leading-tight">
                {item.maindescrip}
              </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}

 <div className="relative w-full md:h-[50rem] h-[25rem] ">
        <div className="absolute inset-0 bg-black/25 z-10" />

        <Image
          src={bigHero}
          alt="Main property image"
          layout="fill"
          objectFit="cover"
          className="relative z-0 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex justify-center mx-auto z-20 px-4 
        sm:px-6 lg:px-8 pt-12  text-center items-center">
  <div className="w-full max-w-4xl">
              <h1 className="text-[36px] font-semibold text-white font-serif tracking-[3px]
               leading-tight">
                            Sign up to our weekly newsletter

              </h1>
              <p className='text-[18px] text-white tracking-[0.5px] mb-4 leading-widest'>
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
          {iconsinfooter.map(item => (
            <div key={item.key} className="flex flex-col items-center group cursor-pointer">
              <div className="text-3xl md:text-4xl text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">
                {item.icon}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-gray-700 font-medium">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfoTwo;
