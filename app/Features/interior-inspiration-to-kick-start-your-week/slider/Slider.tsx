'use client';
import React from "react";

import ImageSlider from "@/app/utils/imageslider";
import img1 from '@/public/assets/images/temp/header-image.jpg';
import img2 from '@/public/assets/images/temp/download.webp';
import img3 from '@/public/assets/images/temp/promo-1.jpg';
import img4 from '@/public/assets/images/temp/promo-2.jpg';


const images = [
  img1,
  img2,
  img3,
  img4,
]
const Slider =  () => {
  return (
    <ImageSlider images={images}/>
  )
}
export default Slider;