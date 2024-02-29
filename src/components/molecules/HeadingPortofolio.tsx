import React from "react";

export function HeadingPortofolio() {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <div className="flex flex-col w-full h-auto justify-center items-start gap-2">
        <h3 className="w-full h-auto text-zinc-600 text-xl  font-semibold font-proxima leading-relaxed sm:leading-7">
        Portofolio
        </h3>
        <h2 className="w-full h-auto text-zinc-800 text-[26px] sm:text-[42px] font-bold font-parabolica leading-[33.80px] sm:leading-[50px]">
        Our Portfolio Highlights
        </h2>
      </div>
    </div>
  );
}
