import { Chart } from "../components/Chart"
import { GetStartedCard } from "../components/GetStartedCard"
import { Navbar } from "../components/NavBar"
import { TrendingCoins } from "../components/TrendingCoins"
import { PerformanceBar } from "../components/PerformanceBar"

export const Bitcoin = ()=>{
    const performanceData = {
        low: 46930.22,
        high: 49343.83,
        current: 48637.83,
        low52w: 16930.22,
        high52w: 49743.83,
      };
    
    
    return(
        <div className="min-h-screen flex flex-wrap items-center justify-center bg-[#DEDFE2]">
            <Navbar/>
            <PerformanceBar {...performanceData} />
            <div className="min-h-screen bg-[#DEDFE2] items-center p-6 space-y-6">
              <GetStartedCard/>
              <TrendingCoins/>
            </div>
        </div>
    )
}