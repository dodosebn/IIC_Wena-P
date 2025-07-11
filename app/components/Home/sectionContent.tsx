// 'use client';

// import React from "react";
// import { motion } from "framer-motion";
// import { GrClose } from "react-icons/gr";
// import Wena from "@/app/Features/sections/wena";
// import Sponsors from "@/app/Features/sections/sponsors";
// import Partners from "@/app/Features/sections/partners";
// import Support from "@/app/Features/sections/support";

// const sectionMap: Record<string, React.ReactNode> = {
//   "wena": <Wena />,
//   "sponsors": <Sponsors />,
//   "partners": <Partners />,
//   "support": <Support />
// };

// interface NavSectionContentProps {
//   section: string;
//   onClose: () => void;
// }

// const SectionOverlayContent: React.FC<NavSectionContentProps> = ({ section, onClose }) => {
//   return (
//     <motion.div
//       className="fixed inset-0 z-[99999] bg-nav overflow-y-auto"
//       initial={{ y: "100%" }}
//       animate={{ y: 0 }}
//       exit={{ y: "100%" }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//     >
//       <div
//         className="absolute top-5 right-5 text-3xl cursor-pointer z-50"
//         onClick={onClose}
//       >
//         <GrClose color="#000000" />
//       </div>

//       <div className="min-h-screen max-w-7xl mx-auto px-6 py-3 flex items-start justify-center">
//         {sectionMap[section] || (
//           <div className="text-center py-20 text-gray-500">Page build in progress.</div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default SectionOverlayContent;
// src/components/NavSectionContent.tsx
import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";


// import Purpose from "../Sections/Purpose";
// import Editor from "../Sections/Editor";
// import Contributors from "../Sections/Contributors";
// import Author from "../pages/Author";
// import Movement from "../Sections/Movement";
// import Filosofi from "../Sections/Filosofi";

import Connect from "@/app/Features/sections/connect";
import IIC from "@/app/Features/sections/iic";
import Filosofi from "@/app/Features/sections/filosofi";
import Movement from "@/app/Features/sections/movement";
import LastGeneration from "@/app/Features/sections/lastGeneration";
import Sosioloji from "@/app/Features/sections/sosioloji";
import Purpose from "@/app/Features/sections/purpose";

// Map of nav keys to their components
const sectionMap: Record<string, React.ReactNode> = {
  "last-generation": <LastGeneration />,
  "sosioloji": <Sosioloji />,
  "purpose": <Purpose />,
  // "editor": <Author />,
  // "contributors": <Contributors />,
  "movement": <Movement />,
  "filosofi": <Filosofi />,
  "ideaiscapital": <IIC />,
  "connect": <Connect />,
};

interface NavSectionContentProps {
  section: string;
  onClose: () => void;
}

const SectionContent: React.FC<NavSectionContentProps> = ({ section, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-nav  overflow-y-auto"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Close icon */}
      <div
        className="absolute top-5 right-5 text-4xl cursor-pointer z-50"
        onClick={onClose}
      >
        <GrClose color="#000000" />
      </div>

      {/* Section content */}
      <div className="max-w-7xl mx-auto  flex items-center justify-center">
        {sectionMap[section] || (
          <div className="text-center py-20 text-gray-500">page build in progress.</div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionContent;