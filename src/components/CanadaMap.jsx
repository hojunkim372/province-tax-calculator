import React from "react";
import canadaMap from "../assets/canada.png";

const provinces = [
  // western
  { name: "British Columbia", left: "6%", top: "62%", w: "10%", h: "14%", tooltipClass: "bg-green-600 text-white" },
  { name: "Alberta", left: "19%", top: "60%", w: "7%", h: "13%", tooltipClass: "bg-orange-600 text-white" },
  { name: "Saskatchewan", left: "29%", top: "59%", w: "7%", h: "13%", tooltipClass: "bg-yellow-500 text-black" },
  { name: "Manitoba", left: "37%", top: "65%", w: "7%", h: "13%", tooltipClass: "bg-amber-700 text-white" },

  // middle
  { name: "Ontario", left: "49%", top: "70%", w: "11%", h: "12%", tooltipClass: "bg-blue-600 text-white" },
  { name: "Quebec", left: "65%", top: "63%", w: "13%", h: "17%", tooltipClass: "bg-indigo-600 text-white" },

  // eastern
  { name: "New Brunswick", left: "74%", top: "69%", w: "5%", h: "6%", tooltipClass: "bg-purple-600 text-white" },
  { name: "Nova Scotia", left: "87%", top: "80%", w: "6%", h: "5%", tooltipClass: "bg-cyan-600 text-white" },
  { name: "Prince Edward Island", left: "75%", top: "73%", w: "3%", h: "3%", tooltipClass: "bg-red-600 text-white" },
  { name: "Newfoundland and Labrador", left: "80%", top: "50%", w: "8%", h: "12%", tooltipClass: "bg-rose-600 text-white" },

  // northern 
  { name: "Yukon", left: "6%", top: "35%", w: "10%", h: "12%", tooltipClass: "bg-gray-600 text-white" },
  { name: "Northwest Territories", left: "20%", top: "35%", w: "15%", h: "15%", tooltipClass: "bg-sky-700 text-white" },
  { name: "Nunavut", left: "35%", top: "40%", w: "20%", h: "20%", tooltipClass: "bg-black text-white" },
];

export default function CanadaMap({ selected, onSelect }) {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* map */}
      <img src={canadaMap} alt="Canada Map" className="w-full h-auto" />

      {/* click */}
      {provinces.map((p) => {
        const isSelected = selected === p.name;
        return (
          <div
            key={p.name}
            onClick={() => onSelect(p.name)}
            className={`group absolute cursor-pointer ${
              isSelected
                ? "bg-red-500/40"
                : "bg-transparent hover:bg-red-400/30"
            }`}
            style={{
              left: p.left,
              top: p.top,
              width: p.w,
              height: p.h,
            }}
          >
            {/* Tooltip */}
            <span
              className={`absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded whitespace-nowrap pointer-events-none ${p.tooltipClass} ${
                isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {p.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
