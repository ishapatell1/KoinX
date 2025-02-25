
import { GetStartedCard } from "../components/GetStartedCard"
import HomePage from "./HomePage"
import { Navbar } from "../components/NavBar"
import { TrendingCoins } from "../components/TrendingCoins"
import { PerformanceBar } from "../components/PerformanceBar"
import { Sentiment } from "../components/Sentiment"

export const Bitcoin = ()=>{
    const performanceData = {
        low: 46930.22,
        high: 49343.83,
        current: 48637.83,
        low52w: 16930.22,
        high52w: 49743.83,
      };
    
    
    return(
      <div className="w-screen h-full overflow-y-auto overflow-x-hidden bg-[#DEDFE2]">
            <Navbar/>

            <div className="flex items-start">
              <p className="mt-[6rem] mb-[2rem] ml-[3rem] text-[#3E5765]">Cryptocurrencies <span className="text-black">{`>> Bitcoin`}</span></p>
            </div>
            
            <HomePage/>
          
              {/* <GetStartedCard/> */}
            {/* <PerformanceBar {...performanceData} />
            <div className="min-h-screen bg-[#DEDFE2] items-center p-6 space-y-6">
              <GetStartedCard/>
              <TrendingCoins/>
            </div> */}
        </div>
    )
}