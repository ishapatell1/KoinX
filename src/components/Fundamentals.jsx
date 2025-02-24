import React from "react";
import { FaInfoCircle } from "react-icons/fa";

export const Fundamentals = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">Fundamentals</h2>
        <FaInfoCircle className="ml-2 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        {/* Left Column */}
        <div>
          <p>Bitcoin Price: <span className="font-semibold">${data.bitcoinPrice}</span></p>
          <p>24h Low / 24h High: <span className="font-semibold">${data.low24h} / ${data.high24h}</span></p>
          <p>7d Low / 7d High: <span className="font-semibold">${data.low7d} / ${data.high7d}</span></p>
          <p>Trading Volume: <span className="font-semibold">${data.tradingVolume}</span></p>
          <p>Market Cap Rank: <span className="font-semibold">#{data.marketCapRank}</span></p>
        </div>

        {/* Right Column */}
        <div>
          <p>Market Cap: <span className="font-semibold">${data.marketCap}</span></p>
          <p>Market Cap Dominance: <span className="font-semibold">{data.dominance}%</span></p>
          <p>Volume / Market Cap: <span className="font-semibold">{data.volumeToMarketCap}</span></p>

          <p>
            All-Time High: 
            <span className="font-semibold ml-1">${data.ath}</span>
            <span className="ml-2 text-red-500">{data.athChange}%</span>
            <br /><span className="text-xs text-gray-500">{data.athDate}</span>
          </p>

          <p>
            All-Time Low: 
            <span className="font-semibold ml-1">${data.atl}</span>
            <span className="ml-2 text-green-500">{data.atlChange}%</span>
            <br /><span className="text-xs text-gray-500">{data.atlDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};