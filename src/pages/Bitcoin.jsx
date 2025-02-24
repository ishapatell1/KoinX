import { Chart } from "../components/Chart"
import { GetStartedCard } from "../components/GetStartedCard"
import { Navbar } from "../components/NavBar"
import { TrendingCoins } from "../components/TrendingCoins"
import { PerformanceBar } from "../components/PerformanceBar"
import { Fundamentals } from "../components/Fundamentals"
export const Bitcoin = ()=>{
    const performanceData = {
        low: 46930.22,
        high: 49343.83,
        current: 48637.83,
        low52w: 16930.22,
        high52w: 49743.83,
      };
    
      const fundamentalsData = {
        bitcoinPrice: 16815.46,
        low24h: 16382.07,
        high24h: 16874.12,
        low7d: 16382.07,
        high7d: 16874.12,
        tradingVolume: 23249202872,
        marketCap: 323507290047,
        dominance: 38.343,
        volumeToMarketCap: 0.0718,
        marketCapRank: 1,
        ath: 69044.77,
        athChange: -75.6,
        athDate: "Nov 10, 2021 (about 1 year)",
        atl: 67.81,
        atlChange: 24729.1,
        atlDate: "Jul 06, 2013 (over 9 years)",
      };
    return(
        <div>
            {/* <Navbar/> */}
            <GetStartedCard/>
            {/* <TrendingCoins/> */}
            <div className="min-h-screen bg-[#DEDFE2] flex flex-col items-center p-6 space-y-6">
      <PerformanceBar {...performanceData} />
      <Fundamentals data={fundamentalsData} />
        </div>
        </div>
    )
}