import React, { useEffect, useState } from "react";
import AboutModal from "./about-modal/AboutModal";
import {
  FaInstagram,
  FaYoutube,
  FaBars,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

const NavBar: React.FC<NavBarProps> = ({ isSidebarOpen, toggleSidebar, pageTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showTitleOnly, setShowTitleOnly] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowTitleOnly(true);
      } else {
        setShowTitleOnly(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className="sticky top-0 z-30 bg-white border-b border-gray-200">
        {showTitleOnly ? (
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <h1 className="text-xl font-bold mr-2">W</h1>
              <p className="text-sm">
                <span className="text-gray-500 mr-1">NOW READING:</span> 
                {pageTitle}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">SHARE THIS:</span>
              <div className="flex space-x-3">
                <Image 
                  src="/assets/icons/x-icon-black.png" 
                  className="w-5 h-5" 
                  alt="X" 
                  width={20}  
                  height={20} 
                />
                <FaFacebookF className="w-4 h-4" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left section */}
            <div className="flex items-center space-x-6">
              <button onClick={toggleSidebar} className="p-1">
                <FaBars className="w-5 h-5 text-gray-700" />
              </button>
              <a href="/" className="text-sm font-medium hover:text-gray-600">INTRO</a>
            </div>

            {/* Center logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="text-lg font-bold">WENA ANEW</a>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <FaInstagram className="w-4 h-4" />
                  <Image 
                    src="/assets/icons/x-icon-black.png" 
                    className="w-4 h-4" 
                    alt="X" 
                    width={16}  
                    height={16} 
                  />
                  <FaYoutube className="w-4 h-4" />
                  <Image 
                    src="/assets/icons/ios-arrow-down.svg" 
                    className="w-3 h-3" 
                    alt="arrow-down" 
                    width={12}  
                    height={12} 
                  />
                </div>
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block">
                  <div className="p-2 space-y-2">
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                      <Image 
                        src="/assets/icons/x-icon-black.png" 
                        className="w-4 h-4" 
                        alt="X" 
                        width={16}  
                        height={16} 
                      />
                      <span>X</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                      <FaYoutube className="w-4 h-4" />
                      <span>YouTube</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                      <FaInstagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                      <FaTiktok className="w-4 h-4" />
                      <span>Tiktok</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-sm">INFO</span>
                  <Image 
                    src="/assets/icons/ios-arrow-down.svg" 
                    className="w-3 h-3" 
                    alt="arrow-down" 
                    width={12}  
                    height={12} 
                  />
                </div>
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block">
                  <div className="p-2 space-y-2">
                    <a 
                      href="#" 
                      className="block p-2 hover:bg-gray-50 rounded"
                      onClick={() => setIsAboutOpen(true)}
                    >
                      WENA
                    </a>
                    <a href="/" className="block p-2 hover:bg-gray-50 rounded">Sponsors</a>
                    <a href="/" className="block p-2 hover:bg-gray-50 rounded">Partners</a>
                    <a href="/" className="block p-2 hover:bg-gray-50 rounded">Support</a>
                  </div>
                </div>
              </div>

              <button 
                onClick={toggleMenu}
                className="md:hidden flex flex-col"
              >
                <span>ME</span>
                <span>NU</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;