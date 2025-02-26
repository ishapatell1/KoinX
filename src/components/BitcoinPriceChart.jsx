// import React from 'react'

// export const BitcoinPriceChart = () => {
//   return (
//     <div className='bg-white p-4 rounded-lg '>
//       {/* container for chart and heading */}
//       <div className=''>
//         {/* heading div */}
//         <div className='flex flex-col gap-[2rem]'>
//           <div className='flex flex-row  items-center justify-start gap-[0.5rem]'>
//             <img src = "/bitcoin-icon.svg" className='h-[2rem] w-[2rem]' alt = "Bitcoin Image"/>
//             <h1 className='text-[#0B1426] font-[600] text-[1.5rem]'>Bitcoin</h1>
//             <p className='text-[#5D667B] font-[600] text-[1rem]'>BTC</p>
//             <div className='bg-[#808A9D] text-white rounded-lg border-0 flex items-center justify-center px-2 py-1 ml-[1rem] text-[0.8rem]'>Rank#1</div>
//           </div> 
//           <div className='flex flex-col gap-[0.5rem]'>
//             <div className='flex flex-row gap-[2rem] items-center '>
//             <p className='text-[#0B1426] text-[2rem] font-[600] leading-[1rem]'>$46,953.04</p>
//             <div className='flex flex-row bg-[#EBF9F4] gap-2 p-[0.5rem] w-[5rem] h-[2rem] text-center justify-center rounded-sm'>
//               <img src = "/uparrow.svg" alt='polygon'/>
//               <p>(24H)</p>
//             </div>

//             </div>
         
//             <p className='text-[#0B1426] font-[500] text-[1rem] leading-[1.5rem] '>₹ 39,42,343</p>
            
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }



import { Line } from "react-chartjs-2";
import TradingViewWidget from "../components/Widget"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const BitcoinPriceChart = () => {
  const data = {
    labels: ["16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec", "21 Dec", "22 Dec"],
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: [42000, 43000, 41000, 47000, 45000, 44000, 43000], // Example data
        borderColor: "#0052FE",
        backgroundColor: "rgba(0, 82, 254, 0.1)",
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "#E0E0E0" },
        ticks: { callback: (value) => `$${value.toLocaleString()}` },
      },
    },
  };

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
            <p className="text-[#0B1426] text-[2rem] font-[600]">$46,953.04</p>
            <div className="flex flex-row bg-[#EBF9F4] gap-2 p-[0.5rem] w-[5rem] h-[2rem] text-center justify-center rounded-sm">
              <img src="/uparrow.svg" alt="Up Arrow" />
              <p>(24H)</p>
            </div>
          </div>
          <p className="text-[#0B1426] font-[500] text-[1rem]">₹ 39,42,343</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64 mt-4">
      <TradingViewWidget/>
      </div>
    </div>
  );
};

