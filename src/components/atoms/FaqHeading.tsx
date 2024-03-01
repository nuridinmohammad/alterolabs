import React from "react";

export function FaqHeading() {
  return (
    <div className="w-full h-auto flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
        <h2 className="text-zinc-600 text-xl font-semibold font-proxima leading-relaxed sm:leading-7">
          Get to know
        </h2>
        <h3 className="self-stretch text-zinc-800 text-[26px] sm:text-[42px] font-bold font-parabolica leading-[33.80px] sm:leading-[50.5px]">
          Frequently asked
          <br />
          questions
        </h3>
      </div>
      <p className="self-stretch text-zinc-600 text-base sm:text-lg font-normal font-proxima leading-normal sm:leading-7">
        Quick answers about Alterolabs, team efficiency, languages, and more.
      </p>
    </div>
  );
}
