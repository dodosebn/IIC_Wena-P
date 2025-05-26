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
import { FaXTwitter } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import TransitionLink from "@/app/utils/transitionLink";
import MobileNav from "./mobileNav";

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

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Mobile Navigation */}
        <div>
          <MobileNav toggleSidebar={toggleSidebar} handleMenu={handleMenu}/>
          {/* Mobile Menu Content */}
          {isMenuOpen && (
            <div className="bg-gray-200 px-8 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center space-x-6">
                {/* Social Icons with dropdown */}
                <div className="relative group w-full">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <div className="flex items-center space-x-3 group-hover:opacity-80">
                      <FaInstagram className="w-5 h-5 hover:opacity-80" />
                      <Image
                        src="/assets/icons/x-icon-black.png"
                        className="w-5 h-5 hover:opacity-80"
                        alt="X"
                        width={20}
                        height={20}
                      />
                      <FaYoutube className="w-5 h-5 hover:opacity-80" />
                    </div>
                    <IoIosArrowDropdown size={16} className="w-4 h-4" />
                  </div>

                  <div className="absolute left-0 mt-3 w-full bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div className="flex flex-col items-center">
                        <FaXTwitter className="w-6 h-6" />
                        <span className="text-sm pt-2">X</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaYoutube className="w-6 h-6" />
                        <span className="text-sm pt-2">YouTube</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaInstagram className="w-6 h-6" />
                        <span className="text-sm pt-2">Instagram</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaTiktok className="w-6 h-6" />
                        <span className="text-sm pt-2">Tiktok</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Dropdown */}
                <div className="relative group w-full">
                  <div className="flex items-center cursor-pointer space-x-1 group-hover:opacity-80">
                    <span className="text-sm">INFO</span>
                    <IoIosArrowDropdown size={16} className="w-4 h-4" />
                  </div>
                  <div className="absolute left-0 mt-3 w-full bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="p-2 space-y-2">
                      <a
                        href="#"
                        className="block p-2 hover:bg-gray-50 rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAboutOpen(true);
                        }}
                      >
                        WENA
                      </a>
                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Sponsors
                      </a>
                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Partners
                      </a>
                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showTitleOnly && (
            <div className="flex md:flex-row md:hidden flex-col justify-between items-center px-4 py-3 border-b border-gray-200">
              <div className="hidden md:block">
                <h1 className="text-xl font-bold ">W</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-sm">
                  <span className="text-gray-500">NOW READING:</span>
                  <br className="md:hidden" />
                  <span className="ml-1">{pageTitle}</span>
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
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-white border-b border-gray-200">
          {showTitleOnly ? (
            <div className="flex items-center justify-between px-4 py-3">
              <div className="w-1/3"></div>
              <div className="w-1/3 flex justify-center">
                <h1 className="text-xl font-bold mr-2">W</h1>
                <p className="text-sm pt-[0.2rem]">
                  <span className="text-gray-500">NOW READING:</span>
                  <span>{pageTitle}</span>
                </p>
              </div>
              <div className="w-1/3 flex justify-end items-center">
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
            <div className="flex justify-between items-center px-4 py-3">
              <div className="w-1/3"></div>
              <div className="w-1/3 flex justify-center">
                <button className="text-lg font-bold">
                  <TransitionLink href="/">WENA ANEW</TransitionLink>
                </button>
              </div>
              <div className="w-1/3 flex justify-end items-center space-x-6">
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
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div className="flex flex-col items-center">
                        <FaXTwitter className="w-6 h-6" />
                        <span className="text-sm pt-2">X</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaYoutube className="w-6 h-6" />
                        <span className="text-sm pt-2">YouTube</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaInstagram className="w-6 h-6" />
                        <span className="text-sm pt-2">Instagram</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaTiktok className="w-6 h-6" />
                        <span className="text-sm pt-2">Tiktok</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">INFO</span>
                    <Image
                      src="/assets/icons/ios-arrow-down.svg"
                      className="w-3 h-3"
                      alt="arrow-down"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="p-2 space-y-2">
                      <button
                        className="block p-2 hover:bg-gray-50 rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAboutOpen(true);
                        }}
                      >
                        <TransitionLink href="/">WENA </TransitionLink>
                      </button>

                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Sponsors
                      </a>
                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Partners
                      </a>
                      <a
                        href="/"
                        className="block p-2 hover:bg-gray-50 rounded"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    
      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} isOpen={false} />}
    </>
  );
};

export default NavBar;