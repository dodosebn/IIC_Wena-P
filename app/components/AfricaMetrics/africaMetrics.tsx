"use client";
import TransitionLink from "@/app/utils/transitionLink";
import React, { useEffect, useState, useRef } from "react";
import { ImCancelCircle } from "react-icons/im";
import metrics from "./africaMaps";
import { motion } from "framer-motion";

const AfricaMetrics = () => {
  const [radius, setRadius] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const rotationRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const size = Math.min(window.innerWidth, window.innerHeight);
      setRadius(size * 0.35);
    }
  }, []);

  useEffect(() => {
    const rotateItems = () => {
      if (!radius) return;
      
      rotationRef.current += 0.2;
      itemsRef.current.forEach((item, index) => {
        if (item) {
          const angle = (index * 60 + rotationRef.current) * (Math.PI / 180);
          item.style.left = `calc(50% + ${radius * Math.cos(angle)}px)`;
          item.style.top = `calc(50% + ${radius * Math.sin(angle)}px)`;
        }
      });
      animationRef.current = requestAnimationFrame(rotateItems);
    };

    if (isRotating) {
      animationRef.current = requestAnimationFrame(rotateItems);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [radius, isRotating]);

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  const addToItemsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      itemsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 p-4 overflow-hidden">
      {/* Desktop Circle Layout */}
      <div className="hidden md:block relative w-full h-[90vh] max-w-4xl max-h-[90vh]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Africa Metrics</h1>
          <TransitionLink href="/">
            <ImCancelCircle
              size={39}
              className="text-white rounded-full bg-black/60 text-opacity-80 text-center mx-auto cursor-pointer hover:scale-110 transition-transform"
            />
          </TransitionLink>
          {/* <p className="text-lg text-white text-opacity-80">
            Key Continental Indicators
          </p> */}
          <button 
            onClick={toggleRotation}
            className="mt-4 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            {isRotating ? 'Pause' : 'Play'} Rotation
          </button>
        </div>

        {radius > 0 &&
          metrics.map((metric, index) => {
            const angle = index * 60 * (Math.PI / 180);
            return (
              <motion.div
                key={index}
                ref={(el) => addToItemsRef(el, index)}
                className={`circle-item absolute ${metric.color} text-white rounded-full w-24 h-24 flex flex-col 
                items-center justify-center text-center p-[5rem] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-20`}
                style={{
                  left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                  top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1
                }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
              >
                <div className="text-2xl">{metric.icon}</div>
                <div className="text-sm font-semibold mt-1">{metric.title}</div>
                <div className="text-lg font-bold">{metric.value}</div>
                <div
                  className={`text-xs mt-1 ${
                    metric.trend === "up" ? "text-green-200" : "text-red-200"
                  }`}
                >
                  {metric.change} {metric.trend === "up" ? "▲" : "▼"}
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">Africa Metrics</h1>
          <p className="text-white text-opacity-80">
            Key Continental Indicators
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`${metric.color} text-white rounded-lg p-4 flex flex-col items-center justify-center text-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl">{metric.icon}</div>
              <div className="text-sm font-semibold mt-1">{metric.title}</div>
              <div className="text-lg font-bold">{metric.value}</div>
              <div
                className={`text-xs mt-1 ${
                  metric.trend === "up" ? "text-green-200" : "text-red-200"
                }`}
              >
                {metric.change} {metric.trend === "up" ? "▲" : "▼"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMetrics;