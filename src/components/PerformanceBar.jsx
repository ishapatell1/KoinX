import React from "react";

export const PerformanceBar = ({ low, high, current, low52w, high52w }) => {
  // Calculate percentage for the progress bar
  const percentage = ((current - low) / (high - low)) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div>
      <h2 className="text-xl font-bold mb-4">Performance</h2>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Today's Low<br />{low}</span>
        <span>Today's High<br />{high}</span>
      </div>

      <div className="relative h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-2">
        <div
          className="absolute top-0 -mt-1 w-0.5 h-5 bg-black"
          style={{ left: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>52W Low<br />{low52w}</span>
        <span>52W High<br />{high52w}</span>
        <div>
            <h2>Fundamentals</h2>
        </div>
      </div>
    </div>
  );
};