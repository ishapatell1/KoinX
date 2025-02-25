import React from "react";

export const AboutBitcoin = () => {
  return (
    <section className="">
      {/* About Section */}
      <div className=" bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">About Bitcoin</h2>

        {/* Bitcoin Overview */}
        <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Bitcoins price today is **$16,951.82**, with a 24-hour trading volume of **$191.4 B**.
          BTC is **+0.36%** in the last 24 hours. It is currently **-7.70%** from its 7-day all-time high
          of **$18,366.66**, and **3.40%** from its 7-day all-time low of **$16,394.75**.
          BTC has a circulating supply of **19.24M BTC** and a max supply of **21M BTC**.
        </p>

        {/* Placeholder Content */}
        <h3 className="text-xl font-semibold mt-6">Lorem ipsum dolor sit amet</h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt gravida,
          felis sapien faucibus lorem, non vestibulum orci erat at elit.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
          Nunc sagittis libero adipiscing cursus felis pellentesque interdum.
        </p>

        {/* Already Holding Bitcoin? */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex items-center bg-blue-100 p-5 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-white font-bold rounded-full mr-4">
                S
              </div>
              <div className="flex-1">
                <span className="font-semibold text-lg">Calculate your Profits</span>
                <button className="block mt-2 text-blue-600 font-medium hover:underline">
                  Check Now →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center bg-red-100 p-5 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500 text-white font-bold rounded-full mr-4">
                H
              </div>
              <div className="flex-1">
                <span className="font-semibold text-lg">Calculate your Tax Liability</span>
                <button className="block mt-2 text-red-600 font-medium hover:underline">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 mt-6 leading-relaxed">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
        </p>
      </div>
    </section>
  );
};

