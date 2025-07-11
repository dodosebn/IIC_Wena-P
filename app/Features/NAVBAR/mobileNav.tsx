'use client';

import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoClose, IoMail, IoMenu } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TransitionLink from '@/app/utils/transitionLink';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
// import Wena from '@/app/Features/sections/wena';
// import Sponsors from '@/app/Features/sections/sponsors';
// import Partners from '@/app/Features/sections/partners';
// import Support from '@/app/Features/sections/support';

interface MobileNavProps {
  toggleSidebar: () => void;
  handleMenu: () => void;
  showTitleOnly: boolean;
  handleMenuItemClick: (path: string) => void;
}

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const menuItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4 },
  },
};

const contentVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

// const sectionMap: Record<string, React.ReactNode> = {
//   wena: <Wena />,
//   sponsors: <Sponsors />,
//   partners: <Partners />,
//   support: <Support />,
// };

const MobileNav: React.FC<MobileNavProps> = ({
  toggleSidebar,
  handleMenu,
  showTitleOnly,
  handleMenuItemClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const url = window.location.href;
    setShareMessage(encodeURIComponent(`Hey! Check this out : ${url}`));
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || activeSection ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, activeSection]);

  const toggleMenuOverlay = () => {
    setIsMenuOpen(prev => !prev);
    handleMenu();
  };

  const handleSectionClick = (key: string) => {
    setActiveSection(key);
    setIsMenuOpen(false);
  };

  const closeSection = () => setActiveSection(null);

  return (
    <div className="md:hidden relative">
      <div className="flex justify-between items-center border-b border-gray-400 h-14">
        <div className="h-full border-r border-gray-400 flex items-center px-4">
          <button onClick={toggleSidebar} aria-label="Toggle sidebar">
            <BiMenuAltLeft className="text-gray-700 text-3xl" />
          </button>
        </div>
        <div className="flex justify-center">
          <TransitionLink href="/">
            <span className="tracking-[0.2rem] text-[1rem] font-bold">
              THE WENA PROJECT
            </span>
          </TransitionLink>
        </div>
        <div className="h-full border-l border-gray-400 flex items-center px-4">
          <button onClick={toggleMenuOverlay} aria-label="Toggle mobile menu">
            <IoMenu className="transform rotate-90 text-3xl" />
          </button>
        </div>
      </div>


    </div>
  );
};

export default MobileNav;
