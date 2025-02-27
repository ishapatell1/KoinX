import React, { useEffect, useState } from "react";
import { CoinCard } from "./CoinCard";

export const RecommendationCharts = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  // Fetch trending coins
  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
      const data = await response.json();

      // Extract and format required details
      const formattedCoins = data.coins.slice(0, 5).map((coin) => ({
        id: coin.item.id,
        name: coin.item.name,
        symbol: coin.item.symbol.toUpperCase(),
        image: coin.item.thumb,
        price: coin.item.data?.price || "N/A",
        change: coin.item.data?.price_change_percentage_24h?.toFixed(2) || "0.00",
        sparkline: coin.item.data?.sparkline || "",
      }));

      setTrendingCoins(formattedCoins);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="p-6">
      {/* You May Also Like */}
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {trendingCoins.length > 0 ? (
          trendingCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>

      {/* Trending Coins */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Trending Coins</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {trendingCoins.length > 0 ? (
          trendingCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};