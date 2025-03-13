import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-[#1A432E] px-[135px] py-3 max-md:px-5 max-md:py-3">
      <div className="flex justify-center items-center w-full">
        <div className="text-white text-sm font-semibold uppercase max-sm:text-xs">
          <span>Get up to 35% OFF today! </span>
          <button className="underline">GET NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
