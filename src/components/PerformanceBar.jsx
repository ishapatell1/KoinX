import React from "react";

export const PerformanceBar = () => {
  return (
    <div className="w-[56rem] bg-white rounded-lg p-6 shadow-lg">
      {/* Performance Section */}
      <h3 className="font-semibold text-[#0F1629] text-[1.5rem] mb-4">Performance</h3>

      {/* Performance Bar */}
      <div className="flex flex-col gap-4 border p-4 rounded-lg">
        {/* Today's Low - High */}
        <div className="flex justify-between text-sm text-[#5D667B]">
          <p>Today's Low</p>
          <p>Today's High</p>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div className="absolute left-[20%] right-[10%] h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          <div className="absolute left-[50%] -top-2 text-xs font-semibold text-[#0F1629]">$48,637.83</div>
        </div>
        <div className="flex justify-between text-sm text-[#0F1629]">
          <p>46,930.22</p>
          <p>49,343.83</p>
        </div>

        {/* 52W Low - High */}
        <div className="flex justify-between text-sm text-[#5D667B] mt-4">
          <p>52W Low</p>
          <p>52W High</p>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div className="absolute left-[10%] right-[5%] h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
        </div>
        <div className="flex justify-between text-sm text-[#0F1629]">
          <p>16,930.22</p>
          <p>49,743.83</p>
        </div>
      </div>

      {/* Fundamentals Section */}
      <h3 className="font-semibold text-[#0F1629] text-[1.5rem] mt-6">Fundamentals</h3>

      <div className="grid grid-cols-2 gap-4 text-sm text-[#0F1629] mt-4">
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Bitcoin Price</p>
          <p>$16,815.46</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Market Cap</p>
          <p>$323,507,290,047</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">24h Low / 24h High</p>
          <p>$16,382.07 / $16,874.12</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Market Cap Dominance</p>
          <p>38.343%</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">7d Low / 7d High</p>
          <p>$16,382.07 / $16,874.12</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Volume / Market Cap</p>
          <p>0.0718</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Trading Volume</p>
          <p>$23,249,202,782</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">Market Cap Rank</p>
          <p>#1</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">All-Time High</p>
          <p className="text-red-500">$69,044.77 -75.6%</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p className="text-[#5D667B]">All-Time Low</p>
          <p className="text-green-500">$67.81 24729.1%</p>
        </div>
      </div>
    </div>
  );
};