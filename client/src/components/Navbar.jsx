import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import telegram from "../assets/tele.png";

import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Navbar = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    window.setTimeout(() => {
      if (timer == 0) setTimer(60);
      else setTimer(timer - 1);
    }, 1000);
    return () => {};
  }, [timer]);
  return (
    <div className="flex justify-center gap-x-36 items-center    ">
      <div>
        <img src={logo} alt="" className="h-12" />
      </div>
      <div className="w-0"></div>
      <div className="flex gap-4">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 h-10  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          INR{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 h-10 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          BTC
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <button className="text-white px-2 h-10 bg-gray-700 rounded-md">
          BUY BTC
        </button>
      </div>
      <div className="flex gap-3 text-center items-center justify-center">
        <div className="mt-4">
          <div style={{ width: "6vh" }}>
            <CircularProgressbar
              value={timer}
              maxValue={60}
            ></CircularProgressbar>
          </div>
          <div
            className="text-info"
            style={{
              position: "relative",
              top: "-32px",

              fontSize: "18px",
              fontWeight: "100%",
            }}
          >
            <b>{timer}</b>
          </div>
        </div>
        <div>
          <button className="flex justify-center items-center gap-3 bg-[#3dc6c1] text-white p-2 rounded-lg">
            <img className="h-5" src={telegram} alt="" />
            CONNECT TELEGRAM
          </button>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200   rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyan-400  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-700"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
