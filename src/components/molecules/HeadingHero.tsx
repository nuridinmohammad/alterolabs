import Image from "next/image";
import React from "react";

export function HeadingHero() {
  return (
    <div className="w-full h-auto flex px-4 sm:px-10 py-10 flex-col items-start gap-4 ">
      <h1 className="items-stretch w-full h-auto font-parabolica text-[42px] sm:text-[56px] not-italic font-bold leading-[50px] sm:leading-[67px]">
        We Help You Create Digital Experiences
      </h1>
      <p className="items-stretch w-full h-auto font-proxima text-base not-italic font-normal leading-6 text-[#4F4F59]">
        Inspiring innovation and bringing ideas to life. We specialize in AI
        integration, Web 3.0, Fintech, and 3D design. Partner with us to turn
        your ideas into digital experiences.
      </p>
    </div>
  );
}
