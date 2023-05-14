import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#191D28] h-screen font-Oswald">
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        <h1 className="text-gray-500 text-3xl   ">Best Price To Trade</h1>
      </div>
      <div className="flex justify-center gap-28 mt-4">
        <div className="flex flex-col items-center">
          <span className="text-[#5dc7c2] text-[40px] ">0.11%</span>
          <span className="text-[20px] text-gray-500 ">5 Mins</span>
        </div>
        <div className="flex flex-col items-cente">
          <span className="text-[#5dc7c2] text-[40px] ">0.72% </span>
          <span className="text-[20px] text-gray-500 ">1 Hour </span>
        </div>
        <div className="flex flex-col  items-center">
          <span className="text-7xl text-white">₹ 24,57,256</span>
          <span className="text-sm text-gray-500 ">
            Average BTC/INR net price including commission{" "}
          </span>
        </div>
        <div className="flex flex-col items-cente">
          <span className="text-[#5dc7c2] text-[40px] ">8.49 %</span>
          <span className="text-[20px] text-gray-500 ">1 Day</span>
        </div>
        <div className="flex flex-col items-cente">
          <span className="text-[#5dc7c2] text-[40px] ">17.71 %</span>
          <span className="text-[20px] text-gray-500 ">7 Days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
