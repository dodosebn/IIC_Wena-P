'use client';
import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import Image from 'next/image';

import pabloImg from '@/public/assets/images/temp/download.webp';
import sample_1 from '@/public/assets/images/temp/sample-1.jpg';
import laptop from '@/public/images/homeimg/laptop.avif';
import bookBacking from '@/public/images/homeimg/book_backing.avif';
const InfoOne = () => {
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
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-7 space-y-5">
      {/* Hero Image */}
      <div>
        <Image src={pabloImg} alt="hero image" className="w-full" />
      </div>

      {/* CTA Section */}
      <div className="bg-[linear-gradient(to_right,_#605654,_#c2b4b1)] text-white p-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 max-w-[15rem]">
          <h1 className="text-4xl font-bold">
            reMarkable <br />
            Paper Pro
          </h1>
          <p className="text-lg">
            Experience a paper-like feel with cutting-edge color display and advanced tools.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md">
            Buy Now
          </button>
        </div>
        <Image src={bookBacking} alt="product" className="w-full md:w-1/2" />
      </div>

      {/* Description Section */}
      <div className="text-[#2c2b27] space-y-6 flex flex-col px-8 items-center justify-center leading-relaxed">
        <p className="mb-6">
          A recipient of six Michelin stars over his career, the American chef Michael White is a safe pair of hands
          in the kitchen. This fact, along with a burnished dining room in an olive-grove palette, is what makes Mika a
          boon to the tidy white streets of Coral Gables in Miami. The Riviera-inspired restaurant, with its menu of
          seafood pastas and crudos, is a new hub on Ponce de Leon Boulevard, a historic palm-lined artery through town
          with Mediterranean flavour.
        </p>
        <p className="mb-6">
          The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and
          wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the
          lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three
          cascading crystal chandeliers.
        </p>
        <p className='w-1/2'>
          The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and
          wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the
          lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three
          cascading crystal chandeliers.
        </p>
      </div>

      {/* Feature Section - Dark */}
      <div className="w-full text-white flex flex-col md:flex-row gap-3 items-stretch">
        <div className="w-full md:w-1/2 space-y-4 p-20 bg-[#2c2b27]">
          <h2 className="text-4xl font-bold">A true color ink display</h2>
          <p className='w-1/2'>Enjoy the vibrant color experience while maintaining the paper-like reading and writing feel.</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={pabloImg} alt="feature" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Feature Section - Light Gray */}
      <div className="w-full text-black flex flex-col md:flex-row gap-3 items-stretch">
        <div className="w-full md:w-1/2">
          <Image src={pabloImg} alt="feature" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 p-20 bg-[#cbc8bc]">
          <h2 className="text-4xl font-bold">Read in comfort. Day or night.</h2>
          <p className='w-1/2'>Thanks to its adaptive light and anti-glare screen, your eyes stay protected any time of the day.</p>
        </div>
      </div>

      {/* Privacy Grid */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-2 space-y-6">
          <h2 className="text-4xl font-bold">Data protection and privacy</h2>
          <p className='w-1/2'>Our technology ensures your data is secure, always.</p>
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
        <div className="flex-1">
          <Image src={pabloImg} alt="privacy visual" className="w-full h-full" />
        </div>
      </div>

      {/* Final Row */}
      <div className="flex flex-col bg-[#2c2b29] text-[#fff] md:flex-row items-center">
        <div className="max-w-[32rem] flex-2">
          <Image src={laptop} alt="final-cta" className="w-full rounded-md" />
        </div>
        <div className="px-7 py-4 w-[20rem] flex-1">
          <h2 className="text-3xl font-bold">64GB for limitless note-taking</h2>
          <p className="pt-4">Personalize your reMarkable Paper Pro to suit your workflow and style.</p>
        </div>
      </div>

      {/* Stay Organized Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-start min-h-[20rem]"
        style={{ backgroundImage: `url(${pabloImg.src})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative bg-black/50 z-10 max-w-lg p-6">
          <h2 className="text-4xl font-bold mb-2">Stay organized</h2>
          <p className="max-w-[18rem]">
            Keep all your notes, sketches, and files in one place, accessible across devices.
          </p>
        </div>
      </div>

      {/* Expandable Image Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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

      {/* Final CTA */}
      <div className="flex flex-col bg-[#b4a8aa] text-white md:flex-row items-center justify-between gap-8">
        <div className="px-7 py-4">
          <h2 className="text-4xl font-bold">Make it your own</h2>
          <p className="max-w-[18rem] pt-4">
            Personalize your reMarkable Paper Pro to suit your workflow and style.
          </p>
        </div>
        <Image src={laptop} alt="final-cta" className="w-full md:w-1/3 rounded-md" />
      </div>
    </div>
  );
};

export default InfoOne;
