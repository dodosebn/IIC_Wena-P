'use client';

import '../globals.css';
import { useState, useEffect } from "react";
import Sidebar from "./SIDEBAR/sidebar";
import NavBar from "./NAVBAR/NavBar";
import { usePathname } from "next/navigation";
import MobFoot from '../utils/mobFoot';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavbarStore } from "@/app/store/useNavStore";
import { GrClose } from 'react-icons/gr';
import SectionOverlayContent from '../components/Home/sectionContent';
import { createPortal } from 'react-dom';

const navItems = [
  { name: "WENA", key: "wena" },
  { name: "Sponsors", key: "sponsors" },
  { name: "Partners", key: "partners" },
  { name: "Support", key: "support" },
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
    transition: { type: 'spring', bounce: 0.4 },
  },
};

export default function MainLayoutRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen } = useNavbarStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pageTitle, setPageTitle] = useState("Welcome to Home");
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const pageConfig = [
    {
      path: "/Features/interior-inspiration-to-kick-start-your-week",
      title: "Interior inspiration to kick-start your week"
    },
    {
      path: "/Features/this-new-mediterranean-restaurant-in-miami-has-michelin-cred",
      title: "This new Mediterranean restaurant in Miami has Michelin cred"
    },
    {
      path: "/Features/stunning-modern-home-with-breathtaking-outdoor-space",
      title: "Stunning modern home with breathtaking outdoor space"
    },
    {
      path: "/Features/interior-six-inspiration-to-kick-start-your-week",
      title: "Interior six inspiration to kick-start your week"
    },
  ];

  useEffect(() => {
    const index = pageConfig.findIndex(page => pathname?.startsWith(page.path));
    setActiveIndex(index);
  }, [pathname]);

  useEffect(() => {
    setPageTitle(
      activeIndex === -1
        ? "Welcome to Home"
        : pageConfig[activeIndex]?.title || ""
    );
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen || activeSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeSection]);

  return (
    <div className="relative z-0 min-h-screen flex flex-col">
      <div className="w-full">
        <NavBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          pageTitle={pageTitle}
        />

        <div className="flex flex-1">
          <Sidebar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isOpen={isSidebarOpen}
          />
          <main className="flex-1 md:ml-[280px] mt-2 transition-all duration-300 overflow-y-auto">
            {children}
          </main>
        </div>

        <div className="md:hidden px-4 py-6 border-t border-gray-300">
          <MobFoot />
        </div>

        {isDesktop && (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}  // <-- This makes it slide down when closing
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <button
          className="absolute top-8 right-12 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <GrClose size={28} className="text-gray-800" />
        </button>

        <motion.ul
          className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-800 mt-16"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {navItems.map((item) => (
            <motion.li key={item.key} variants={itemVariant}>
              <button
                onClick={() => setActiveSection(item.key)}
                className="hover:text-blue-400 tracking-[3px] text-xl text-black transition block w-full bg-transparent border-none"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    )}
  </AnimatePresence>
)}
      </div>

      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeSection && (
              <SectionOverlayContent
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