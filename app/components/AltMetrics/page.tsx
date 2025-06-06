'use client';

import BtnBg from "@/app/utils/btnBg";
import MetricsComponent from "./metricsComp";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <BtnBg btnpath='/components/AfricaMetrics' btnName="Previous Metrics" />

      <MetricsComponent />
    </main>
  );
}