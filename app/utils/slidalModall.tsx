'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import Image from 'next/image';
import { SlideModalProps } from '../types';

const SlideModall = ({
  isOpen,
  onClose,
  images,
  initialIndex,
  showSocialLinks = true,
}: SlideModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  useEffect(() => {
    if (isOpen && typeof initialIndex === 'number') {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex">
        <div className="flex-1 relative">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="w-80 bg-white flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-lg font-medium">
              {currentIndex + 1} OF {images.length}
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="p-2 hover:bg-gray-100 rounded-full">
                <FaChevronLeft />
              </button>
              <button onClick={nextSlide} className="p-2 hover:bg-gray-100 rounded-full">
                <FaChevronRight />
              </button>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <FaTimes />
              </button>
            </div>
          </div>

          {showSocialLinks && (
            <div className="p-6 mt-auto text-center">
              <p className="mb-4">FOLLOW US</p>
              <div className="flex justify-center gap-6 text-xl">
                <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
                <a href="#" className="hover:text-red-600"><FaYoutube /></a>
                <a href="#" className="hover:text-red-800"><FaPinterest /></a>
              </div>
            </div>
          )}
        </div>s
      </div>
    </div>
  );
};

export default SlideModall;
