
import React from "react";

export const Sentiment = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Sentiment</h2>

      {/* Key Events */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700 flex items-center">
          Key Events <span className="ml-1 text-gray-500 text-xs">ℹ️</span>
        </h3>
        <div className="mt-2 flex gap-4">
          {/* Event Card 1 */}
          <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs font-bold">
                A
              </div>
              <p className="text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus et
              faucibus metus quis.
            </p>
          </div>

          {/* Event Card 2 */}
          <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-xs font-bold">
                H
              </div>
              <p className="text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus et
              faucibus metus quis.
            </p>
          </div>
        </div>
      </div>

      {/* Analyst Estimates */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700 flex items-center">
          Analyst Estimates <span className="ml-1 text-gray-500 text-xs">ℹ️</span>
        </h3>

        {/* Percentage Circle */}
        <div className="flex items-center mt-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
            76%
          </div>

          {/* Bars */}
          <div className="flex-1 ml-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-700">
              <span>Buy</span>
              <span>76%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "76%" }}></div>
            </div>

            <div className="flex justify-between text-xs text-gray-700">
              <span>Hold</span>
              <span>8%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-500 h-2 rounded-full" style={{ width: "8%" }}></div>
            </div>

            <div className="flex justify-between text-xs text-gray-700">
              <span>Sell</span>
              <span>16%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "16%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

