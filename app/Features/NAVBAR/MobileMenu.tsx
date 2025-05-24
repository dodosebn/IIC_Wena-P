import React, { useState } from "react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import AboutModal from "./about-modal/AboutModal";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className={`fixed top-0 right-[-100vw] w-full h-full bg-white shadow-[-4px_0px_10px_rgba(0,0,0,0.1)] z-[100] transition-all duration-300 ease-in-out ${isOpen ? "right-0" : ""}`}>
      <div className="relative h-full">
        {/* Close Button */}
        <button 
          className="absolute top-[15px] right-[20px] bg-transparent border-none text-[25px] cursor-pointer"
          onClick={toggleMenu}
        >
          x
        </button>

        <div className="flex flex-col justify-center items-center mt-[80px]">
          {/* Navigation Links */}
          <ul className="list-none p-0 mt-[30px] text-center flex flex-col gap-[6px]">
            <li className="my-[10px] text-xs uppercase tracking-[1.5px] font-medium font-['avenir-next']">
              <a href="/" className="text-black no-underline hover:text-gray-500 transition-colors">
                INTRO
              </a>
            </li>
            <li className="my-[10px] text-xs uppercase tracking-[1.5px] font-medium font-['avenir-next']">
              <a
                href="#"
                role="button"
                className="text-black no-underline hover:text-gray-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutOpen(true);
                }}
              >
                ABOUT US
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex flex-row gap-5 items-center mt-[100px]">
            <FaTiktok className="text-lg" />
            <Image 
              src="/assets/icons/instagram.svg" 
              className="h-[18px] w-auto" 
              alt="Instagram" 
              width={18}
              height={18}
            />
            <Image 
              src="/assets/icons/x-icon-black.png" 
              className="h-[23px] w-auto mt-[2px]" 
              alt="X" 
              width={23}
              height={23}
            />
            <FaYoutube className="text-lg" />
          </div>
        </div>
      </div>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default MobileMenu;