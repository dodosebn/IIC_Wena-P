"use client";

import { useEffect, useState } from "react";
import { MetricCard } from "./africaMetric2";
import IntroAnima from "../../introAnima";

const metrics = [
  {
    title: "Population",
    value: "1,200",
    iconName: "Users",
    description: "Total population in thousands",
  },
  {
    title: "GDP Growth",
    value: "3.2%",
    iconName: "TrendingUp",
    description: "Annual GDP growth rate in percentage",
  },
  {
    title: "Urbanization",
    value: "38%",
    iconName: "Building2",
    description: "Percentage of population living in urban areas",
  },
  {
    title: "Mobile Users",
    value: "72%",
    iconName: "Smartphone",
    description: "Percentage of people using mobile phones",
  },
  {
    title: "Youth Unemploy.",
    value: "14.5%",
    iconName: "BadgeAlert",
    description: "Unemployment rate among youth",
  },
  {
    title: "Renewables",
    value: "18%",
    iconName: "Leaf",
    description: "Renewable energy usage as a percent of total",
  },
];

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metrics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center pt-6 px-4 space-y-4">
      {showIntro ? (
        <IntroAnima />
      ) : (
        <>
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center px-4">
            Tap or click on any card to flip and view more details.
          </p>

          {/* ✅ Mobile: Show 1 card at a time */}
          <div className="sm:hidden flex flex-col items-center space-y-2">
            <MetricCard {...metrics[currentIndex]} />
            <div className="flex gap-2 mt-2">
              {metrics.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* ✅ Desktop: Show all cards */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
