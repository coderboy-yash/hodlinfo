import React from "react";
import "./table.css";
const Table = () => {
  return (
    <div className="">
      <div className="relative overflow-x-auto border-b-gray-500   border-b-[1px] ">
        <table className="w-11/12 text-sm h-60 text-left text-gray-500 dark:text-gray-400  ">
          <thead className=" text-gray-500 capitalize font-semibold text-2xl dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 ">
                #
              </th>
              <th scope="col" className="px-6">
                Platform
              </th>
              <th scope="col" className="px-6">
                Last Traded Price
              </th>
              <th scope="col" className="px-6">
                Buy / Sell Price
              </th>
              <th scope="col" className="px-6">
                Difference
              </th>
              <th scope="col" className="px-6 py-3">
                Savings
              </th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            <tr className="bg-[#2e3241]   text-white   border-[20px] border-[#191D28]   ">
              <td className="px-6 py-3">1</td>
              <td className="px-6">WazirX</td>
              <td className="px-6">₹ 23,68,000</td>
              <td className="px-6">₹ 23,56,001 / ₹ 23,68,000</td>
              <td className="px-6">-3.66 %</td>
              <td className="px-6">▼ ₹ 90,053</td>
            </tr>

            <tr className="bg-[#2e3241]   text-white    border-[20px] border-[#191D28]   ">
              <td className="px-6 py-3">2</td>
              <td className="px-6 ">Bitbns</td>
              <td className="px-6 ">₹ 28,33,260</td>
              <td className="px-6 ">₹ 27,83,564 / ₹ 28,32,111</td>
              <td className="px-6 ">15.26 %</td>
              <td className="px-6 ">▲ ₹ 3,75,207</td>
            </tr>
            <tr className="bg-[#2e3241]   text-white    border-[20px]    border-[#191D28]   ">
              <td className="px-6  py-3">3</td>
              <td className="px-6 ">Colodax</td>
              <td className="px-6 ">₹ 22,68,507</td>
              <td className="px-6 ">₹ 22,57,163 / ₹ 25,40,728</td>
              <td className="px-6 ">-7.71 %</td>
              <td className="px-6 ">▼ ₹ 1,89,546</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
