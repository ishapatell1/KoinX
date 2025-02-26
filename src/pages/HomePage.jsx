import React, { useState } from "react";
import { GetStartedCard } from "../components/GetStartedCard";
import { BitcoinPriceChart } from "../components/BitcoinPriceChart";
import { Team } from "../components/Team";
import { AboutBitcoin } from "../components/AboutBitcoin";
import { Sentiment } from "../components/Sentiment";
import Tokenomics from "../components/Tokenomics";
import { PerformanceBar } from "../components/PerformanceBar";
import { RecommendationCharts } from "../components/RecommendationCharts";

const TABS = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-wrap justify-center gap-[1.2rem] p-4">
      {/* Left Section (Chart & Tabs) */}
      <div className="w-full md:w-[60%]">
        <BitcoinPriceChart />
        <div className="flex flex-col">
        
          <div className="flex flex-row border-b mt-4 space-x-6 text-gray-600">
          {TABS.map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer pb-2 ${activeTab === tab ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "hover:text-gray-800"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))} 
         </div> 
         <PerformanceBar/>
          <Sentiment/>
          <AboutBitcoin/>
          <Tokenomics/>
          <Team/>
          <RecommendationCharts/>
          
        </div>
      </div>
      {/* Right Section (Get Started Card) */}
      <div className="w-full md:w-[35%]">
        <GetStartedCard />
      </div>
    </div>
  );
};

export default HomePage;