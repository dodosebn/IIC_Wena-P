'use client';
import React from 'react'
import Image from 'next/image'
import bigHero from '@/public/latest-imgs/prob1.jpg';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io5";

// nextFlippers

import flip1 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-9.jpg'
import flip2 from '@/public/latest-imgs/fifth-img.jpg';
import flip3 from '@/public/latest-imgs/theClockandcase.jpg';
import flip4 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-28-1024x683.jpg';
import flip5 from '@/public/latest-imgs/chairform.jpg';
import flip6 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-3.jpg';
import flip7 from '@/public/latest-imgs/bedroomsettings.jpg';
import flip8 from '@/public/latest-imgs/fifth-img.jpg';
import flip9 from '@/public/latest-imgs/sixthImg.jpg';
// // aftertheninethflipper
import clockand from '@/public/latest-imgs/theClockandcase.jpg';
import shareandform from '@/public/latest-imgs/chairform.jpg';
import bedandframe from '@/public/latest-imgs/bedandframe.jpg';
import ochethem from '@/public/latest-imgs/ochedem.jpg';
import bedroom from '@/public/latest-imgs/bedroomsettings.jpg';
import fifthImg from '@/public/latest-imgs/fifth-img.jpg';
import sixthImg from '@/public/latest-imgs/sixthImg.jpg';
const InfoOne = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const galleryImages = [
    flip1, flip2, flip3, flip4, flip5, flip6, flip7, flip8, flip9
  ];

  const sixImages = [
    { img: shareandform, key: 1 },
    { img: bedandframe, key: 2 },
    { img: ochethem, key: 3 },
    { img: bedroom, key: 4 },
    { img: fifthImg, key: 5 },
    { img: sixthImg, key: 6 },
  ];

  const iconsinfooter = [
    { key: 1, icon: <TfiFacebook />, name: 'Facebook' }, 
    { key: 2, icon: <FaXTwitter />, name: 'Twitter' }, 
    { key: 3, icon: <IoLogoPinterest />, name: 'Save' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 overflow-x-hidden">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center space-y-4 justify-center mx-auto">
        <p className='text-[11px] text-[#9C9C9C]/70 tracking-[3px] uppercase mb-2'>Property | | by Ellen Himelfarb</p>
        <h1 className="text-[36px] text-[#000]/80 font-serif tracking-[3px] mb-4 text-center leading-tight">
  <span className="block">A contemporary Palladian pile stuffed with</span>
  <span className="block">surprises hits the market for £6m</span>
</h1>

        <p className='text-[18px] tracking-[3px] mb-4 text-center text-[#000]/75 leading-widest'>
         <span className="block">The Gloucestershire property has handcrafted</span>
         <span className="block">The  vintage details, plus all the mod cons</span>
        </p>
      </div>

      {/* Hero Image */}
     <div className="mb-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <div className="relative w-full h-auto mb-2">
    <Image 
      src={bigHero} 
      alt="Main property image"
      layout="responsive"
      width={1200}
      height={800}
      className="w-full"
    />
  </div>
  <p className="text-sm text-[#4c4c4c] text-start ml-[15vw] ">Photography: Blue Book Agency</p>
</div>

      {/* Content Paragraphs */}
<div className="max-w-[37rem] mx-auto text-start mb-12 px-4 space-y-6">
  <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">
    It’s a new twist on an old saga: a Palladian pile on the market in deepest 
    <span className="underline hover:text-gray-400"> Gloucestershire</span>, supported by ancient beams, laden with antique chandeliers, clad in wisteria.
    Except Daisy Green is no fixer-upper, doomed by rising damp, abandoned by despairing aristocrats.
    The new listing from <span className="underline hover:text-gray-400">Blue Book Agency</span> was built 15 years ago by the late architect Martin Branston for
    an adventurous designer and her husband as a foil for the minimalism of the day. 
    <span className="underline hover:text-gray-400"> The asking price is £6m.</span>
  </p>

  <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">
    Inspired by 18th-century Georgians and the principles of harmony and proportion
    espoused by <span className="underline hover:text-gray-400">Andrea Palladio</span>, John and
    <span className="underline hover:text-gray-400"> Susanna White</span> embarked on the project with a yearning to experiment.
    They visualised the new build with character and wit, from custom furnishings and wallpapers from Susanna’s
    burgeoning interiors practice, <span className="underline hover:text-gray-400">Whiteworks</span>.
    Set in 116 mature acres, including 90 acres of <span className="underline hover:text-gray-400">Cotswolds</span> farmland, 
    they conceived a timeless façade embracing the finest points of Palladian architecture, 
    leading into a fantastical world concealing mod cons and conveniences.
  </p>
</div>


      {/* Image Gallery */}
      <div className="mb-12 px-12">
        {/* Main Gallery Image */}
        <div className="relative mb-4">
          <div className="relative w-full h-auto" style={{ paddingBottom: '66.66%' }}>
            <Image
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button 
              onClick={prevImage}
              className="bg-gray-300 bg-opacity-80 
              hover:bg-opacity-100 p-2 shadow-md"
            >
              <FaAngleLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-gray-300 bg-opacity-80 
              hover:bg-opacity-100 p-2 shadow-md"
            >
              <FaAngleRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
  <p className="text-sm text-[#4c4c4c] text-start ml-[15vw] ">Photography: Blue Book Agency</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              {currentImageIndex + 1} of {galleryImages.length}
            </span>
            <button className="text-gray-500 hover:text-gray-700">
              <AiOutlineArrowsAlt size={20} />
            </button>
          </div>
        </div>
      </div> 

   
<div className="max-w-[37rem] mx-auto text-start mb-12 px-4 space-y-6">
  <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">‘John and I were inspired by the idea of combining practical, modern amenities with the elegant external beauty of English     Palladian architecture, whose tall sash windows and ceiling heights can provide glorious light-filled internal living spaces,’ 
    says Susanna.
     ‘We didn’t want grandiosity — we wanted something joyful, full of wit and character.
      A grown-up doll’s house, if you like.’</p>
       <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">To achieve their ends, the couple collaborated closely with local craftspeople and reused reclaimed materials and furnishings. 
        The evocative entranceway opens to a double-height foyer with stone flooring, dramatic countryside views and a wrought-metal 
        staircase by <span className='underline hover:text-gray-400'>Matt Livsey Hammond.</span>  The elaborate period plasterwork is balanced by a modern steel eat-in
         kitchen on the raised ground
         floor, with an Esse oven and cosy lounge.
         It fits in seamlessly with the timeless design of the house, carefully crafted over three years.</p>
          <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">
          In the other direction from the kitchen is a magnificent formal space bathed in light from shuttered windows. 
           A Georgian mantelpiece once belonging to <span className='underline hover:text-gray-400'>Cecil Beaton</span> sits at one end, reclaimed from his Redditch House. 
           The long room is furnished in period antiques and a glorious hand-painted tiled mural by
            <span className='underline hover:text-gray-400'>Priscilla Kennedy.</span>
          </p>
 </div>
 <div className='px-12 relative h-full w-full '>
<Image src={clockand} alt='clockand'/>
<div className='py-5'>
  <p className="text-sm text-[#4c4c4c] text-start">Photography: Blue Book Agency</p>
 </div>
 </div>

<div className="max-w-[37rem] mx-auto text-start mb-12 px-4 space-y-6">
  <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">‘JohnThe first floor is arranged around five bedrooms, each with an en-suite or private bathroom, one with another 
  painted-tile scene by Priscilla Kennedy. The principal suite has a mezzanine dressing room accessed by a chinoiserie-metal balustrade, 
  leading to a roof terrace with views across the estate. At the lower-ground level is a purpose-built wine cellar.</p>
  <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">     Just north of the historic market town of Wotton-under-Edge, the grounds benefit from a 1990 four-bedroom farmhouse, 
     an adjacent barn and an artist’s studio, where Whiteworks was born. Located across a cobbled courtyard from the main house,
      the outbuildings have their own kitchens, bathrooms and lounge spaces. A modern gothic-inspired summerhouse on the land serves
       as a year-round greenhouse, and a wildlife pond offers views beyond to the Tyndale Monument.
      Grazing the working farmland are 150 Herdwick sheep, managed by a local farmer.
   </p>
      <p className="text-[18px] leading-relaxed tracking-wide text-[#4c4c4c]">‘When we started building Daisy Green, Whiteworks hadn’t yet taken shape,’ says Susanna.
    ‘As the house grew, so did my creative practice. Daisy Green became a living studio: a place to play, test, refine.
        Now it’s time for the next chapter. With Whiteworks thriving, we’re ready for a new project and to hand Daisy Green over 
        to someone who will
        love it as much as we have.’</p>
 </div>
 <div></div>
      <div className="grid grid-cols-1  gap-6 mb-12">
        {sixImages.map((item) => (
          <div key={item.key} className="group">
            <div className="relative w-full h-96 mb-2 overflow-hidden">
              <Image
                src={item.img}
                alt="Property detail"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
  <p className="text-sm text-[#4c4c4c] text-start">Photography: Blue Book Agency</p>
          </div>
        ))}
      </div>
<div className='flex flex-col justify-center items-center mx-auto space-y-3'>
  <h1 className='text-[24px]'>Read next: <span className='underline hover:text-gray-400'>A palatial English estate hits the market for
   just under £10m</span> </h1>
   <h1 className='text-[24px] underline hover:text-gray-400'> This London home is infused with peaceful Mediterian minimalism</h1>
 </div>
 <div className='text-[10px] flex justify-center items-center mx-auto space-x-3'>
 <p className='text-[#4c4c4c]'>TAGS : </p>
 <div className='flex space-x-3 py-4'>
{['CECIL BEATON', 'COUNTRY PROPERTY', 'DAISY DESIGN', 'ENGLISH PROPERTY'].map((item, index) => (
  <div className='bg-[#e2e2e2] text-[#4c4c4c] p-2' key={index}>
{item}
  </div>
))}
</div>
 </div>
      {/* Share Section */}
      <div className="border-t border-gray-200 pt-6 flex items-center flex-wrap gap-y-4">
  <p className="text-xs text-gray-500 uppercase">SHARE THIS STORY</p>

  <div className="flex space-x-14 justify-center items-center mx-auto">
    {iconsinfooter.map((item) => (
      <button 
        key={item.key}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-400"
      >
        <span>{item.icon}</span>
        <span className="text-[18px]">{item.name}</span>
        {item.name === 'save' && (
          <div className='bg-red-500'>
   <span>{item.icon}</span>
        <span className="text-[18px]">{item.name}</span>
          </div>
        )}
      </button>
    ))}
  </div>
</div>

    </div>
  )
}

export default InfoOne;