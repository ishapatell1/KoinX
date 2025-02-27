import React, { useEffect, useState } from "react";

export const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  // Fetch trending coins (Top 3)
  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
      const data = await response.json();

      // Extracting the top 3 trending coins with proper image handling
      const topTrending = data.coins.slice(0, 3).map((coin) => ({
        name: coin.item.name,
        symbol: coin.item.symbol.toUpperCase(),
        icon: coin.item.thumb, // CoinGecko provides a 'thumb' image URL
        change: "5%", 
      }));

      setTrendingCoins(topTrending);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="w-full max-w-[27rem] bg-white p-4 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-[#0F1629] text-[1.5rem] font-semibold leading-[28.8px]">
        Trending Coins (24h)
      </h2>

      {/* Coin List */}
      <ul className="mt-4 space-y-4">
        {trendingCoins.length > 0 ? (
          trendingCoins.map((coin) => (
            <li key={coin.symbol} className="flex justify-between items-center w-[24rem]">
              <div className="flex items-center gap-2">
                {/* Display the actual coin image */}
                <img src={coin.icon} alt={coin.name} className="h-6 w-6 rounded-full" />
                <span className="text-[#0F1629] font-medium">
                  {coin.name} ({coin.symbol})
                </span>
              </div>
              <span className="bg-green-100 text-[#14B079] text-sm px-2 py-1 rounded-md font-semibold">
                {coin.change}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm mt-2">Loading trending coins...</p>
        )}
      </ul>
    </div>
  );
};