"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import Sidebar from "./SIDEBAR/sidebar";
import NavBar from "./NAVBAR/NavBar";
import { usePathname } from "next/navigation";
import MobFoot from "../utils/mobFoot";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavbarStore } from "@/app/store/useNavStore";
import { GrClose } from "react-icons/gr";
import { createPortal } from "react-dom";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionContent from "../components/Home/sectionContent";
import items from "./SIDEBAR/mapps";
import Link from "next/link";

const navItems = [
  { name: "LAST GENERATION", key: "last-generation" },
  { name: "THE WENA PROJECT", key: "sosioloji" },
  { name: "OUR PURPOSE", key: "purpose" },
  { name: "SPONSOR WENA", key: "editor" },
  { name: "ANEWWENA.COM", key: "anewwena.com" },
  { name: "SUPPORT US", key: "movement" },
  { name: "PARTNER WITH US", key: "filosofi" },
  { name: "INVEST IN WENA", key: "ideaiscapital" },
  { name: "CONNECT", key: "connect" },
];

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
    transition: { type: "spring", bounce: 0.4 },
  },
};

export default function MainLayoutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, activeIndex, setActiveIndex } = useNavbarStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    const index = items.findIndex(item => pathname?.startsWith(item.path));
    setActiveIndex(index);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setShareMessage(encodeURIComponent(`Hey! Check this out: ${window.location.href}`));
  }, []);

  return (
    <div className="relative z-0 min-h-screen flex flex-col">
      <div className="w-full">
        <NavBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          pageTitle={items[activeIndex]?.text || "Welcome to Home"}
        />

        <div className="flex flex-1">
          <Sidebar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isOpen={isSidebarOpen}
          />
          <main className="flex-1 md:ml-[280px] mt-2 transition-all duration-300 overflow-y-auto">
            {children}
          </main>
        </div>

        <div className="md:hidden px-4 py-6 border-t border-gray-300">
          <MobFoot />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-[#fff] z-[999] flex items-center justify-center mx-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <button
                className="absolute top-5 right-5 text-4xl cursor-pointer z-50"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                }}
              >
                <GrClose color="#000000" />
              </button>

              <motion.ul
                className="w-full text-xl absolute sm:text-3xl space-y-5 font-light text-center"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navItems.map((item, index) => {
                  if (item.name === "ANEWWENA.COM") {
                    return (
                      <motion.li key={item.key} variants={itemVariant}>
                        <Link
                          href={`https://${item.key}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="uppercase text-gray-900 hover:text-blue-400 text-xl"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li key={item.key} variants={itemVariant}>
                      <button
                        onClick={() => setActiveSection(item.key)}
                        className={`hover:text-blue-400 uppercase cursor-pointer text-gray-900 leading-tight transition ${
                          index === 0
                            ? "text-2xl md:text-4xl font-bold"
                            : "text-xl font-light"
                        }`}
                      >
                        {item.name}
                      </button>
                      {item.name === "LAST GENERATION" && (
                        <div className="h-px w-[80%] font-extrabold md:w-130 mx-auto bg-black mt-9" />
                      )}
                      {item.name === "SUPPORT US" && (
                        <div className="h-px w-[55%] md:w-80 font-extrabold mx-auto bg-black/20 mt-9" />
                      )}
                    </motion.li>
                  );
                })}

                {!isDesktop && (
                  <motion.li variants={itemVariant}>
                    <div className="flex justify-center gap-6 pt-9 text-3xl text-gray-700">
                      <motion.a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariant}
                      >
                        <FaXTwitter size={24} />
                      </motion.a>
                      <motion.a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariant}
                      >
                        <FaFacebookSquare size={24} />
                      </motion.a>
                      <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariant}
                      >
                        <FaInstagram size={24} />
                      </motion.a>
                      <motion.a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariant}
                      >
                        <FaTiktok size={24}  />
                      </motion.a>
                      <motion.a
                        href={`mailto:?subject=Check this out&body=${shareMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariant}
                      >
                        <IoMail size={24} />
                      </motion.a>
                    </div>
                  </motion.li>
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeSection && (
              <SectionContent
                key={activeSection}
                section={activeSection}
                onClose={() => setActiveSection(null)}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
