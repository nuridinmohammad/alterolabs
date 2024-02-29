import React from "react";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div
      id="#cta"
      className="w-full h-auto px-4 sm:px-10  py-20 flex-col justify-center items-start sm:gap-36 sm:items-stretch inline-flex bg-[url('/img/image-cta.webp')] bg-right-bottom
    bg-no-repeat bg-cover"
    >
      <div className="w-full h-auto flex-col justify-center items-start gap-8 inline-flex">
        <div className="w-full h-auto flex-col justify-end items-center gap-4 inline-flex">
          <h1 className="w-full h-auto text-white text-[42px] font-bold font-parabolica leading-[50.40px]">
            Start Your Project Now!
          </h1>
          <p className="w-full h-auto  text-neutral-200 text-base sm:text-[18px] font-normal font-proxima leading-normal sm:leading-[27px]">
            Ready to share your ideas? We are always ready to turn your concept
            into reality. {`Let's`} start the conversation!
          </p>
        </div>
        <Button
          variant={"link"}
          size={"sm"}
          className="text-white text-base font-normal font-proxima leading-normal w-full sm:w-auto"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
