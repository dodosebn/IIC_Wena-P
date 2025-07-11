import React from "react";
import BtnBg from "../utils/btnBg";
import { FaCircleNotch } from "react-icons/fa6";
import Link from "next/link";

const Loading = () => {
  return (
    <>
    {/* <BtnBg btnpath='/components/AltMetrics' btnName="View Africa's Metrics" /> */}
    <Link href='/components/AltMetrics'>< FaCircleNotch size={34}/></Link>
    </>
  );
};

export default Loading;