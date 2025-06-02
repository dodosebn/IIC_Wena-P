'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ImageSliderProps } from '../types';
import SlideModall from './slidalModall';

const ImageSlider = ({ images, showSocialLinks = true }: ImageSliderProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((im, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openModal(index)}>
            <Image
              src={im}
              alt={`Preview ${index + 1}`}
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <SlideModall
        isOpen={modalOpen}
        onClose={closeModal}
        images={images}
        initialIndex={selectedIndex}
        showSocialLinks={showSocialLinks}
      />
    </>
  );
};

export default ImageSlider;
