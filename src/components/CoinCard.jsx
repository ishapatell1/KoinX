import React from "react";

export const CoinCard = ({ coin }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[12rem]">
      <div className="flex items-center gap-2">
        <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
        <div>
          <p className="font-bold">{coin.name}</p>
          <p className="text-gray-500 text-sm">{coin.symbol}</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-semibold">${coin.price}</p>
        <p className={`text-sm ${coin.change >= 0 ? "text-green-500" : "text-red-500"}`}>
          {coin.change}%
        </p>
      </div>

      {coin.sparkline && (
        <img src={coin.sparkline} alt="Price Trend" className="mt-2 h-12 w-full" />
      )}
    </div>
  );
};