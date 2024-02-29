import React from "react";
import { HeadingWhatWeDo } from "../molecules/HeadingWhatWeDo";

export function WhatWeDo() {
  return (
    <div className="flex w-full h-auto py-20 px-4 flex-col items-start gap-10 sm:px-10 sm:gap-8 ">
      <HeadingWhatWeDo />
      <p className="w-full h-auto text-zinc-600 text-base font-normal font-proxima leading-normal sm:leading-6">
        At AlteroLabs, we revolutionize the digital landscape, offering
        comprehensive outsourcing services such as AI Integration, Web 3.0,
        Fintech, and 3D Design. We transform ideas into captivating and
        innovative digital realities.
      </p>
    </div>
  );
}
