'use client';
import { motion } from "framer-motion";

type Metric = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: string;
};

const FloatingIslandMetric = ({ metric }: { metric: Metric }) => {
  return (
    <motion.div
      initial={{ y: 10 }}
      animate={{ y: -5 }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut" 
      }}
      className="relative flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/20 transition-all"
    >
      {/* Hot-air balloon (icon) */}
      <div className="text-4xl mb-2 z-10">{metric.icon}</div>
      
      {/* Floating island (value) */}
      <motion.div 
        className="text-3xl font-bold text-white mb-1"
        whileHover={{ scale: 1.05 }}
      >
        {metric.value}
      </motion.div>
      
      {/* Cloud (title) */}
      <div className="text-sm text-white/80 mb-2">{metric.title}</div>
      
      {/* Trend as a kite/bird */}
      <div className={`absolute -top-3 -right-3 text-xl ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
        {metric.trend === "up" ? "🪁" : "🦅"}
      </div>
      
      {/* Change percentage */}
      <div className={`text-sm ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
        {metric.change}
      </div>
      
      {/* Description (subtle cloud) */}
      <motion.div 
        className="mt-2 text-xs text-white/60 text-center max-w-[120px]"
        whileHover={{ scale: 1.03 }}
      >
        {metric.description}
      </motion.div>
    </motion.div>
  );
};

export default FloatingIslandMetric;