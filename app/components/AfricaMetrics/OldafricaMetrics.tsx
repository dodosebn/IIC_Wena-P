"use client";
import React, { useState } from "react";
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

const AfricaMetrics = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "trends" | "comparison">("overview");
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  // Chart data configurations
  const barChartData = {
    labels: metrics.map((m) => m.title),
    datasets: [
      {
        label: "Current Values",
        data: metrics.map((m) => parseFloat(m.value.replace(/[^\d.-]/g, ""))),
        backgroundColor: metrics.map((m) => {
          switch (m.title) {
            case "Population": return "rgba(99, 102, 241, 0.8)";
            case "GDP Growth": return "rgba(16, 185, 129, 0.8)";
            case "Urbanization": return "rgba(245, 158, 11, 0.8)";
            case "Mobile Users": return "rgba(59, 130, 246, 0.8)";
            case "Youth Unemploy.": return "rgba(244, 63, 94, 0.8)";
            case "Renewables": return "rgba(22, 163, 74, 0.8)";
            default: return "rgba(156, 163, 175, 0.8)";
          }
        }),
        borderColor: metrics.map((m) => {
          switch (m.title) {
            case "Population": return "rgba(99, 102, 241, 1)";
            case "GDP Growth": return "rgba(16, 185, 129, 1)";
            case "Urbanization": return "rgba(245, 158, 11, 1)";
            case "Mobile Users": return "rgba(59, 130, 246, 1)";
            case "Youth Unemploy.": return "rgba(244, 63, 94, 1)";
            case "Renewables": return "rgba(22, 163, 74, 1)";
            default: return "rgba(156, 163, 175, 1)";
          }
        }),
        borderWidth: 1,
      },
    ],
  };

  const trendData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: metrics.map((metric) => ({
      label: metric.title,
      data: generateTrendData(metric.title),
      borderColor: metric.color.replace("bg-", "").replace("-500", "-400"),
      backgroundColor: metric.color.replace("bg-", "").replace("-500", "-200"),
      tension: 0.3,
      fill: false,
    })),
  };

  const pieData = {
    labels: ["North", "West", "East", "South", "Central"],
    datasets: [
      {
        data: [25, 30, 20, 15, 10],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(244, 63, 94, 0.7)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(244, 63, 94, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  function generateTrendData(metricTitle: string): number[] {
    // This would ideally come from real historical data
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
    <div className="min-h-screen p-4 md:pt-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Africa Metrics 1
            </h1>
          
          </div>
          <TransitionLink href="/">
            <ImCancelCircle className="text-gray-300 hover:text-white text-2xl cursor-pointer" />
          </TransitionLink>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("trends")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "trends"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Trends
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "comparison"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Regional Comparison
            </button>
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Metrics at a Glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className={`border-l-4 ${metric.color} p-4 bg-gray-50 rounded-r-lg hover:shadow-md transition-shadow cursor-pointer ${
                      selectedMetric === metric.title ? "ring-2 ring-blue-200" : ""
                    }`}
                    onClick={() => setSelectedMetric(metric.title === selectedMetric ? null : metric.title)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{metric.title}</h3>
                        <p className="text-black/75 text-sm">{metric.description}</p>
                      </div>
                      <span className="text-2xl">{metric.icon}</span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                      <div
                        className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                          metric.trend === "up"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {metric.change} {metric.trend === "up" ? "↑" : "↓"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-medium mb-4">Metrics Comparison</h3>
                <div className="h-80">
                  <Bar
                    data={barChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              const metric = metrics[context.dataIndex];
                              return `${metric.title}: ${metric.value} (${metric.change} ${metric.trend === "up" ? "↑" : "↓"})`;
                            },
                          },
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "trends" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Historical Trends</h2>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
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
                        tooltip: {
                          mode: "index",
                          intersect: false,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="bg-white p-4 rounded-lg shadow border border-gray-200"
                  >
                    <h3 className="font-medium mb-2">{metric.title} Trend</h3>
                    <div className="h-48">
                      <Line
                        data={{
                          labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
                          datasets: [
                            {
                              label: metric.title,
                              data: generateTrendData(metric.title),
                              borderColor: metric.color.replace("bg-", "").replace("-500", "-600"),
                              backgroundColor: metric.color.replace("bg-", "").replace("-500", "-100"),
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
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "comparison" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Regional Distribution</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200 lg:col-span-2">
                  <h3 className="font-medium mb-4">Regional Breakdown</h3>
                  <div className="h-80">
                    <Pie
                      data={pieData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "right",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-medium mb-4">Key Regional Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { region: "North Africa", gdp: "3.9%", population: "250M", urbanization: "52%" },
                      { region: "West Africa", gdp: "3.5%", population: "400M", urbanization: "45%" },
                      { region: "East Africa", gdp: "4.2%", population: "450M", urbanization: "38%" },
                      { region: "Southern Africa", gdp: "2.8%", population: "180M", urbanization: "50%" },
                      { region: "Central Africa", gdp: "3.1%", population: "150M", urbanization: "40%" },
                    ].map((item) => (
                      <div key={item.region} className="border-b border-gray-100 pb-3 last:border-0">
                        <h4 className="font-medium text-gray-900">{item.region}</h4>
                        <div className="grid grid-cols-3 gap-2 text-sm mt-1">
                          <div>
                            <span className="text-gray-500">GDP:</span>{" "}
                            <span className="font-medium">{item.gdp}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Pop:</span>{" "}
                            <span className="font-medium">{item.population}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Urban:</span>{" "}
                            <span className="font-medium">{item.urbanization}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
          <p>Data updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AfricaMetrics;