import TransitionLink from '@/app/utils/transitionLink';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

interface MenuProps {
  toggleSidebar: () => void;
  handleMenu: () => void;
}

const MobileNav: React.FC<MenuProps> = ({ toggleSidebar, handleMenu }) => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <div>
          <button onClick={toggleSidebar} aria-label="Toggle sidebar">
            <BiMenuAltLeft size={28} className="text-gray-700" />
          </button>
        </div>
        <div className="flex justify-center">
          <TransitionLink href="/">
            <span className="text-lg font-bold">WENA ANEW</span>
          </TransitionLink>
        </div>
        <div>
          <button
            onClick={handleMenu}
            className="flex flex-col items-center"
            aria-label="Toggle mobile menu"
          >
            <span className="text-gray-700 text-xs">ME</span>
            <span className="text-gray-700 text-xs">NU</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
