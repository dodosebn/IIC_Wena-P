import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

interface GalleryProps {
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  images: StaticImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col lg:flex-row">
      {/* Main Image Section */}
      <div className="lg:w-3/4 h-2/3 lg:h-full relative">
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Sidebar Controls */}
      <div className="lg:w-1/4 border-l border-gray-200 flex flex-col">
        {/* Header with navigation */}
        <header className="flex items-center border-b border-gray-200 h-12">
          <div className="px-4 border-r border-gray-200 h-full flex items-center text-gray-500">
            {currentIndex + 1} OF {images.length}
          </div>
          <button
            onClick={onPrev}
            className="px-4 border-r border-gray-200 h-full flex items-center hover:bg-gray-100"
          >
            <FaChevronLeft size={24} className="text-gray-500" />
          </button>
          <button
            onClick={onNext}
            className="px-4 border-r border-gray-200 h-full flex items-center hover:bg-gray-100"
          >
            <FaChevronRight size={24} className="text-gray-500" />
          </button>
          <button
            onClick={onClose}
            className="px-4 h-full flex items-center hover:bg-gray-100"
          >
            <FaTimes size={24} className="text-gray-500" />
          </button>
        </header>

        {/* Image info */}
        <div className="p-4 flex justify-center items-center border-gray-200">
          <p className="text-sm text-gray-600">Photography: Blue Book Agency</p>
        </div>

        {/* Follow us section */}
        <section className='mt-auto px-5'>
        <div className="bg-gray-50 p-12 mb-4  self-center">
          <h3 className="text-sm font-medium mb-3 text-center">FOLLOW US</h3>
          <div className="grid grid-cols-3 gap-10 w-fit">
            <a href="#" className="text-gray-700 hover:text-black">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaPinterest size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
