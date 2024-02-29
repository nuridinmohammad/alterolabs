import Image from "next/image";
import React from "react";

interface ServicesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  heading: string;
  paragraph: string;
}

export function ServicesCard({ icon, heading, paragraph }: ServicesCardProps) {
  return (
    <div className="w-full h-auto p-8 bg-white rounded-lg border border-neutral-300 flex-col justify-start items-center gap-8 inline-flex">
      <div className="h-auto p-4 bg-violet-200 rounded-full justify-center items-center inline-flex">
        <Image src={`/icon/${icon}`} alt="agile-icon" width={48} height={48} className="sm:h-20 sm:w-20"/>
      </div>
      <div className="self-stretch w-full h-auto flex-col justify-end items-center gap-2 flex">
        <h3 className="text-zinc-800 h-auto text-xl font-semibold font-proxima leading-relaxed sm:leading-[26px]">
         {heading}
        </h3>
        <p className="self-stretch w-full h-auto text-center text-zinc-600 text-base font-normal font-proxima leading-normal sm:leading-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
