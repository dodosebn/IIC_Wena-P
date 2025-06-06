'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import VerticalLines from './verticalLine';
import { XMarkIcon } from '@heroicons/react/24/outline';
import BtnBg from '@/app/utils/btnBg';
type Metric = {
  id: number;
  title: string;
  value: string;
  description: string;
};

const MetricsComponent = () => {
  const router = useRouter();
  const [showCards, setShowCards] = useState(false);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [linesAnimationComplete, setLinesAnimationComplete] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    }, 300);

    return () => clearTimeout(timer);
  }, [linesAnimationComplete]);

  useEffect(() => {
    if (activeMetric === null || isClosing) return;

    const timer = setTimeout(() => {
      if (activeMetric < metrics.length - 1) {
        setActiveMetric(prev => (prev !== null ? prev + 1 : 0));
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [activeMetric, metrics.length, isClosing]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      router.push('/'); 
    }, 500);
  };

  return (
    <div className={`
      fixed inset-0 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm
      transition-all duration-500 ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
    `}>
      <div className={`
        relative w-full max-w-6xl mx-auto rounded-lg sm:rounded-2xl overflow-y-auto
        bg-gradient-to-br from-gray-900 to-black border border-gray-800
        shadow-2xl transition-all duration-300 max-h-[90vh]
        ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
      `}>
        {/* Close button - larger tap target on mobile */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 sm:p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/80
          text-gray-300 hover:text-white transition-all duration-200 shadow-sm border border-gray-700/50
          active:scale-95" // Add press effect on mobile
          aria-label="Close metrics"
        >
          <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="relative min-h-[300px] sm:min-h-[400px] p-3 sm:p-6 md:p-8">
          <VerticalLines onAnimationEnd={() => setLinesAnimationComplete(true)} />
            <BtnBg btnpath='/components/AfricaMetrics' btnName="Previous Metrics" />

          {/* Metrics - adjusted for mobile */}
          <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-16">
            {metrics.map((metric, index) => (
              <div
                key={metric.id}
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                  showCards && activeMetric !== null && activeMetric >= index && !isClosing
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                <div className="relative bg-gray-800/80 rounded-lg p-3 sm:p-4 md:p-5 shadow-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] active:scale-100">
                  <div className="absolute -bottom-3 left-4 sm:-bottom-4 sm:left-6 w-5 h-5 sm:w-6 sm:h-6 bg-gray-800/80 border-b border-l border-gray-700 transform rotate-45 origin-center transition-all duration-300 group-hover:border-gray-500" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-sm font-medium text-gray-300">{metric.title}</div>
                    <div className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-400 line-clamp-2">{metric.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;