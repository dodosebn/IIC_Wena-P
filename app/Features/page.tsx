"use client";

import React, { useRef, useEffect, useState } from "react";
import InfoOne from "./interior-inspiration-to-kick-start-your-week/infoOne";
import { FaArrowUp } from "react-icons/fa6";


const Page = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  const scrollToElement = (elementRef: React.RefObject<HTMLDivElement | null>, section: string) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection('top');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
      
      // Update active section based on scroll position
      const section2Top = section2Ref.current?.offsetTop || 0;
      if (window.scrollY >= section2Top - 100) {
        setActiveSection('section2');
      } else {
        setActiveSection('top');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Main content container */}
      <div 
        ref={topRef} 
        className="min-h-screen w-full"
      >
        <InfoOne />
      </div>

      {/* Section 2 */}
    

      {/* Floating navigation buttons */}
      {/* <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <button
          onClick={() => scrollToElement(topRef, 'top')}
          className={`px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
            activeSection === 'top' 
              ? 'bg-black text-white' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          <span className="font-medium">Top</span>
        </button>
        <button
          onClick={() => scrollToElement(section2Ref, 'section2')}
          className={`px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
            activeSection === 'section2' 
              ? 'bg-black text-white' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          <span className="font-medium">Resources</span>
        </button>
      </div> */}

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-black text-white rounded-full shadow-xl hover:bg-gray-800 transition-all z-50 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Page;