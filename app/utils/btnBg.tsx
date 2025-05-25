import React from 'react';
import { BtnBgProps } from '../types';
import TransitionLink from './transitionLink';



const BtnBg: React.FC<BtnBgProps> = ({ btnName, btnpath }) => {
  return (
    <button
      className="bg-black/60 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
    <TransitionLink href={btnpath}> {btnName}</TransitionLink> 
    </button>
  );
};

export default BtnBg;
