import Image from "next/image";
import React from "react";
import { HeadingOurStrength } from "../molecules/HeadingOurStrength";
import { StrengthList } from "../molecules/StrengthList";

export function OurStrength() {
  return (
    <div className="flex w-full h-auto py-20 px-4 sm:px-10 flex-col gap-20 bg-[#F9F9F9]">
      <div className="flex w-full h-auto justify-center items-center">
        {/* <Image
          src={"/img/our-strength-img.webp"}
          height={288}
          width={300}
          alt="our-strength-img"
          className="w-full self-stretch"
        /> */}
        <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/img/our-strength-img.webp')] h-[288px] sm:h-[466px] rounded-lg" />
      </div>
      <div className="flex flex-col w-full h-auto justify-center items-start gap-10">
        <HeadingOurStrength />
        <StrengthList />
      </div>
    </div>
  );
}
