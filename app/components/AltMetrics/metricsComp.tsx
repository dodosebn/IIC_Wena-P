'use client';
import { useEffect, useState } from 'react';
import VerticalLines from './verticalLine';

type Metric = {
  id: number;
  title: string;
  value: string;
  description: string;
};

const MetricsComponent = () => {
  const [showCards, setShowCards] = useState(false);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [linesAnimationComplete, setLinesAnimationComplete] = useState(false);

  const metrics: Metric[] = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    title: 'User Growth',
    value: '42%',
    description: 'Year-over-year increase in active users',
  }));

  useEffect(() => {
    if (!linesAnimationComplete) return;

    setShowCards(true);
    const timer = setTimeout(() => {
      setActiveMetric(0);
    }, 300); // slight delay after lines disappear

    return () => clearTimeout(timer);
  }, [linesAnimationComplete]);

  useEffect(() => {
    if (activeMetric === null) return;

    const timer = setTimeout(() => {
      if (activeMetric < metrics.length - 1) {
        setActiveMetric(prev => (prev !== null ? prev + 1 : 0));
      }
    }, 150); // animation interval

    return () => clearTimeout(timer);
  }, [activeMetric, metrics.length]);

  return (
    <div className="relative min-h-[400px] w-full max-w-6xl mx-auto p-4 md:p-8 bg-black overflow-hidden">
      <VerticalLines onAnimationEnd={() => setLinesAnimationComplete(true)} />

      {/* Metrics */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-16">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            className={`transition-all duration-500 ease-out transform ${
              showCards && activeMetric !== null && activeMetric >= index
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            <div className="relative bg-gray-800 rounded-lg p-5 shadow-xl border border-gray-700 hover:border-gray-500 transition-colors duration-300">
              <div className="absolute -bottom-4 left-6 w-6 h-6 bg-gray-800 border-b border-l border-gray-700 transform rotate-45 origin-center" />
              <div className="relative z-10">
                <div className="text-sm font-medium text-gray-300">{metric.title}</div>
                <div className="mt-1 text-3xl font-bold text-white">{metric.value}</div>
                <div className="mt-1 text-sm text-gray-400">{metric.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsComponent;
