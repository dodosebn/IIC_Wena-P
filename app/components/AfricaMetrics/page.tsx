"use client";
import React from "react";
import AfricaMetrics from "./africaMetrics";
import Link from "next/link";
import TransitionLink from "@/app/utils/transitionLink";

const Page = () => {
  const videoUrl = "/assets/videos/section-bg-video.mp4";

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Top Content (Links and Africa Metrics) */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation Links */}
        {/* <div className="absolute bg-black/60 rounded-md flex top-6 left-6 z-20 gap-1">
          <button className=" text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 shadow-lg"
>
          <TransitionLink  href="/"> Home          </TransitionLink>

            </button>
<button className=" text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 shadow-lg">

                   <TransitionLink  href="/Features"> Features   </TransitionLink>

           </button>
        </div> */}

        {/* Africa Metrics Section */}
        <AfricaMetrics />
      </div>
    </div>
  );
};

export default Page;
