import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import TransitionLink from '@/app/utils/transitionLink';

interface MobileNavProps {
  toggleSidebar: () => void;
  handleMenu: () => void;
  showTitleOnly: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  toggleSidebar,
  handleMenu,
  showTitleOnly,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenuOverlay = () => {
    if (!isAnimating) {
      if (isMenuOpen) {
        setIsAnimating(true);
      } else {
        setIsMenuOpen(true);
        setIsAnimating(false);
      }
      handleMenu();
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="md:hidden relative">
      {showTitleOnly ? (
        <div className="flex items-center justify-between px-4 border-b border-gray-400 h-14">
          <div className="flex justify-center">
            <h1 className="text-xl font-bold">W</h1>
          </div>
          <div className="h-full border-l border-gray-400 flex items-center px-3">
            <span className="text-gray-500 text-sm">SHARE THIS:</span>
            <Image
              src="/assets/icons/x-icon-black.png"
              alt="X"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <FaFacebookF className="w-4 h-4" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center px-4 border-b border-gray-400 h-14">
          <div className="h-full border-r border-gray-400 flex items-center px-3">
            <button onClick={toggleSidebar} aria-label="Toggle sidebar">
              <BiMenuAltLeft size={28} className="text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center">
            <TransitionLink href="/">
              <span className="text-lg tracking-[0.3rem] text-[20px]">WENA ANEW</span>
            </TransitionLink>
          </div>

          <div className="h-full border-l border-gray-400 flex items-center px-3">
            <button
              onClick={toggleMenuOverlay}
              className="flex flex-col items-center"
              aria-label="Toggle mobile menu"
            >
              <span className="text-gray-700 text-xs">ME</span>
              <span className="text-gray-700 text-xs">NU</span>
            </button>
          </div>
        </div>
      )}

      {(isMenuOpen || isAnimating) && (
        <div className={`
          fixed inset-0 bg-white z-50 flex flex-col
          ${isMenuOpen && !isAnimating ? 'animate-slideInRight' : ''}
          ${isAnimating ? 'animate-slideOutRight' : ''}
        `}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenuOverlay} aria-label="Close menu">
              <IoClose size={28} className="text-gray-800" />
            </button>
          </div>
        <div className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-800 mt-16">
  <ul className="flex flex-col items-center space-y-6">
    <li>Intro</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
 <div className="flex pt-5 gap-6 text-3xl text-gray-700">
  <FaTiktok />
  <FaInstagram />
  <FaYoutube />
</div>

</div>

        </div>
      )}
    </div>
  );
};

export default MobileNav;