'use client';

import React, { useEffect, useState } from 'react';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoLogoTiktok, IoMailUnread, IoMenu } from 'react-icons/io5';
import { GrClose } from 'react-icons/gr';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MobileNav from './mobileNav';
import { useNavbarStore } from '@/app/store/useNavStore';
import Link from 'next/link';

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
    transition: { type: 'spring', bounce: 0.4 },
  },
};

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, pageTitle }) => {
  const [showTitleOnly, setShowTitleOnly] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shareMessage, setShareMessage] = useState('');

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeAllMenus = () => setMenuOpen(false);

  const handleMenuItemClick = (path: string = '/') => {
    setMenuOpen(false);
    router.push(path);
  };

  const renderShareIcons = () => (
    <div className="flex h-[3.8rem] items-center">
      <a
        href={`https://www.instagram.com/sharer/sharer.php?u=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-full px-4 border-l border-gray-300"
      >
        <FaSquareInstagram  size={24} strokeWidth={1} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-full px-4 border-l border-gray-300"
      >
        <IoLogoTiktok size={24} strokeWidth={1} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-full px-4 border-l border-gray-300"
      >
        <FaXTwitter size={24} strokeWidth={1} />
      </a>
      <a
        href={`mailto:?subject=Check this out!&body=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-full px-4 border-l border-r border-gray-300"
      >
        <IoMailUnread size={24} strokeWidth={1} />
      </a>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white md:ml-[280px]">
        <MobileNav
          toggleSidebar={toggleSidebar}
          handleMenu={() => setMenuOpen(true)}
          showTitleOnly={showTitleOnly}
          handleMenuItemClick={handleMenuItemClick}
        />

        <nav className="hidden md:block bg-white border-b px-5 py-3 border-gray-300 w-full">
          <div className="flex items-center justify-between h-[2.2rem]">
            <Link href="/" className="text-gray-500 text-md cursor-pointer">
              INTRO
            </Link>

            <div className="flex items-center gap-4">
              {/* <p className="text-gray-600">SHARE THIS:</p> */}
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


      </header>
    </>
  );
};

export default NavBar;
