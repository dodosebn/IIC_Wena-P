import React, { useEffect, useState } from "react";
import AboutModal from "./about-modal/AboutModal";
import {
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";
import TransitionLink from "@/app/utils/transitionLink";
import MobileNav from "./mobileNav";
import InfoDrop from "@/app/utils/infodrop";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

const getShareMessage = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return encodeURIComponent(`Hey! Check this out : ${url}`);
};

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
            <div className="flex items-center justify-between h-[2.5rem]">
              <div className="w-1/4" />
              <div className="flex flex-[2] h-[2.6rem] items-center">
                <h1 className="text-xl font-bold mr-2">W</h1>
                <p className="text-sm pt-[0.2rem]">
                  <span className="flex-nowrap pl-2.5">{pageTitle}</span>
                </p>
              </div>
              <div className="flex justify-end items-center space-x-6">
                <div className="relative group flex items-center space-x-6">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <p className="text-gray-600">SHARE THIS:</p>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${getShareMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaSquareXTwitter className="text-xl" />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <AiFillTikTok className="text-xl" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${getShareMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaFacebookSquare className="text-xl" />
                    </a>
                    <a
                      href={`https://wa.me/?text=${getShareMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                    <a
                      href={`https://t.me/share/url?url=${getShareMessage()}&text=Hey! Check this out :`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaTelegram className="text-xl" />
                    </a>
                  </div>
                  <div className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3">
                    <InfoDrop setIsAboutOpen={setIsAboutOpen} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center px-4 h-[2.5rem]">
              <div className="w-3/5" />
              <div className="w-1/3 flex justify-center">
                <TransitionLink href="/">
                  <span className="tracking-[0.5rem] text-[28px]">
                    WENA PROJECT
                  </span>
                </TransitionLink>
              </div>
              <div className="w-1/3 flex justify-end items-center space-x-6">
                <div className="relative group flex items-center space-x-6">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${getShareMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaSquareXTwitter className="text-xl" />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <AiFillTikTok className="text-xl" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${getShareMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3"
                    >
                      <FaFacebookSquare className="text-xl" />
                    </a>

                  </div>
                  <div className="h-[4rem] border-l border-gray-200 flex justify-center items-center pl-3">
                    <InfoDrop setIsAboutOpen={setIsAboutOpen} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {isAboutOpen && (
        <AboutModal onClose={() => setIsAboutOpen(false)} isOpen={isAboutOpen} />
      )}
    </>
  );
};

export default NavBar;
