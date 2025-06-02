"use client";
import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import metrics from "./africaMaps";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TransitionLink from "@/app/utils/transitionLink";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnima from "../introAnima";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const colors = [
  "#3A86FF", "#8338EC", "#FF006E", "#FB5607", "#FFBE0B",
  "#1B9AAA", "#EF476F", "#06D6A0", "#118AB2", "#073B4C",
  "#7209B7", "#4361EE", "#4CC9F0", "#F72585", "#B5179E",
  "#4895EF", "#4CC9F0", "#560BAD"
];

const AfricaMetrics = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "trends">("overview");
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const barChartData = {
    labels: metrics.map((m) => m.title),
    datasets: [
      {
        label: "Current Values",
        data: metrics.map((m) => parseFloat(m.value.replace(/[^\d.-]/g, ""))),
        backgroundColor: metrics.map((_, i) => colors[i % colors.length]),
        borderColor: metrics.map((_, i) => colors[(i + 9) % colors.length]),
        borderWidth: 1,
      },
    ],
  };

  const trendData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: metrics.map((metric, i) => ({
      label: metric.title,
      data: generateTrendData(metric.title),
      borderColor: colors[i % colors.length],
      backgroundColor: `${colors[i % colors.length]}40`,
      tension: 0.3,
      fill: false,
    })),
  };

  function generateTrendData(metricTitle: string): number[] {
    const baseValues: Record<string, number> = {
      "Population": 1200,
      "GDP Growth": 3.2,
      "Urbanization": 38,
      "Mobile Users": 72,
      "Youth Unemploy.": 14.5,
      "Renewables": 18,
    };
    
    const base = baseValues[metricTitle] || 50;
    return [0, 1, 2, 3, 4, 5].map((i) => {
      const fluctuation = Math.random() * 2 - 1;
      return base + i * (metricTitle === "Youth Unemploy." ? -0.5 : 1) + fluctuation;
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <AnimatePresence>
        {showIntro ? (
<IntroAnima />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:pt-6"
          >
            <div className="max-w-7xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
              {/* Header */}
              <div className="relative p-6 flex justify-between items-center bg-gradient-to-r
               from-blue-400/50 to-blue-400/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                <div className="relative z-10 flex gap-6">
                  <motion.h1 
                    className="text-2xl md:text-3xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Africa Metrics 
                  </motion.h1>
<TransitionLink href="/components/AfricaMetrics/Metrics2" >Africa Metrics 2 </TransitionLink>
 <TransitionLink href="/components/AfricaMetrics/Metrics3" >Africa Metrics 3  </TransitionLink>
  <TransitionLink href="/components/AfricaMetrics/Metrics4" >Africa Metrics 4  </TransitionLink>
  <TransitionLink href="/components/AfricaMetrics/Metrics5" >Africa Metrics 5 </TransitionLink>



                </div>
                <div className="relative z-10">
                <TransitionLink href="/" >
                  <ImCancelCircle className="text-gray-300 hover:text-white text-2xl cursor-pointer transition-colors" />
                </TransitionLink>
                </div>
              </div>

              {/* Navigation Tabs */}
              <motion.div 
                className="border-b border-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <nav className="flex md:justify-around -mb-px">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-4 px-6 text-center text-[1rem] border-b-2 font-medium text-sm ${
                      activeTab === "overview"
                        ? "border-blue-400 text-blue-400"
                        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Overview
                    </motion.span>
                  </button>
                  <button
                    onClick={() => setActiveTab("trends")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "trends"
                        ? "border-blue-400 text-blue-400"
                        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View in Chart
                    </motion.span>
                  </button>
                </nav>
              </motion.div>

              {/* Dashboard Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-xl font-semibold mb-4 text-gray-200">Key Metrics at a Glance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {metrics.map((metric, index) => (
                        <motion.div
                          key={metric.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className={`p-5 metric-card rounded-xl bg-gray-700/50 
                             hover:bg-gray-700/70 transition-all cursor-pointer border border-gray-600/30 ${
                            selectedMetric === metric.title ? "ring-2 ring-blue-400/50" : ""
                          }`}
                          onClick={() => setSelectedMetric(metric.title === selectedMetric ? null : metric.title)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-medium text-white">{metric.title}</h3>
                              <p className="text-gray-400 text-[1rem] mt-1">{metric.description}</p>
                            </div>
                            <span className="text-2xl text-white">{metric.icon}</span>
                          </div>
                          <div className="mt-4 flex items-baseline justify-between">
                            <p className="text-3xl font-bold text-white">{metric.value}</p>
                            <div
                              className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                                metric.trend === "up"
                                  ? "bg-green-900/50 text-green-300"
                                  : "bg-red-900/50 text-red-300"
                              }`}
                            >
                              {metric.change} {metric.trend === "up" ? "↑" : "↓"}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "trends" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div 
                      className="p-5 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 mb-6"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <div className="h-96">
                        <Line
                          data={trendData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: {
                              mode: "index",
                              intersect: false,
                            },
                            plugins: {
                              legend: {
                                labels: {
                                  color: "#E5E7EB"
                                }
                              },
                              tooltip: {
                                mode: "index",
                                intersect: false,
                              },
                            },
                            scales: {
                              y: {
                                beginAtZero: false,
                                grid: {
                                  color: "#4B5563"
                                },
                                ticks: {
                                  color: "#9CA3AF"
                                }
                              },
                              x: {
                                grid: {
                                  color: "#4B5563"
                                },
                                ticks: {
                                  color: "#9CA3AF"
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {metrics.map((metric, i) => (
                        <motion.div
                          key={metric.title}
                          className="p-5 rounded-xl text-[1rem] bg-gray-700/50 backdrop-blur-sm border border-gray-600/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <h3 className="font-medium text-white mb-3 text-[1rem] ">{metric.title} Trend</h3>
                          <div className="h-48">
                            <Line
                              data={{
                                labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
                                datasets: [
                                  {
                                    label: metric.title,
                                    data: generateTrendData(metric.title),
                                    borderColor: colors[i % colors.length],
                                    backgroundColor: `${colors[i % colors.length]}20`,
                                    tension: 0.3,
                                    fill: true,
                                  },
                                ],
                              }}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                  legend: {
                                    display: false,
                                  },
                                },
                                scales: {
                                  y: {
                                    grid: {
                                      color: "#4B5563"
                                    },
                                    ticks: {
                                      color: "#9CA3AF"
                                    }
                                  },
                                  x: {
                                    grid: {
                                      color: "#4B5563"
                                    },
                                    ticks: {
                                      color: "#9CA3AF"
                                    }
                                  }
                                }
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <motion.div 
                className="px-6 py-4 border-t border-gray-700 text-sm text-gray-400 bg-gray-800/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>Data updated: {new Date().toLocaleDateString()}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AfricaMetrics;