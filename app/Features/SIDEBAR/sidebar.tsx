"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import items from "./mapps";

type SidebarProps = {
  isOpen: boolean;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setActiveIndex,
  activeIndex,
}) => {
  const sidebarListRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const sidebarList = sidebarListRef.current;
    const clickedItem = sidebarList?.children[index] as HTMLElement;
    if (sidebarList && clickedItem) {
      sidebarList.scrollTo({
        top: clickedItem.offsetTop - sidebarList.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className={`
      fixed h-screen w-[280px] bg-white border-r border-gray-200
      flex flex-col z-20 top-0 left-0
      ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
      transition-transform duration-300 ease-in-out shadow-sm
    `}>
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
          WENA PROJECT
        </span>
      </div>

      <div 
        ref={sidebarListRef}
        className="flex-1 overflow-y-auto"
      >
        {items.map((item, index) => (
          <Link href={item.path} key={index}>
              <div className={`
                p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors
                ${index === activeIndex ? "bg-gray-50" : ""}
              `}
                onClick={() => handleClick(index)}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={item.img}
                    alt={item.text || "Sidebar Item"}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover"
                    priority={index < 3}
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
                      <span className="text-white text-xs uppercase tracking-wider font-bold">
                        {item.activeLabel}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-800 mt-2 text-center">
                  {item.text}
                </p>
              </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;