import React, { useState } from 'react';

const PriceCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const handleOriginalPriceChange = (event) => {
    setOriginalPrice(parseFloat(event.target.value));
  };

  const handleProfitPercentageChange = (event) => {
    setProfitPercentage(parseFloat(event.target.value));
  };

  const calculateFinalPrice = () => {
    const profitAmount = (originalPrice * profitPercentage) / 100;
    const finalPrice = originalPrice + profitAmount;
    setFinalPrice(finalPrice);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Price Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold">Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={handleOriginalPriceChange}
          className="border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold">% Profit:</label>
        <input
          type="number"
          value={profitPercentage}
          onChange={handleProfitPercentageChange}
          className="border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={calculateFinalPrice}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Calculate
      </button>
      <p className="mt-4 text-lg font-semibold">Final Price: {finalPrice}</p>
    </div>
  );
};

export default PriceCalculator;
