"use client";
import TransitionLink from "@/app/utils/transitionLink";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import metrics from "./africaMaps";
const AfricaMetrics = () => {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const size = Math.min(window.innerWidth, window.innerHeight);
      setRadius(size * 0.35);
    }
  }, []);

 

  return (
<div className="min-h-screen flex items-center justify-center bg-black/60 p-4 overflow-hidden">
      {/* Desktop Circle Layout */}
      <div className="hidden md:block relative w-full h-[90vh] max-w-4xl max-h-[90vh]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-3xl font-bold  text-white mb-2">Africa Metrics</h1>
       <TransitionLink href="/">
  <ImCancelCircle
    size={39}
    className=" text-white rounded-full bg-black/60 text-opacity-80 text-center mx-auto"
  />
</TransitionLink>
          <p className="text-lg text-white text-opacity-80">
            Key Continental Indicators
          </p>
        </div>

        {radius > 0 &&
          metrics.map((metric, index) => {
            const angle = index * 60 * (Math.PI / 180);
            return (
              <div
                key={index}
                className={`absolute ${metric.color} text-white rounded-full w-24 h-24 flex flex-col 
                items-center justify-center text-center p-[5rem] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-20`}
                style={{
                  left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                  top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                }}
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
              </div>
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
            <div
              key={index}
              className={`${metric.color} text-white rounded-lg p-4 flex flex-col items-center justify-center text-center`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricaMetrics;
