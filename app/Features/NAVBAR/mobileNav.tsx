'use client';

import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoClose, IoMail, IoMenu } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import TransitionLink from '@/app/utils/transitionLink';

interface MobileNavProps {
  toggleSidebar: () => void;
  handleMenu: () => void;
  showTitleOnly: boolean;
  handleMenuItemClick: (path: string) => void;
}

// ✅ Animation variants
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

const MobileNav: React.FC<MobileNavProps> = ({
  toggleSidebar,
  handleMenu,
  showTitleOnly,
  handleMenuItemClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    const url = window.location.href;
    setShareMessage(encodeURIComponent(`Hey! Check this out : ${url}`));
  }, []);

  const toggleMenuOverlay = () => {
    setIsMenuOpen((prev) => !prev);
    handleMenu();
  };

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
          <button
            onClick={toggleMenuOverlay}
            className="flex flex-col items-center"
            aria-label="Toggle mobile menu"
          >
            <IoMenu className="transform rotate-90 text-3xl" />
          </button>
        </div>
      </div>

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
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button onClick={toggleMenuOverlay} aria-label="Close menu">
                <IoClose size={28} className="text-gray-800" />
              </button>
            </motion.div>

            {/* 🔥 Menu Links */}
            <motion.ul
              className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-800 mt-16"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {['WENA', 'Sponsors', 'Partners', 'Support'].map((item, idx) => (
                <motion.li key={idx} variants={itemVariant}>
                  <button
                    onClick={() => handleMenuItemClick('/features')}
                    className="hover:text-blue-400 tracking-[3px] text-xl text-black transition"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            {/* 🔥 Social Icons */}
            <motion.div
              className="flex justify-center gap-6 pt-10 text-3xl text-gray-700"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
              >
                <FaXTwitter />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
              >
                <FaFacebookSquare />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
              >
                <FaTiktok />
              </motion.a>
              <motion.a
                href={`mailto:?subject=Check this out&body=${shareMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
              >
                <IoMail />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
