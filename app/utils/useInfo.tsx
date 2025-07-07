'use client';
import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import Image from 'next/image';

import sample_1 from '@/public/assets/images/temp/sample-1.jpg';
import laptop from '@/public/images/homeimg/laptop.avif';
import bookBacking from '@/public/images/homeimg/book_backing.avif';
import { UseInfoProps } from '../types';

const UseInfo: React.FC<UseInfoProps> = ({
  imgforPhotocite1,
  describp1,
  describp2,
  describp3,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <CiLock size={32} />,
      title: 'End-to-end encryption',
      description: 'Your data is securely encrypted and always in your control.',
    },
    {
      icon: <CiLock size={32} />,
      title: 'Private cloud sync',
      description: 'Sync notes across devices without compromising privacy.',
    },
    {
      icon: <CiLock size={32} />,
      title: 'No tracking',
      description: 'We don’t track your activity or share your data.',
    },
    {
      icon: <CiLock size={32} />,
      title: 'Global compliance',
      description: 'Fully compliant with major privacy regulations.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-16 text-[#2c2b27]">
      {imgforPhotocite1 && (
        <div>
          <Image src={imgforPhotocite1} alt="hero image" className="w-full object-cover" />
        </div>
      )}

      <div className="bg-gradient-to-r from-[#605654] to-[#877e6f] text-white px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-6 max-w-md">
          <h1 className="text-5xl font-bold leading-tight">reMarkable<br />Paper Pro</h1>
          <p className="text-lg">Experience a paper-like feel with cutting-edge color display and advanced tools.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md">Buy Now</button>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={bookBacking} alt="product" className="w-full object-contain" />
        </div>
      </div>

      <div className="space-y-8 leading-relaxed text-center text-[#2c2b27] px-4 md:px-10">
        {describp1 && <p>{describp1}</p>}
        {describp2 && <p>{describp2}</p>}
        {describp3 && <p>{describp3}</p>}
      </div>

      <div className="w-full text-white flex flex-col md:flex-row gap-4 items-stretch">
        <div className="w-full md:w-1/2 space-y-6 px-6 md:px-20 py-16 bg-[#2c2b27]">
          <h2 className="text-4xl font-bold">A true color ink display</h2>
          <p>Enjoy the vibrant color experience while maintaining the paper-like reading and writing feel.</p>
        </div>
        {imgforPhotocite1 && (
          <div className="w-full md:w-1/2">
            <Image src={imgforPhotocite1} alt="feature" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="w-full text-black flex flex-col md:flex-row gap-4 items-stretch">
        {imgforPhotocite1 && (
          <div className="w-full md:w-1/2 bg-[radial-gradient(circle_at_left,_#92887c_0%,_#92887c_50%,_#cccabe_100%)] flex justify-center items-center py-10">
            <Image src={imgforPhotocite1} alt="feature" className="w-[70%] max-w-[500px] object-contain" />
          </div>
        )}
        <div className="w-full md:w-1/2 space-y-6 px-6 md:px-20 py-16 bg-[radial-gradient(circle_at_left,_#cccabe_0%,_#cccabe_50%,_#92887c_100%)]">
          <h2 className="text-4xl font-bold">Read in comfort. Day or night.</h2>
          <p>Thanks to its adaptive light and anti-glare screen, your eyes stay protected any time of the day.</p>
          <p>Thanks to its adaptive light and anti-glare screen, your eyes stay protected any time of the day.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-14 items-start">
        <div className="flex-2 space-y-6">
          <h2 className="text-4xl font-bold">Data protection and privacy</h2>
          <p>Our technology ensures your data is secure, always.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{item.icon}</div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {imgforPhotocite1 && (
          <div className="flex-1">
            <Image src={imgforPhotocite1} alt="privacy visual" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="flex flex-col bg-[#2c2b29] text-white md:flex-row items-center">
        <div className="max-w-[32rem] flex-2">
          <Image src={laptop} alt="final-cta" className="w-full rounded-md" />
        </div>
        <div className="px-10 py-10 w-full md:w-[20rem] flex-1">
          <h2 className="text-3xl font-bold">64GB for limitless note-taking</h2>
          <p className="pt-4">Personalize your reMarkable Paper Pro to suit your workflow and style.</p>
        </div>
      </div>

      {imgforPhotocite1 && (
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-start min-h-[20rem]"
          style={{ backgroundImage: `url(${imgforPhotocite1.src})` }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 max-w-xl p-8 space-y-4 bg-black/50">
            <h2 className="text-4xl font-bold">Stay organized</h2>
            <p className="text-lg max-w-md">Keep all your notes, sketches, and files in one place, accessible across devices.</p>
          </div>
        </div>
      )}

      <div className="w-full">
        {expandedIndex !== null ? (
          <div className="relative w-full">
            <Image
              src={sample_1}
              alt={`expanded-${expandedIndex}`}
              className="w-full h-auto max-h-[90vh] object-cover"
            />
            <button
              className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-md"
              onClick={() => setExpandedIndex(null)}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setExpandedIndex(i)}>
                <div className="relative aspect-square overflow-hidden shadow-md">
                  <Image
                    src={sample_1}
                    alt={`sample-${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col bg-[#b4a8aa] text-white md:flex-row items-center justify-between px-10 py-14 gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Make it your own</h2>
          <p className="max-w-md">Personalize your reMarkable Paper Pro to suit your workflow and style.</p>
        </div>
        <Image src={laptop} alt="final-cta" className="w-full md:w-1/3 rounded-md" />
      </div>
    </div>
  );
};

export default UseInfo;
