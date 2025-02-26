// import React from 'react'

// export const RecommendationCharts = () => {
//   return (
//     <div>RecommendationCharts</div>
//   )
// }

import React from "react";
import { CoinCard } from "./CoinCard";

export const RecommendationCharts = () => {
  const staticCoins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      image: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      price: "50000.00",
      change: "2.34",
      sparkline: "https://example.com/sparkline-bitcoin.png",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      image: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      price: "4000.00",
      change: "-1.23",
      sparkline: "https://example.com/sparkline-ethereum.png",
    },
    // Add more static coin data as needed
  ];

  return (
    <div className="p-6">
      {/* You May Also Like */}
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="flex overflow-x-auto gap-4">
        {staticCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

      {/* Trending Coins */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Trending Coins</h2>
      <div className="flex overflow-x-auto gap-4">
        {staticCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};


