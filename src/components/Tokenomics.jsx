import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  // Chart Data
  const data = {
    labels: ["Crowdsale investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#2563EB", "#F59E0B"], // Blue & Orange
        hoverBackgroundColor: ["#1E40AF", "#D97706"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Tokenomics</h2>

      {/* Chart and Legend */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-40 h-40">
          <Doughnut data={data} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 inline-block mr-2"></span>
              Crowdsale investors: <strong>80%</strong>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 inline-block mr-2"></span>
              Foundation: <strong>20%</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat...
      </p>

      {/* Avatar Group */}
      <div className="flex items-center space-x-[-8px] mt-4">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full border-2 border-white">
          A
        </div>
        <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full border-2 border-white">
          Z
        </div>
        <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full border-2 border-white">
          H
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;