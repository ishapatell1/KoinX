import React, { useEffect, useState } from "react";
import TradingViewWidget from "../components/Widget";

export const BitcoinPriceChart = () => {
  const [priceData, setPriceData] = useState(null);

  // Fetch Bitcoin Price (USD, INR & 24H Change)
  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
      );
      const data = await response.json();
      setPriceData(data.bitcoin);
    } catch (error) {
      console.error("Error fetching Bitcoin price:", error);
    }
  };

  useEffect(() => {
    fetchBitcoinPrice();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[920px]">
      {/* Container for heading and chart */}
      <div className="flex flex-col gap-[2rem]">
        {/* Heading Section */}
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <img src="/bitcoin-icon.svg" className="h-[2rem] w-[2rem]" alt="Bitcoin Icon" />
          <h1 className="text-[#0B1426] font-[600] text-[1.5rem]">Bitcoin</h1>
          <p className="text-[#5D667B] font-[600] text-[1rem]">BTC</p>
          <div className="bg-[#808A9D] text-white rounded-lg px-2 py-1 ml-[1rem] text-[0.8rem]">Rank #1</div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col gap-[0.5rem]">
          <div className="flex flex-row gap-[2rem] items-center">
            <p className="text-[#0B1426] text-[2rem] font-[600]">
              ${priceData ? priceData.usd.toLocaleString() : "Loading..."}
            </p>
            <div
              className={`flex flex-row gap-2 p-[0.5rem] w-[5rem] h-[2rem] text-center justify-center rounded-sm ${
                priceData?.usd_24h_change >= 0 ? "bg-[#EBF9F4] text-green-600" : "bg-[#F9EBEB] text-red-600"
              }`}
            >
              <img src={priceData?.usd_24h_change >= 0 ? "/uparrow.svg" : "/uparrow.svg"} alt="Change Arrow" />
              <p>(24H)</p>
            </div>
          </div>
          <p className="text-[#0B1426] font-[500] text-[1rem]">
            ₹ {priceData ? priceData.inr.toLocaleString() : "Loading..."}
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64 mt-4">
        <TradingViewWidget />
      </div>
    </div>
  );
};