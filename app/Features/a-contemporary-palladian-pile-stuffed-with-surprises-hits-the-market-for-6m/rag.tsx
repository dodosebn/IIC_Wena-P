// import React from 'react'
// import Image from 'next/image'
// import bigHero from '@/public/latest-imgs/prob1.jpg';
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaChevronRight } from "react-icons/fa";
// import { AiOutlineArrowsAlt } from "react-icons/ai";
// import { TfiFacebook } from "react-icons/tfi";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoPinterest } from "react-icons/io5";

// // nextFlippers
// import flip1 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-15-100x100.jpg';
// import flip2 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-25-100x100.jpg';
// import flip3 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-28-100x100.jpg';
// import flip4 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-28-1024x683.jpg';
// import flip5 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-3-100x100.jpg';
// import flip6 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-3.jpg';
// import flip7 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-53-100x100.jpg';
// import flip8 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-57-100x100.jpg';
// import flip9 from '@/public/latest-imgs/nextFlips/Daisy-Green-for-sale-Blue-Book-Agency-9-100x100.jpg';
// // aftertheninethflipper
// import clockand from '@/public/latest-imgs/theClockandcase.jpg';
// import shareandform from '@/public/latest-imgs/chairform.jpg';
// import bedandframe from '@/public/latest-imgs/bedandframe.jpg';
// import ochethem from '@/public/latest-imgs/ochedem.jpg';
// import bedroom from '@/public/latest-imgs/bedroomsettings.jpg';
// import fifthImg from '@/public/latest-imgs/fifth-img.jpg';
// import sixthImg from '@/public/latest-imgs/sixthImg.jpg';
// const InfoOne = () => {
//   const sixImages = [
//     {
//       img: shareandform,
//       key: 1
//     },
//       {
//       img: bedandframe,
//       key: 2
//     },
//      {
//       img: ochethem,
//       key: 3
//     },
//     {
//       img: bedroom,
//             key: 4

//     },
//      {
//       img: fifthImg,
//             key: 5

//     },
//      {
//       img: sixthImg,
//             key: 6

//     },
//   ]
//   const iconsinfooter = [{
//   key: 1,
//   icon: <TfiFacebook />,
//   name: 'Facebook'
// },
// {
//   key: 2,
//   icon: <FaXTwitter />,
//     name: 'Twitter'

// },
// {
//   key: 3,
//   icon: <IoLogoPinterest />,
//   name: 'Save'
// }]
//   return (
//     <div>
//       <div>
//       <p className='text-[11px] text-[#9C9C9C]'>Property I I by Ellen Himelfarb</p>
//       <h2 className='text-[36px] text-[#000]'>A contemporary Palladian pile stuffed with <br />
//       surprises hits the market for £6m</h2>
//       <p className='text-[18px] text-[#000]'>The Gloucestershire property has handcrafted
//         <br /> vintage details, plus all the mod cons
// </p>
// </div>
// <div>
//   <Image src={bigHero} alt='oops' />

//   <p className='items-start'>Photography: Blue Book Agency</p>
// </div>
// <div>
//   <p className='text-[18px]'>It’s a new twist on an old saga: a Palladian pile on the market in deepest
//    <span className='underline hover:text-gray-400'>Gloucestershire</span> , supported by ancient beams, laden with antique chandeliers, clad in wisteria.
//      Except Daisy Green is no fixer-upper, doomed by rising damp, abandoned by despairing aristocrats.
//      The new listing from <span className='underline hover:text-gray-400'>Blue Book Agency</span> was built 15 years ago by the late architect Martin Branston for
//       an adventurous designer and her husband as a foil for the minimalism of the day. <span className='underline hover:text-gray-400'>
//         The asking price is £6m.</span></p>
//         <p className='text-[18px]'>Inspired by 18th-century Georgians and the principles of harmony and proportion
//            espoused by <span className='underline hover:text-gray-400'>Andrea Palladio,</span>  John and
//             <span className='underline hover:text-gray-400'> Susanna White</span> embarked on the project with a yearning to experiment.
//             They visualised the new build with character and wit, from custom furnishings and wallpapers from Susanna’s

//              burgeoning interiors practice, <span className='underline hover:text-gray-400'> Whiteworks</span>. Set in 116 mature acres,
//              including 90 acres of <span className='underline hover:text-gray-400'>Cotswolds</span> farmland,
//              they conceived a timeless façade embracing the finest points of Palladian architecture, leading into a fantastical world
//               concealing mod cons and conveniences.</p>
// </div>

// {/* Flippers */}
// <div className='relative px-12'>
// <Image src={flip1} alt='ohmss'/>
// <div className='flex justify-between absolute'>
//   <button type="button" className='bg-gray-300'><FaAngleLeft size={32}  /></button>
//     <button type="button" className='bg-gray-300'><FaChevronRight size={32}  /></button>
// </div>
// </div>
// <div className='flex justify-between'>
// <p className='flex justify-center mx-auto '>Photography: Blue Book Agency</p>
// <div className='flex justify-items-end'><div className='flex space-x-3'><p>1 of 9</p> <AiOutlineArrowsAlt size={32} /></div></div>
// </div>
// <div>
//   <p>‘John and I were inspired by the idea of combining practical, modern amenities with the elegant external beauty of English
//     Palladian architecture, whose tall sash windows and ceiling heights can provide glorious light-filled internal living spaces,’
//     says Susanna.
//      ‘We didn’t want grandiosity — we wanted something joyful, full of wit and character.
//       A grown-up doll’s house, if you like.’</p>
//       <p>To achieve their ends, the couple collaborated closely with local craftspeople and reused reclaimed materials and furnishings.
//         The evocative entranceway opens to a double-height foyer with stone flooring, dramatic countryside views and a wrought-metal
//         staircase by <span className='underline hover:text-gray-400'>Matt Livsey Hammond.</span>  The elaborate period plasterwork is balanced by a modern steel eat-in
//          kitchen on the raised ground
//          floor, with an Esse oven and cosy lounge.
//          It fits in seamlessly with the timeless design of the house, carefully crafted over three years.</p>
//          <p>
//           In the other direction from the kitchen is a magnificent formal space bathed in light from shuttered windows.
//           A Georgian mantelpiece once belonging to <span className='underline hover:text-gray-400'>Cecil Beaton</span> sits at one end, reclaimed from his Redditch House.
//           The long room is furnished in period antiques and a glorious hand-painted tiled mural by
//            <span className='underline hover:text-gray-400'>Priscilla Kennedy.</span>
//          </p>
// </div>
// <div className='px-12 relative'>
// <Image src={clockand} alt='clockand'/>
// <div className='absolute'>
//  <p> Photography: Blue Book Agency</p>
// </div>
// </div>

// <div>
//   <p>The first floor is arranged around five bedrooms, each with an en-suite or private bathroom, one with another
//     painted-tile scene by Priscilla Kennedy. The principal suite has a mezzanine dressing room accessed by a chinoiserie-metal balustrade,
//     leading to a roof terrace with views across the estate. At the lower-ground level is a purpose-built wine cellar.</p>
//     <p>
//       Just north of the historic market town of Wotton-under-Edge, the grounds benefit from a 1990 four-bedroom farmhouse,
//       an adjacent barn and an artist’s studio, where Whiteworks was born. Located across a cobbled courtyard from the main house,
//        the outbuildings have their own kitchens, bathrooms and lounge spaces. A modern gothic-inspired summerhouse on the land serves
//         as a year-round greenhouse, and a wildlife pond offers views beyond to the Tyndale Monument.
//        Grazing the working farmland are 150 Herdwick sheep, managed by a local farmer.
//     </p>
//     <p>‘When we started building Daisy Green, Whiteworks hadn’t yet taken shape,’ says Susanna.
//        ‘As the house grew, so did my creative practice. Daisy Green became a living studio: a place to play, test, refine.
//         Now it’s time for the next chapter. With Whiteworks thriving, we’re ready for a new project and to hand Daisy Green over
//         to someone who will
//        love it as much as we have.’</p>
// </div>
// <div>
//   {sixImages.map((itm) => (
//     <div className='px-2' key={itm.key}>
// <Image src={itm.img} alt='alter'/>
// <div className='flex justify-start'>
// <p>Photography: Blue Book Agency</p>
// </div>
//     </div>
//   ))}
// </div>
// <div className='flex justify-center items-center mx-auto space-y-3'>
// <h1 className='text-[24px]'>Read next: <span className='underline hover:text-gray-400'>A palatial English estate hits the market for
//    just under £10m</span> </h1>
//    <h1 className='text-[24px] underline hover:text-gray-400'> This London home is infused with peaceful Mediterian minimalism</h1>
// </div>
// <div className='text-[10px] flex justify-center items-center mx-auto space-x-3'>
// <p>TAGS</p>
// <div className='flex space-x-3'>
// {['CECIL BEATON', 'COUNTRY PROPERTY', 'DAISY DESIGN', 'ENGLISH PROPERTY'].map((item, index) => (
//   <div className='bg-gray-400' key={index}>
// {item}
//   </div>
// ))}
// </div>
// </div>
// <div className='py-4'>
//   <hr className='bg-gray-400'/>
// </div>
// <div>
// <div className='text-[11px]'>SHARE THIS STORY</div>
// {iconsinfooter.map((item) => (
//   <div key={item.key} className='flex justify-center mx-auto items-center space-x-4'>
// <div>{item.icon}</div>
// <div className='text-[18px]'>{item.name}</div>
// {item.name === 'save' && (
//   <div className='flex bg-red-400'>
// <div>{item.icon}</div>
// <div className='text-[18px]'>{item.name}</div>
//   </div>
// )}
//   </div>
// ))}
// </div>
//     </div>
//   )
// }

// export default InfoOne;
