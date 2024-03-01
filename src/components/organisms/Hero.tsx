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
      <div className="w-full py-10 px-10 bg-stone-50 justify-center gap-6 items-center md:flex hidden">
        <div className="bg-center bg-no-repeat bg-auto h-10 w-auto">
          <Image
            src={"/img/Tadpole Hub.webp"}
            height={40}
            width={170}
            alt="Tadpole Hub"
          />
        </div>
        <div className=" bg-center bg-no-repeat bg-auto h-10 w-[170px]">
          <Image
            src={"/img/Seoul Fintech Lab.webp"}
            height={40}
            width={170}
            alt="Seoul Fintech Lab"
          />
        </div>
        <div className=" bg-center bg-no-repeat bg-auto h-10 w-[170px]">
          <Image
            src={"/img/Hana Bank.webp"}
            height={40}
            width={170}
            alt="/Hana Bank"
          />
        </div>
        <div className=" bg-center bg-no-repeat bg-auto h-10 w-[170px]">
          <Image
            src={"/img/Tenity.webp"}
            height={40}
            width={170}
            alt="Tenity"
          />
        </div>
        <div className=" bg-center bg-no-repeat bg-auto h-10 w-[170px]">
          <Image
            src={"/img/Seoul Go.webp"}
            height={40}
            width={170}
            alt="Seoul Go"
          />
        </div>
        <div className=" bg-center bg-no-repeat bg-auto h-10 w-[170px]">
          <Image src={"/img/SBA.webp"} height={40} width={170} alt="SBA" />
        </div>
      </div>
    </div>
  );
};
