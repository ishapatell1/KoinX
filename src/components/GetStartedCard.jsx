import React from "react";
import { TrendingCoins } from "./TrendingCoins";

export const GetStartedCard = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-[1rem] ">

        <div className="bg-[#0052FE] flex flex-col gap-[0.5rem] text-white p-3 rounded-lg shadow-lg text-center items-center justify-center  w-[426px] md:max-w-lg 
            lg:max-w-xl h-auto md:h-[515px] ">
          {/* <div className="w-[426px] h-[515px] bg-[#0052FE] rounded-[8px] p-[31px] pt-[31px] pr-[16px] pb-[31px] pl-[16px] gap-[19px] m-6">  */}

            <p className="text-xl md:text-2xl font-bold mb-4">Get Started with KoinX <br/> for FREE</p>
            <p className="text-sm md:text-base mb-6 text-[#F2F2F2] leading-relaxed">
                With our range of features that you can equip for <br/> free, KoinX allows you to be more educated
                and <br/> aware of your tax reports.
            </p>

            {/* Placeholder Image */}
            <div className="flex justify-center mb-4">
                <img src="/Frame.svg" alt="Get Started Image" className="w-[179px] h-[166px]"/>
            </div>

            <button className="bg-white text-black items-center font-semibold w-3xs h-[48px] rounded-lg hover:bg-gray-100 transition ">
                Get Started for FREE →
            </button>
        </div>

        <div>
            <TrendingCoins/>
        </div>

    </div>
   
  );
};