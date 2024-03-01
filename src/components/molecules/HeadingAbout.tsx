import Image from "next/image";
import React from "react";

export function HeadingAbout() {
  return (
    <div className="w-full h-auto px-4 sm:px-10 py-20 flex-col justify-center items-center gap-10 inline-flex">
      <div className="md:max-w-[1180px] w-full h-auto sm:max-w-[978px] flex-col justify-start items-center gap-4 inline-flex">
        <h2 className="self-stretch text-center text-zinc-800 text-[42px] sm:text-6xl font-bold font-parabolica leading-[50.40px] sm:leading-[67px]">
          Get to know us further
        </h2>
        <p className="self-stretch text-center text-zinc-600 text-base sm:text-lg font-normal font-proxima leading-normal sm:leading-6">
          Explore the vision, office location, and frequently asked questions
          (FAQ) to discover why AlteroLabs is your ideal partner for creating
          exceptional digital experiences.
        </p>
      </div>
      {/* <Image
        src={"/img/about-img.webp"}
        alt="about-img"
        height={550}
        width={288}
        className="w-full"
      /> */}
      <div className="md:max-w-[1180px] w-full bg-center bg-no-repeat bg-cover bg-[url('/img/about-img.webp')] h-[449px] sm:h-[550px] rounded-lg" />
    </div>
  );
}
