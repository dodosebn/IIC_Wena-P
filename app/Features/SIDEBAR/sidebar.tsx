"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import items from "./mapps";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { useNavbarStore } from "@/app/store/useNavStore";
import { SideProps } from "@/app/types";



const Sidebar: React.FC<SideProps> = ({ isOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isToggledDown, setIsToggledDown] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { activeIndex, setActiveIndex } = useNavbarStore();

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    itemRefs.current = new Array(items.length).fill(null);
  }, [items.length]);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      const currentItem = itemRefs.current[index];
      const nextItem = itemRefs.current[index + 1];

      if (isToggledDown && currentItem) {
        currentItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        setIsToggledDown(false);
      } else {
        if (nextItem) {
          nextItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        } else if (currentItem) {
          currentItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
        setIsToggledDown(true);
      }
    } else {
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
      className={`fixed h-screen w-[280px] bg-[#f9f9f9] border-r border-gray-200
      flex flex-col z-50 top-0 left-0
      ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""}
      transition-transform duration-300 ease-in-out shadow-sm`}
    >
      <div
        className="p-4 md:px-5  md:py-[1.1rem] flex justify-between items-center border-b
        border-gray-300 sticky top-0 bg-[#f5f5f5] z-10"
      >
        <div className="uppercase text-[#000]/90 font-medium tracking-[0.15rem] text-md text-center mx-auto">
          <Link href="/">THE WENA PROJECT</Link>
        </div>
        {isMobile && (
          <BiMenuAltRight
            className="text-gray-700 cursor-pointer text-3xl"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el ?? null;
            }}
          >
            <div
              onClick={() => handleClick(index)}
              className="block w-full text-left cursor-pointer"
            >
        <Link href={item.path} className="block w-full">
  <div className="border-b border-gray-300 hover:bg-gray-50 transition-colors w-full">
    <div className="p-6">
      <div className="relative w-full aspect-[6/3.8] overflow-hidden">
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
      <p className="block tracking-[0.5px] text-[#000]/90 leading-widest text-[12.5px] mt-2 text-start">
        {item.text}
      </p>
    </div>
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
