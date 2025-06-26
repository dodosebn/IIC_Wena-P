import React, { useEffect, useState } from "react";
import AboutModal from "./about-modal/AboutModal";
import {
  FaInstagram,
  FaYoutube,
  FaBars,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import Image from "next/image";
import TransitionLink from "@/app/utils/transitionLink";
import MobileNav from "./mobileNav";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

const NavBar: React.FC<NavBarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  pageTitle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTitleOnly, setShowTitleOnly] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleMenu = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
<MobileNav
  toggleSidebar={toggleSidebar}
  handleMenu={handleMenu}
  showTitleOnly={showTitleOnly}
/>

        <nav className="hidden md:block bg-white border-b px-4 py-3 border-gray-200">
          {showTitleOnly ? (
            <div className="flex items-center justify-between">
              <div className="w-1/4" />
              <div className="flex flex-[2] h-[2.6rem] items-center">
                <h1 className="text-xl font-bold mr-2">W</h1>
                <p className="text-sm pt-[0.2rem]">
                  <span className="text-gray-500">NOW READING:</span>
                  <span className="flex-nowrap pl-2.5">{pageTitle}</span>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">SHARE THIS:</span>
                <div className="flex space-x-3">
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
            </div>
          ) : (
            <div className="flex justify-between items-center px-4 h-[2.5rem]">
              <div className="w-3/5" />
              <div className="w-1/3 flex justify-center">
                <TransitionLink href="/">
                  <span className="tracking-[0.5rem] text-[28px]">
                    WENA ANEW
                  </span>
                </TransitionLink>
              </div>
              <div className="w-1/3 flex justify-end items-center space-x-6">
                {/* Social + Info Dropdowns */}
                <div className="relative group">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FaInstagram className="w-4 h-4" />
                    <Image
                      src="/assets/icons/x-icon-black.png"
                      alt="X"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <FaYoutube className="w-4 h-4" />
                    <Image
                      src="/assets/icons/ios-arrow-down.svg"
                      alt="arrow-down"
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </div>
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="grid grid-cols-2 gap-4 py-3">
                      {[
                        { icon: <FaXTwitter />, label: "X" },
                        { icon: <FaYoutube />, label: "YouTube" },
                        { icon: <FaInstagram />, label: "Instagram" },
                        { icon: <FaTiktok />, label: "Tiktok" },
                      ].map(({ icon, label }) => (
                        <div key={label} className="flex flex-col items-center">
                          {icon}
                          <span className="text-sm pt-2">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">INFO</span>
                    <Image
                      src="/assets/icons/ios-arrow-down.svg"
                      alt="arrow-down"
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </div>
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg hidden group-hover:block z-50">
                    <div className="p-2 space-y-2">
                      <button
                        className="block p-2 hover:bg-gray-50 rounded w-full text-left"
                        onClick={() => setIsAboutOpen(true)}
                      >
                        <TransitionLink href="/">WENA</TransitionLink>
                      </button>
                      {["Sponsors", "Partners", "Support"].map((item) => (
                        <a
                          key={item}
                          href="/"
                          className="block p-2 hover:bg-gray-50 rounded"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* About Modal */}
      {isAboutOpen && (
        <AboutModal onClose={() => setIsAboutOpen(false)} isOpen={isAboutOpen} />
      )}
    </>
  );
};

export default NavBar;
