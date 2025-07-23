'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { TfiFacebook } from 'react-icons/tfi';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoPinterest } from 'react-icons/io5';
import { FaInstagramSquare } from 'react-icons/fa';
import { toast } from 'react-toastify';

import bigHero from '@/public/latest-imgs/new-space-update.jpg';
import ffirstTwo from '@/public/latest-imgs/updated-two-left.jpg';
import tfirstTwo from '@/public/latest-imgs/updated-two-right.jpg';
import fFour from '@/public/latest-imgs/third4.jpg';
import foFour from '@/public/latest-imgs/prob1.jpg';
import new41 from '@/public/latest-imgs/new41.jpg';
import new42 from '@/public/latest-imgs/new42.jpg';
const InfoTwo = () => {
  const ref = useRef(null);
  const footerRef = useRef(null);

  // Hero scroll-fold effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const fourr = [
    {
      id: 1,
      img: new41,
      spandescrip: 'PROPERTY',
      maindescrip: 'On the market in Helsinki: Nordic living in an Art Nouveau package',
    },
    {
      id: 2,
      img: new42,
      spandescrip: 'INTERIORS',
      maindescrip: 'The July: a hotel-with-benefits in central London',
    },
    {
      id: 3,
      img: fFour,
      spandescrip: 'ART, NEWS',
      maindescrip: 'Ai Weiwei headlines a new open-air sculpture exhibition in London',
    },
    {
      id: 4,
      img: foFour,
      spandescrip: 'PROPERTY',
      maindescrip: "A contemporary Palladian pile stuffed with surprises hits the market for £6m",
    },
  ];

  const firstTwo = [
    {
      id: 1,
      img: ffirstTwo,
      spanDescrib: 'Property',
      mainDescrib: 'A postmodern desert hideaway lists outside Phoenix for $2.3m',
    },
    {
      id: 2,
      img: tfirstTwo,
      spanDescrib: 'Interior',
      mainDescrib: "Interior inspiration to kick-start your week",
    },
  ];

  const iconsinfooter = [
    { key: 1, icon: <TfiFacebook size={24} />, name: 'Facebook' },
    { key: 2, icon: <FaXTwitter size={24} />, name: 'Twitter' },
    { key: 3, icon: <FaInstagramSquare size={24} />, name: 'Instagram' },
    { key: 4, icon: <IoLogoPinterest size={24} />, name: 'Pinterest' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div ref={ref} className="relative w-full md:h-[35rem] h-[25rem] overflow-hidden">
        <motion.div
          style={{
            y,
            scale,
            opacity,
            rotateX,
            transform: 'perspective(1000px)',
            transformOrigin: 'bottom center',
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image src={bigHero} alt="Main property image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </motion.div>

        <div className="absolute pt-12 inset-0 flex justify-center items-center z-20 px-4 text-center">
          <div className="flex flex-col items-center space-y-4 px-2 lg:px-20">
            <h1 className="md:text-[36px] text-[25px] text-white mb-4 font-medium leading-tight tracking-[1px]">
Herzog & de Meuron complete a grand hotel project in their home town            </h1>
           
            <div className="sm:px-4 md:px-6 lg:px-40">
   <p className="text-[17px] text-white tracking-wide leading-relaxed text-center max-w-3xl">
Basel stalwart Les Trois Roi has undergone a dramatic refurb courtesy of the architectural duo

            </p>
</div>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mb-20">
          {firstTwo.map((item) => (
            <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[5/3] w-full mb-4 overflow-hidden">
                  <Image src={item.img} alt={item.mainDescrib} fill className="object-cover" />
                </div>
                <p className="text-[11px] text-start uppercase tracking-widest text-gray-500 mb-2 font-medium">
                  {item.spanDescrib}
                </p>
                <h2 className="text-[18px] text-start leading-relaxed font-serif text-gray-900">
                  {item.mainDescrib}
                </h2>
              </div>
          ))}
        </div>

        <hr className="border-gray-200 my-14" />

        {/* Most Popular Section */}
        <div className="mb-20 text-center">
          <h1 className="text-[16px] font-serif tracking-[2px] text-black mb-10">
            MOST POPULAR STORIES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
            {fourr.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[5/3] w-full mb-4 overflow-hidden">
                  <Image src={item.img} alt={item.maindescrip} fill className="object-cover" />
                </div>
                <p className="text-[11px] text-start uppercase tracking-widest text-gray-500 mb-2 font-medium">
                  {item.spandescrip}
                </p>
                <h2 className="text-[18px] text-start leading-relaxed font-serif text-gray-900">
                  {item.maindescrip}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div ref={footerRef} className="relative w-full md:h-[35rem] h-[25rem] overflow-hidden">
        <motion.div
          style={{
            scale,
            opacity,
            rotateX,
            transform: 'perspective(1000px)',
            transformOrigin: 'bottom center',
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image src={bigHero} alt="Main property image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </motion.div>
        <div className="absolute inset-0 flex justify-center items-center z-20 px-4 text-center pt-12">
          <div className="w-full max-w-4xl">
            <h1 className="md:text-[40px] text-[25px]  font-medium text-white font-serif tracking-[3px] leading-tight">
              Sign up to our weekly <br className='hidden md:flex' /> newsletter
            </h1>
            <p className="text-[18px] font-medium text-white tracking-[0.5px] mb-4">
              Never miss a thing
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors text-sm md:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-[12px] font-serif font-semibold tracking-[2px] text-black mb-10">
          CONNECT WITH US
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 px-14 md:px-30 lg:px-40 xl:px-50 md:gap-2 items-center gap-7">
          {iconsinfooter.map((item) => {
            const handleClick = () => {
              const shareUrl = encodeURIComponent(window.location.href);
              const mediaUrl = encodeURIComponent(
                `${window.location.origin}/_next/image?url=${bigHero.src}&w=1200&q=75`
              );
              const description = encodeURIComponent('Check out this beautiful property!');

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
                  window.open(
                    `https://www.pinterest.com/pin/create/button/?url=${shareUrl}&media=${mediaUrl}&description=${description}`,
                    '_blank'
                  );
                  toast.success('Sharing on Pinterest...');
                  break;
                case 'instagram':
                  toast.info('Instagram sharing is only available via the mobile app.');
                  break;
                default:
                  toast.error('Unsupported platform.');
                  break;
              }
            };

            return (
              <button
                key={item.key}
                onClick={handleClick}
                aria-label={`Share on ${item.name}`}
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
