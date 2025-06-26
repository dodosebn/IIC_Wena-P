import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import TransitionLink from '@/app/utils/transitionLink';
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

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
            <span className="text-gray-500 text-sm pr-4">SHARE THIS:</span>
            <div className='space-x-4 flex'>
               <div className="h-[3.5rem] border-l border-gray-200 flex justify-center items-center pl-3">
                                    <FaInstagram size={24} />
                                  </div>
                                  <div className="h-[3.5rem] border-l border-gray-200 flex justify-center items-center pl-3">
                                    <FaSquareXTwitter size={24} />
                                  </div>
                                  <div className="h-[3.5rem] border-l border-gray-200 flex justify-center items-center pl-3">
                                    <AiFillTikTok size={24}/>
                                  </div>
                                  <div className="h-[3.5rem] border-l border-gray-200 flex justify-center items-center pl-3">
                                    <FaFacebookSquare size={24} />
                                  </div>

</div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center border-b border-gray-400 h-14">
          <div className="h-full border-r border-gray-400 flex items-center px-4">
            <button onClick={toggleSidebar} aria-label="Toggle sidebar">
              <BiMenuAltLeft className="text-gray-700 text-3xl" />
            </button>
          </div>

          <div className="flex justify-center">
            <TransitionLink href="/">
              <span className="text-lg tracking-[0.2rem] text-[20px]">WENA PROJECT</span>
            </TransitionLink>
          </div>

          <div className="h-full border-l border-gray-400 flex items-center text-center justify-center px-4">
  <button
    onClick={toggleMenuOverlay}
    className="flex flex-col items-center"
    aria-label="Toggle mobile menu"
  >
    <IoMenu className="transform rotate-90 text-3xl" />
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
  <FaInstagram />
  <FaXTwitter />
  <FaTiktok />
<FaFacebookSquare />
</div>

</div>

        </div>
      )}
    </div>
  );
};

export default MobileNav;