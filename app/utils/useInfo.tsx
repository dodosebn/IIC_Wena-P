import React from "react";
import { FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import pabloImg from "@/public/assets/images/temp/download.webp";
import sameple_1 from "@/public/assets/images/temp/sample-1.jpg";
import { UseInfoProps } from "../types";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            {headerfirstSpan}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            {headerfirstH1}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {headerfirstP}
          </p>
        </div>

        {/* Main Image - Fixed blur issue */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={imgforPhotocite1 || pabloImg} // Fallback to pabloImg if not provided
            alt="header-image"
            fill
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            placeholder="blur" // Add if you have blurDataURL
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
            {photoCite}
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
      <div className="mb-20">
        <Slider />
      </div>

      {/* Single Image Section - Also fixed blur */}
      <div className="mb-20">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
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

      {/* Share Section */}
      <div className="mb-20 py-8 border-t border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Share this story
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <FaInstagram className="text-gray-700" />
              <span className="text-gray-700">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <FaTiktok className="text-gray-700" />
              <span className="text-gray-700">TikTok</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <FaGlobe className="text-gray-700" />
              <span className="text-gray-700">Visit website</span>
            </a>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
          SUPPORT US BY BUYING ONE OF THESE PRODUCTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md mb-4">
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

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 text-center">
          SHARE WITH A FRIEND OR LOVED ONE
        </h3>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Sender's name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Receiver's name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Receiver's email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseInfo; 