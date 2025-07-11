"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import items from "./mapps";
import { BiMenuAltRight } from "react-icons/bi";
import { SidebarProps } from "@/app/types";
import { useNavbarStore } from "@/app/store/useNavStore";
import Link from "next/link";

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  setActiveIndex,
  activeIndex,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isToggledDown, setIsToggledDown] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { menuOpen } = useNavbarStore();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      // If already active, toggle scroll
      if (isToggledDown) {
        // Scroll back to current item
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        setIsToggledDown(false);
      } else {
        // Scroll to next item
        const nextItem = itemRefs.current[index + 1];
        if (nextItem) {
          nextItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
          setIsToggledDown(true);
        }
      }
    } else {
      // Normal behavior for a new item
      setActiveIndex(index);
      setIsToggledDown(false);

      if (isMobile) toggleSidebar();

      const nextItem = itemRefs.current[index + 1];
      if (nextItem) {
        nextItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      } else {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  return (
    <aside
      className={`fixed h-screen w-[280px] bg-[#f5f5f5] border-r border-gray-200
      flex flex-col z-50 top-0 left-0
      ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
      transition-transform duration-300 ease-in-out shadow-sm`}
    >
      <div
        className="p-4 md:px-5 md:py-[1.1rem] flex justify-between items-center border-b
        border-gray-200 sticky top-0 bg-[#f5f5f5] z-10"
      >
        <div
          className="uppercase text-gray-500 font-medium 
          tracking-[0.15rem] text-md text-center mx-auto"
        >
          <a href="/">THE WENA PROJECT</a>
        </div>
        {isMobile && (
          <BiMenuAltRight
            className="text-gray-700 cursor-pointer text-3xl"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div className="flex-1 p-1 overflow-y-auto">
        {items.map((item, index) => (
<div
  key={index}
  ref={(el) => {
    itemRefs.current[index] = el;
  }}
>
  <div
    onClick={() => handleClick(index)}
    className="block w-full text-left cursor-pointer"
  >
    <Link href={item.path}>
      <div className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors`}>
        <div className="relative w-full aspect-[5/3] overflow-hidden">
          <Image
            src={item.img}
            alt={item.text || "Sidebar Item"}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover"
            priority={index < 6}
          />
          {index === activeIndex && (
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
              <span className="text-white text-xs uppercase tracking-wider">
                {item.activeLabel}
              </span>
            </div>
          )}
        </div>
        <p className="text-gray-800 text-sm mt-2 text-start">{item.text}</p>
      </div>
    </Link>
  </div>
</div>

        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
