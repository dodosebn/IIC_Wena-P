'use client';

import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import Wena from "@/app/Features/sections/wena";
import Sponsors from "@/app/Features/sections/sponsors";
import Partners from "@/app/Features/sections/partners";
import Support from "@/app/Features/sections/support";

const sectionMap: Record<string, React.ReactNode> = {
  "wena": <Wena />,
  "sponsors": <Sponsors />,
  "partners": <Partners />,
  "support": <Support />
};

interface NavSectionContentProps {
  section: string;
  onClose: () => void;
}

const SectionOverlayContent: React.FC<NavSectionContentProps> = ({ section, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-white overflow-y-auto"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div
        className="absolute top-5 right-5 text-3xl cursor-pointer z-50"
        onClick={onClose}
      >
        <GrClose color="#000000" />
      </div>

      <div className="min-h-screen max-w-7xl mx-auto px-6 py-3 flex items-start justify-center">
        {sectionMap[section] || (
          <div className="text-center py-20 text-gray-500">Page build in progress.</div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionOverlayContent;
