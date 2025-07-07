"use client";

import React, { useEffect, useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoMail, IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import MobileNav from "./mobileNav";
import { useNavbarStore } from "@/app/store/useNavStore";
import Link from "next/link";

interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.7 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, pageTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTitleOnly, setShowTitleOnly] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shareMessage, setShareMessage] = useState("");

  const { menuOpen, setMenuOpen } = useNavbarStore();
  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;
    setShareMessage(encodeURIComponent(`Hey! Check this out : ${url}`));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitleOnly(window.scrollY > lastScrollY && window.scrollY > 100);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeAllMenus = () => setMenuOpen(false);

  const handleMenuItemClick = (path: string = "/") => {
    setMenuOpen(false);
    router.push(path);
  };

  const renderShareIcons = () => (
    <>
     <div className="flex h-[4rem] items-center">
  <a
    href={`https://www.instagram.com/sharer/sharer.php?u=${shareMessage}` }
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center h-full px-4 border-l border-gray-300"
  >
    <FaSquareInstagram size={30} />
    
    {/* <Instagram size={30} /> */}
  </a>
  <a
    href="https://www.tiktok.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center h-full px-4 border-l border-gray-300"
  >
    <IoLogoTiktok size={30} />
  </a>
  <a
    href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center h-full px-4 border-l border-gray-300"
  >
    <FaXTwitter size={30} />
  </a>
  <a
    href={`mailto:?subject=Check this out!&body=${shareMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center h-full px-4 border-l border-r border-gray-300"
  >
    <IoMdMailUnread size={30} />
  </a>
</div>

    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
        <MobileNav
          toggleSidebar={toggleSidebar}
          handleMenu={handleMenu}
          showTitleOnly={showTitleOnly}
          handleMenuItemClick={handleMenuItemClick}
        />

        <nav className="hidden md:block bg-white border-b px-4 py-3 border-gray-200">
          <div className="flex items-center justify-between h-[2.5rem]">
            <div className="w-[22%] xl:w-[25%]" />
            <div className="flex flex-[2] h-[2.6rem] items-center">
          <Link href={'/'}><h1 className="mr-2 text-gray-600 cursor-pointer">INTRO</h1></Link>    
              {/* <p className="text-sm pt-[0.2rem]">
                <span className="flex-nowrap pl-2.5">{pageTitle}</span>
              </p> */}
            </div>
            <div className="flex justify-end items-center space-x-6">
              <div className="relative group flex items-center space-x-6">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <p className="text-gray-600">SHARE THIS:</p>
                  {shareMessage && renderShareIcons()}
                </div>
                <div className="text-3xl text-gray-700 cursor-pointer rotate-90 block" onClick={() => setMenuOpen(true)}>
                  <IoMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
                 <motion.div
            className="fixed inset-0 bg-[#fff] z-50 flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
           
              <div className="absolute top-8 right-12 text-3xl cursor-pointer" onClick={closeAllMenus}>
                <GrClose />
              </div>

              <motion.ul
                className="w-full text-xl sm:text-3xl space-y-6 text-center"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {["WENA", "Sponsors", "Partners", "Support"].map((item, idx) => (
                  <motion.li key={idx} variants={itemVariant}>
                    <button
                      onClick={() => handleMenuItemClick("/features")}
                      className="hover:text-blue-400 tracking-[3px] text-xl text-black transition block w-full bg-transparent border-none"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NavBar;