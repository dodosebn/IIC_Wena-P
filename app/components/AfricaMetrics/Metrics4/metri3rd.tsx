// metri3rd.tsx
import React from "react";

interface Metric {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  icon: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {metrics.map((metric, index) => (
        <main className="border-2 border-black/70"   key={index}>
        <div 
          className="relative bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center aspect-square"
        >
          {/* Circular background for the icon */}
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-3xl">
            {metric.icon}
          </div>
          
          {/* Main value in center */}
          <div className="text-center mb-4">
            <p className="text-4xl font-bold dark:text-white">
              {metric.value}
            </p>
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-2">
              {metric.title}
            </h3>
          </div>
          
          {/* Trend indicator */}
          <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center ${
            metric.trend === "up" ? "text-green-500" : "text-red-500"
          }`}>
            <span className="text-sm font-medium mr-1">
              {metric.change}
            </span>
            {metric.trend === "up" ? (
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          
          {/* Description ribbon at bottom */}
          <div className="absolute bottom-[3rem] w-[50%] bg-indigo-50 dark:bg-indigo-800 rounded-b-full py-2 px-4">
            <p className="text-xs text-center text-gray-600 dark:text-gray-300">
              {metric.description}
            </p>
          </div>
        </div>
        </main>
      ))}
    </div>
  );
};

export default MetricsGrid;