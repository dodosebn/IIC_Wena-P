"use client";

import { useState } from "react";
import {
  Users,
  TrendingUp,
  Building2,
  Smartphone,
  BadgeAlert,
  Leaf,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  Building2,
  Smartphone,
  BadgeAlert,
  Leaf,
};

interface MetricCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof iconMap;
  description: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  iconName,
  description,
}) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = iconMap[iconName];

  return (
    <div
      className="w-[90vw] sm:w-64 h-52 sm:h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border rounded-2xl shadow-xl flex flex-col items-center justify-center backface-hidden">
          <Icon className="h-8 w-8 text-blue-500 mb-2" />
          <h3 className="text-sm text-gray-600 dark:text-gray-300">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border rounded-2xl shadow-xl flex items-center justify-center px-4 text-center rotate-y-180 backface-hidden">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
