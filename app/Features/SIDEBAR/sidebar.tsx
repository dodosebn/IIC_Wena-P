"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import items from "./mapps";
import { BiMenuAltRight } from "react-icons/bi";
import TransitionLink from "@/app/utils/transitionLink";
import { SidebarProps } from "@/app/types";


const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  setActiveIndex,
  activeIndex,
}) =>  {
  const sidebarListRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (isMobile) {
      toggleSidebar(); // Close sidebar after click on mobile
    }
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
       <aside
      className={`
        fixed h-screen w-[280px] bg-white border-r border-gray-200
        flex flex-col z-50 top-0 left-0
        ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
        transition-transform duration-300 ease-in-out shadow-sm
      `}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">
          WENA WORK
        </div>
        {isMobile && (
          <BiMenuAltRight
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={toggleSidebar} // Removed the ! operator
          />
        )}
      </div>

      <div ref={sidebarListRef} className="flex-1 overflow-y-auto">
        {items.map((item, index) => (
          <TransitionLink href={item.path} key={index}>
            <div
              className={`
                p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors
                ${index === activeIndex ? "bg-gray-50" : ""}
              `}
              onClick={() => handleClick(index)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
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
              <p className="text-sm text-gray-800 mt-2 text-center">{item.text}</p>
            </div>
          </TransitionLink >
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
