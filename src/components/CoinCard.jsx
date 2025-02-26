export const CoinCard = ({ coin }) => {
  if (!coin) return null;

  const { image, name, symbol, price, change, sparkline } = coin;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-52">
      <div className="flex items-center gap-2">
        <img src={image} alt={name || "coin"} className="w-6 h-6" />
        <span className="font-semibold">{symbol.toUpperCase()}</span>
      </div>
      <p className="text-lg font-bold mt-2">${price}</p>
      <p className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}>
        {change}%
      </p>
      <img src={sparkline} alt="trend" className="w-full h-10 mt-2" />
    </div>
  );
};