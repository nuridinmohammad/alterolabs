import Image from "next/image";
import React from "react";
import { HeadingOurStrength } from "../molecules/HeadingOurStrength";
import { StrengthList } from "../molecules/StrengthList";

export function OurStrength() {
  return (
    <div className="flex w-full h-auto py-20 px-4 sm:px-10 md:items-center flex-col md:flex md:py-[144px] gap-20 bg-[#f9f9f9]">
      <div className="md:max-w-[1180px] md:flex md:gap-20">
        <div className=" flex w-full h-auto justify-center items-center md:items-end md:order-2">
          <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/img/our-strength-img.webp')] h-[288px] sm:h-[466px] rounded-lg" />
        </div>
        <div className="flex flex-col w-full h-auto justify-center items-start gap-10 mt-20 md:mt-0">
          <HeadingOurStrength />
          <StrengthList />
        </div>
      </div>
    </div>
  );
}
