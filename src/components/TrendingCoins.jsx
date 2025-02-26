import React, { createContext, useContext } from "react";
// import { FaArrowUp } from "react-icons/fa";

export const TrendingCoins = () => {
    const trendingCoins = [
        { name: "Ethereum", symbol: "ETH", icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.93352 0.456543L4.83234 0.800248L4.83234 10.7729L4.93352 10.8739L9.56263 8.13755L4.93352 0.456543Z" fill="#C1CCF7"/>
            <path d="M4.93964 0.456543L0.310425 8.13755L4.93964 10.8739L4.93964 6.0334L4.93964 0.456543Z" fill="white"/>
            <path d="M4.93357 11.7505L4.87654 11.8201V15.3725L4.93357 15.5389L9.56551 9.01562L4.93357 11.7505Z" fill="#C1CCF7"/>
            <path d="M4.93964 15.5389L4.93964 11.7505L0.310425 9.01562L4.93964 15.5389Z" fill="white"/>
            <path d="M4.93513 10.8741L9.56424 8.13784L4.93513 6.03369L4.93513 10.8741Z" fill="#8198EE"/>
            <path d="M0.310425 8.13784L4.93964 10.8741L4.93964 6.03369L0.310425 8.13784Z" fill="#C1CCF7"/>
            </svg>,
             change: "+8.21%" },
        { name: "Bitcoin", symbol: "BTC", icon: "🟠", change: "+5.26%" },
        { name: "Polygon", symbol: "MATIC", icon: "🟤", change: "+4.32%" },
      ];
  return (
    <div className="w-full max-w-[27rem] bg-white p-4 rounded-lg shadow-md">
    {/* Heading */}
    <h2 className="text-[#0F1629] text-[1.5rem] font-semibold leading-[28.8px]">
      Trending Coins (24h)
    </h2>

    {/* Coin List */}
    <ul className="mt-4 space-y-4">
      {trendingCoins.map((coin) => (
        <li key={coin.symbol} className="flex justify-between items-center w-[24rem]">
          <div className="flex items-center gap-2">
            <span className="text-l-500">{coin.icon}</span>
            <span className="text-[#0F1629]
 font-medium">
              {coin.name} ({coin.symbol})
            </span>
          </div>

          <span className="bg-green-100 text-[#14B079]-600 text-sm px-2 py-1 rounded-md font-semibold">
            {coin.change}
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
};

