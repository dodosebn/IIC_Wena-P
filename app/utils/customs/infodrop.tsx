import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionLink from '../transitionLink';

interface InfoProps {
  setIsAboutOpen: (value: boolean) => void;
}

const InfoDrop: React.FC<InfoProps> = ({ setIsAboutOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-1">
        <span className="text-sm">INFO</span>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/assets/icons/ios-arrow-down.svg"
            alt="arrow-down"
            width={12}
            height={12}
            className="w-3 h-3"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50 overflow-hidden"
          >
            <div className="p-2 space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block p-2 hover:bg-gray-50 rounded w-full text-left"
                onClick={() => setIsAboutOpen(true)}
              >
                <TransitionLink href="/">WENA</TransitionLink>
              </motion.button>
              
              {["Sponsors", "Partners", "Support"].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/"
                  className="block p-2 hover:bg-gray-50 rounded"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfoDrop;