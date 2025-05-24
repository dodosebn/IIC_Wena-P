'use client';

import '../globals.css';  
import { useState, useEffect } from "react";
import Sidebar from "./SIDEBAR/sidebar";
import NavBar from "./NAVBAR/NavBar";
import { usePathname } from "next/navigation";

export default function MainLayoutRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pageTitle, setPageTitle] = useState("Welcome to Home");
  const [showTitle, setShowTitle] = useState(false);

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
    const onScroll = () => setShowTitle(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        pageTitle={showTitle ? pageTitle : ""}
      />
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isSidebarOpen} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        />
        <main className="flex-1 ml-[280px] transition-all duration-300 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}