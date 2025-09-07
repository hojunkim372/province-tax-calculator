import { useState } from "react";
import CanadaMap from "./components/CanadaMap";
import Calculator from "./components/Calculator";
import taxRates from "./data/taxRates";

export default function App() {
  const [province, setProvince] = useState(null);

  return (
    <div className="p-6 text-center font-sans">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
  Canada Tax Calculator
  <img
    src="/src/assets/canada-flag.png"
    alt="Canada Flag"
    style={{ width: "25px", height: "25px" }} // 
  />
</h1>


      
      <CanadaMap selected={province} onSelect={setProvince} />

      {province && (
        <div className="mt-6">
          <p className="text-lg">
            Selected Province:{" "}
            <span className="font-semibold">{province}</span>
          </p>
          <p className="text-gray-600">
            Tax Rate: {(taxRates[province] * 100).toFixed(2)}%
          </p>
          <Calculator province={province} />
        </div>
      )}
    </div>
  );
}
