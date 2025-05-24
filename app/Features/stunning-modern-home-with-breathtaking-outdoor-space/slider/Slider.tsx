'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "../../../style/Slider.css";
import { TbArrowsDiagonal } from "react-icons/tb";
import Image from "next/image";
import SlideModall from "@/app/utils/slidalModall";
import ImageSlider from "@/app/utils/imageslider";

const images = [
  "/assets/images/temp/header-image.jpg",
  "/assets/images/temp/download.webp",
  "/assets/images/temp/promo-1.jpg",
  "/assets/images/temp/promo-2.jpg",
];

const Slider = () => {
  return(
<ImageSlider  images={images} />
  )
};

export default Slider;
