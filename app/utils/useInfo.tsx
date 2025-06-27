import React from "react";
import { FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import pabloImg from "@/public/assets/images/temp/download.webp";
import sameple_1 from "@/public/assets/images/temp/sample-1.jpg";
import { UseInfoProps } from "../types";
import Formalin from "./customs/formalin";
import Shar from "./shar";

const UseInfo: React.FC<UseInfoProps> = ({
  headerfirstSpan,
  headerfirstH1,
  headerfirstP,
  photoCite,
  imgforPhotocite1,
  describp1,
  describp2,
  describp3,
    imgforphotocite2,

  Slider
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header Section */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <span className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
            {headerfirstSpan}
          </span>
          <h1 className="mt-4 text-[36px] text-gray-900 leading-tight">
            {headerfirstH1}
          </h1>
          <p className="mt-4 text-[18px] text-gray-600 max-w-3xl mx-auto">
            {headerfirstP}
          </p>
        </div>

  <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative w-full aspect-[16/9] overflow-hidden">  
                  <Image
            src={imgforPhotocite1 || pabloImg} 
            alt="header-image"
            fill
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            placeholder="blur" 
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            {photoCite}
          </div>
        </div>
        </div>
      </div>

      {/* Content Paragraphs */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">{describp1}</p>
          <p className="mb-6">{describp2}</p>
          <p>{describp3}</p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className="mb-20">
        <Slider />
      </div> */}

      {/* Single Image Section - Also fixed blur */}
      <div className="mb-20">
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative w-full aspect-[16/9] overflow-hidden">  
          <Image 
            src={imgforphotocite2 || sameple_1}
            alt="home"
            fill
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            {photoCite}
          </div>
        </div>
        </div>
      </div>

     <Shar />
      {/* Recommended Products */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif  text-gray-900 mb-8 text-center">
          SUPPORT US BY BUYING ONE OF THESE PRODUCTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden shadow-md mb-4">
                <Image
                  src={sameple_1}
                  alt="product"
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  Interiors, News
                </span>
                <p className="mt-1 text-gray-900 font-medium">
                  The cedar-clad hillside home is decidedly Canadian in style —
                  woody
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

<Formalin />
    </div>
  );
};

export default UseInfo; 