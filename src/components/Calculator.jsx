import React, { useState } from "react";
import taxRates from "../data/taxRates";

export default function Calculator({ province }) {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (province && price) {
      const tax = parseFloat(price) * taxRates[province];
      setResult(parseFloat(price) + tax);
    }
  };

  return (
    <div className="mt-6">
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border px-4 py-3 rounded w-56 text-lg"
      />
      <button
        onClick={handleCalculate}
        className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700"
      >
        Calculate
      </button>

      {result && (
        
          <p className="text-2xl font-bold">
            Total Price: ${result.toFixed(2)}
          </p>
       
      )}
    </div>
  );
}
