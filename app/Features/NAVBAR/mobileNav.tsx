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
import Wena from '@/app/Features/sections/wena';
import Sponsors from '@/app/Features/sections/sponsors';
import Partners from '@/app/Features/sections/partners';
import Support from '@/app/Features/sections/support';

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

const sectionMap: Record<string, React.ReactNode> = {
  wena: <Wena />,
  sponsors: <Sponsors />,
  partners: <Partners />,
  support: <Support />,
};

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
      {/* Top Nav */}
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

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="flex justify-end p-4"
              variants={menuItemVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button onClick={toggleMenuOverlay} aria-label="Close menu">
                <IoClose size={28} className="text-gray-800" />
              </button>
            </motion.div>

            <motion.ul
              className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-800 mt-16"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {['wena', 'sponsors', 'partners', 'support'].map((item, idx) => (
                <motion.li key={idx} variants={menuItemVariant}>
                  <button
                    onClick={() => handleSectionClick(item)}
                    className="hover:text-blue-400 tracking-[3px] text-xl uppercase text-black transition"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}

              {/* Social Icons with Animation */}
              <motion.li variants={menuItemVariant}>
                <div className="flex justify-center gap-6 pt-3 text-3xl text-gray-700">
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={menuItemVariant}
                  >
                    <FaXTwitter />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={menuItemVariant}
                  >
                    <FaFacebookSquare />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={menuItemVariant}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={menuItemVariant}
                  >
                    <FaTiktok />
                  </motion.a>
                  <motion.a
                    href={`mailto:?subject=Check this out&body=${shareMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={menuItemVariant}
                  >
                    <IoMail />
                  </motion.a>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Overlay */}
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeSection && (
              <motion.div
                className="fixed inset-0 z-[99999] bg-white overflow-y-auto"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div
                  className="absolute top-5 right-5 text-3xl cursor-pointer z-50"
                  onClick={closeSection}
                >
                  <GrClose color="#000000" />
                </div>

                <motion.div
                  className="min-h-screen max-w-7xl mx-auto px-6 py-20 flex items-start justify-center"
                  variants={contentVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {activeSection && sectionMap[activeSection] || (
                    <div className="text-center py-20 text-gray-500">
                      Page build in progress.
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default MobileNav;
