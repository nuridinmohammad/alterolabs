import Image from "next/image";
import React from "react";
import { HeadingOurStrength } from "../molecules/HeadingOurStrength";
import { StrengthList } from "../molecules/StrengthList";

export function OurStrength() {
  return (
    <div className="flex w-full h-auto py-20 px-4 flex-col gap-20 bg-[#F9F9F9]">
      <div className="flex w-full h-auto justify-center items-center">
        <Image
          src={"/img/our-strength-img.png"}
          height={288}
          width={300}
          alt="our-strength-img"
        />
      </div>
      <div className="flex flex-col w-full h-autojustify-center items-start gap-10">
        <HeadingOurStrength />
        <StrengthList />
      </div>
    </div>
  );
}
