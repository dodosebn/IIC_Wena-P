'use client';
import { motion, AnimatePresence, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import FloatingIslandMetric from "./float";

const metric = [
  {
    title: "Population",
    value: "1.4B",
    change: "+2.5%",
    trend: "up" as const,
    description: "Total continental population",
    icon: "👥",
  },
  {
    title: "GDP Growth",
    value: "3.8%",
    change: "+0.4%",
    trend: "up" as const,
    description: "Annual economic expansion",
    icon: "📈",
  },
  {
    title: "Urbanization",
    value: "43%",
    change: "+1.2%",
    trend: "up" as const,
    description: "Living in cities",
    icon: "🏙️",
  },
  {
    title: "Mobile Users",
    value: "84%",
    change: "+6%",
    trend: "up" as const,
    description: "Mobile penetration rate",
    icon: "📱",
  },
  {
    title: "Youth Unemploy.",
    value: "12.8%",
    change: "-0.7%",
    trend: "down" as const,
    description: "Ages 15-24",
    icon: "🧑‍🎓",
  },
  {
    title: "Renewables",
    value: "22%",
    change: "+3.1%",
    trend: "up" as const,
    description: "Energy production",
    icon: "☀️",
  },
];

export default function UniqueMetrics() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".metric-item",
      { opacity: 1, y: 0 },
      { delay: stagger(0.15), duration: 0.7, ease: [0.16, 0.77, 0.47, 0.97] }
    );
  }, [animate]);

  return (
    <div
      ref={scope}
      className="min-h-screen bg-gradient-to-br from-sky-900 to-indigo-900 p-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {metric.map((metric, index) => (
            <motion.div
              key={index}
              className="metric-item"
              initial={{ opacity: 0, y: 60 }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
              }}
            >
              <FloatingIslandMetric metric={metric} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}