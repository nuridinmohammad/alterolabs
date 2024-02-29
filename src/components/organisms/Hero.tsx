import React from "react";
import Image from "next/image";
import { HeadingHero } from "../molecules/HeadingHero";

export const Hero = () => {
  return (
    <div className="flex w-full h-auto  pt-10 flex-col self-start">
      <HeadingHero />
      {/* <Image
        src={"/img/image-hero.png"}
        height={300}
        width={320}
        alt="image-hero"
        className="w-full"
      /> */}
      <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/img/image-hero.webp')] h-[300px] sm:h-[624px]" />
    </div>
  );
};
