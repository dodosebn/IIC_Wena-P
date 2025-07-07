"use client";

import React, { useEffect, useState } from "react";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok, IoMailUnread, IoMenu } from "react-icons/io5";
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
    <div className="flex h-[4rem] items-center">
      <a
        href={`https://www.instagram.com/sharer/sharer.php?u=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-full px-4 border-l border-gray-300"
      >
        <FaSquareInstagram size={30} />
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
        <IoMailUnread size={30} />
      </a>
    </div>
  );

  return (
    <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white md:ml-[280px] ">

        <MobileNav
          toggleSidebar={toggleSidebar}
          handleMenu={handleMenu}
          showTitleOnly={showTitleOnly}
          handleMenuItemClick={handleMenuItemClick}
        />

        <nav className="hidden md:block bg-white border-b px-5 py-3 border-gray-200 w-full">
          <div className="flex items-center justify-between h-[2.5rem]">
            <Link href="/" className="text-gray-600 text-lg cursor-pointer">
              INTRO
            </Link>

            <div className="flex items-center gap-4">
              <p className="text-gray-600">SHARE THIS:</p>
              {shareMessage && renderShareIcons()}
              <div
                className="text-3xl text-gray-700 cursor-pointer rotate-90"
                onClick={() => setMenuOpen(true)}
              >
                <IoMenu />
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
              <div
                className="absolute top-8 right-12 text-3xl cursor-pointer"
                onClick={closeAllMenus}
              >
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