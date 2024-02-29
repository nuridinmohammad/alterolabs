import React from "react";

export function FaqHeading() {
  return (
    <div className="w-full h-auto flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
        <h2 className="text-zinc-600 text-xl font-semibold font-proxima leading-relaxed">
          Get to know
        </h2>
        <h3 className="self-stretch text-zinc-800 text-[26px] font-bold font-parabolica leading-[33.80px]">
          Frequently asked
          <br />
          questions
        </h3>
      </div>
      <p className="self-stretch text-zinc-600 text-base font-normal font-proxima leading-normal">
        Quick answers about Alterolabs, team efficiency, languages, and more.
      </p>
    </div>
  );
}
