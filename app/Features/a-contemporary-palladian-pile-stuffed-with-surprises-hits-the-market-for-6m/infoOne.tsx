'use client';
import React, { useEffect, useState } from 'react'
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
import Gallery from './slider/gallary';
const InfoOne = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
 useEffect(() => {
    setShareMessage(encodeURIComponent(`Hey! Check this out: ${window.location.href}`));
  }, []);

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
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 md:py-32 py-20 overflow-x-hidden">
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-center space-y-2 justify-center mx-auto">
       <div>
        <p className='text-[12px] text-[#acacac] tracking-[3px] uppercase mb-2 md:flex hidden'>Property | | by Ellen Himelfarb</p>
                <p className='text-[16px] text-[#acacac] tracking-[2.5px] leading-7 text-center uppercase mb-2 md:hidden block'>
                 <span className="block"> Property | </span>
                  <span className="block">  by Ellen Himelfarb</span> 
                  </p>
                  </div>
<div>
        <h1 className="text-[36px] font-semibold text-[#000] font-serif tracking-[3px] md:block hidden mb-4 text-center leading-tight">
  <span className="block">A contemporary Palladian pile stuffed with</span>
  <span className="block">surprises hits the market for £6m</span>
</h1>
<h1 className="text-[36px] font-semibold text-[#000] font-serif  md:hidden block mb-4 text-center leading-tight">
  A contemporary Palladian pile stuffed with
  surprises hits the market for £6m
</h1>
</div>

<div>
        <p className='text-[18px] md:block hidden tracking-[0.5px] mb-4 text-center  leading-widest'>
         <span className="block">The Gloucestershire property has handcrafted</span>
         <span className="block">The  vintage details, plus all the mod cons</span>
        </p>
         <p className='text-[18px] md:hidden block tracking-[0.5px] mb-4 text-center  leading-widest'>
         The Gloucestershire property has handcrafted
        The  vintage details, plus all the mod cons
        </p>
        </div>
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
<div className="md:max-w-[38rem] max-w-[25rem] mx-auto text-start mb-12 px-3 space-y-6">
  <p className="md:text-[18px] text-[17px] leading-relaxed tracking-wide text-[#4c4c4c]">
    It’s a new twist on an old saga: a Palladian pile on the market in deepest 
    <span className="underline hover:text-gray-400"> Gloucestershire</span>, supported by ancient beams, laden with antique chandeliers, clad in wisteria.
    Except Daisy Green is no fixer-upper, doomed by rising damp, abandoned by despairing aristocrats.
    The new listing from <span className="underline hover:text-gray-400">Blue Book Agency</span> was built 15 years ago by the late architect Martin Branston for
    an adventurous designer and her husband as a foil for the minimalism of the day. 
    <span className="underline hover:text-gray-400"> The asking price is £6m.</span>
  </p>

  <p className="md:text-[18px] text-[17px] leading-relaxed tracking-wide text-[#4c4c4c]">
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


      
<div className="mb-12 px-3 md:px-12">
  {/* ––– Image (full-bleed on mobile, contained on desktop) */}
  <div
    className="relative mb-4
               left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
               md:left-0 md:right-0 md:ml-0 md:mr-0
               w-screen md:w-full overflow-visible"
  >
    <div className="relative w-full" style={{ paddingBottom: '66.66%' }}>
      <Image
        src={galleryImages[currentImageIndex]}
        alt={`Gallery image ${currentImageIndex + 1}`}
        
        layout="fill"
        objectFit="cover"
        className="w-full"
      />
    </div>

    {/* arrows… */}
    <div className="absolute inset-0 flex items-center justify-between z-20 pointer-events-none">
      <button
        onClick={prevImage}
className="bg-gray-300/70  p-4 shadow-md pointer-events-auto"
      >
        <FaAngleLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="bg-gray-300/70 p-4 shadow-md pointer-events-auto"
      >
        <FaAngleRight size={24} />
      </button>
    </div>
  </div>

  {/* ––– Caption & Counter ––– */}
  <div className="flex justify-between items-center mt-2 px-3 md:px-0">
    <p className="text-sm text-[#4c4c4c] text-start md:ml-[10vw]">
      Photography: Blue Book Agency
    </p>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-500">
        {currentImageIndex + 1} of {galleryImages.length}
      </span>
      <button   onClick={() => setIsGalleryOpen(true)}
           className="hidden md:flex text-gray-500 hover:text-gray-700">
        <AiOutlineArrowsAlt size={20} />
      </button>
    </div>
  </div>
</div>


   
<div className="md:max-w-[38rem] max-w-[25rem] mx-auto text-start mb-12 px-3 space-y-6">
  <p className="md:text-[18px] text-[17px] leading-relaxed tracking-wide text-[#4c4c4c]">‘John and I were inspired by the idea of combining practical, modern amenities with the elegant external beauty of English     Palladian architecture, whose tall sash windows and ceiling heights can provide glorious light-filled internal living spaces,’ 
    says Susanna.
     ‘We didn’t want grandiosity — we wanted something joyful, full of wit and character.
      A grown-up doll’s house, if you like.’</p>
       <p className="md:text-[18px] text-[17px] leading-relaxed tracking-wide text-[#4c4c4c]">To achieve their ends, the couple collaborated closely with local craftspeople and reused reclaimed materials and furnishings. 
        The evocative entranceway opens to a double-height foyer with stone flooring, dramatic countryside views and a wrought-metal 
        staircase by <span className='underline hover:text-gray-400'>Matt Livsey Hammond.</span>  The elaborate period plasterwork is balanced by a modern steel eat-in
         kitchen on the raised ground
         floor, with an Esse oven and cosy lounge.
         It fits in seamlessly with the timeless design of the house, carefully crafted over three years.</p>
          <p className="md:text-[18px] text-[17px]  leading-relaxed tracking-wide text-[#4c4c4c]">
          In the other direction from the kitchen is a magnificent formal space bathed in light from shuttered windows. 
           A Georgian mantelpiece once belonging to <span className='underline hover:text-gray-400'>Cecil Beaton</span> sits at one end, reclaimed from his Redditch House. 
           The long room is furnished in period antiques and a glorious hand-painted tiled mural by
            <span className='underline hover:text-gray-400'>Priscilla Kennedy.</span>
          </p>
 </div>
<div
  className="relative mb-12
             w-screen -ml-[50vw] left-1/2
             md:ml-0 md:left-0 md:w-full md:px-12 px-0"
>
  <div className="relative w-full md:h-[95vh] h-80 overflow-hidden">
    <Image
      src={clockand}
      alt="clockand"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 md:group-hover:scale-105"
    />
  </div>
  <div className="mt-2 px-3 md:px-0">
    <p className="text-sm text-[#4c4c4c] text-start">Photography: Blue Book Agency</p>
  </div>
</div>


<div className="md:max-w-[38rem] max-w-[25rem] mx-auto text-start mb-12 px-3 space-y-6">
  <p className="md:text-[18px] text-[17px]  leading-relaxed tracking-wide text-[#4c4c4c]">‘JohnThe first floor is arranged around five bedrooms, each with an en-suite or private bathroom, one with another 
  painted-tile scene by Priscilla Kennedy. The principal suite has a mezzanine dressing room accessed by a chinoiserie-metal balustrade, 
  leading to a roof terrace with views across the estate. At the lower-ground level is a purpose-built wine cellar.</p>
  <p className="md:text-[18px] text-[17px]  leading-relaxed tracking-wide text-[#4c4c4c]">     Just north of the historic market town of Wotton-under-Edge, the grounds benefit from a 1990 four-bedroom farmhouse, 
     an adjacent barn and an artist’s studio, where Whiteworks was born. Located across a cobbled courtyard from the main house,
      the outbuildings have their own kitchens, bathrooms and lounge spaces. A modern gothic-inspired summerhouse on the land serves
       as a year-round greenhouse, and a wildlife pond offers views beyond to the Tyndale Monument.
      Grazing the working farmland are 150 Herdwick sheep, managed by a local farmer.
   </p>
      <p className="md:text-[18px] text-[17px]  leading-relaxed tracking-wide text-[#4c4c4c]">‘When we started building Daisy Green, Whiteworks hadn’t yet taken shape,’ says Susanna.
    ‘As the house grew, so did my creative practice. Daisy Green became a living studio: a place to play, test, refine.
        Now it’s time for the next chapter. With Whiteworks thriving, we’re ready for a new project and to hand Daisy Green over 
        to someone who will
        love it as much as we have.’</p>
 </div>
 <div></div>
    <div className="grid grid-cols-1 gap-6 mb-12">
  {sixImages.map((item) => (
    <div key={item.key} className="group">
      {/* Image wrapper — full-bleed on mobile, contained on desktop */}
      <div
        className="relative md:h-[95vh] h-80  overflow-hidden
                   w-screen -ml-[50vw] left-1/2
                   md:ml-0 md:left-0 md:w-full"
      >
        <Image
          src={item.img}
          alt="Property detail"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Caption — aligns with content, not full-bleed */}
      <div className="mt-2 px-3 md:px-0">
        <p className="text-sm text-[#4c4c4c] text-start">
          Photography: Blue Book Agency
        </p>
      </div>
    </div>
  ))}
</div>

<div className="flex flex-col gap-6 px-4 sm:px-0 max-w-2xl mx-auto text-start">
  <div>
 <div className="text-[24px] font-medium text-gray-800">
  Read next: 
    <span className="underline pl-1 hover:text-gray-500 transition-colors duration-200">
       A palatial English estate hits the market for just under £10m
  </span>
</div>

  </div>

  <div>
    <h2 className="text-[24px] font-medium underline hover:text-gray-500 transition-colors duration-200">
      This London home is infused with peaceful Mediterranean minimalism
    </h2>
  </div>
</div>

<div className="text-[10px] flex flex-wrap items-center gap-3 py-4 px-4 sm:px-6 lg:px-8">
  <p className="text-[#4c4c4c] whitespace-nowrap">TAGS :</p>
  {['CECIL BEATON', 'COUNTRY PROPERTY', 'DAISY DESIGN', 'ENGLISH PROPERTY'].map((item, index) => (
    <div
      key={index}
      className="bg-[#e2e2e2] hover:bg-gray-400 text-[#000] p-2 whitespace-nowrap"
    >
      {item}
    </div>
  ))}
</div>
      {/* Share Section */}
    <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center md:items-start px-4 sm:px-6 lg:px-8">
  <div className="flex text-center justify-center mt-3 md:mt-0">
    <p className="text-xs text-center text-gray-500 uppercase mb-2 md:mb-0 whitespace-nowrap">
      SHARE THIS STORY
    </p>
  </div>
  
  <div className="flex flex-wrap items-center  justify-center gap-6 md:gap-14 md:flex-1 w-full">
{iconsinfooter.map((item) => {    const shareUrl = encodeURIComponent(window.location.href);
  const handleShare = () => {
    if (item.name.toLowerCase() === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
    } else if (item.name.toLowerCase() === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${shareMessage}`, '_blank');
    } else if (item.name.toLowerCase() === 'save') {
      const mediaUrl = encodeURIComponent(`${window.location.origin}/_next/image?url=${bigHero.src}&w=1200&q=75`);
      window.open(`https://www.pinterest.com/pin/create/button/?url=${shareMessage}&media=${mediaUrl}&description=A stunning property worth viewing.`, '_blank');
    }
  };

  return (
    <button
      key={item.key}
      onClick={handleShare}
      className={`flex items-center space-x-2 ${item.name.toLowerCase() === 'save' ? 'bg-red-500 text-white px-2 py-1 rounded' : 'text-[#000] hover:text-gray-400'}`}
    >
      <span>{item.icon}</span>
      <span className="text-[18px]">{item.name}</span>
    </button>
  );
})}

  </div>
</div>
   {isGalleryOpen && (
        <Gallery
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={() => setIsGalleryOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

    </div>
  )
}

export default InfoOne;