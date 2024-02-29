import Image from "next/image";
import React from "react";

interface StrengthCardProps extends React.HTMLAttributes<HTMLDivElement>{
  icon:string,
  heading:string,
  paragraph:string,
}

export function StrengthCard({
  icon,
  heading,
  paragraph,
}: StrengthCardProps) {
  return (
    <div className="flex w-full h-auto min-h-36 p-4 items-start gap-8 rounded-lg bg-white">
      <Image
        src={`/icon/${icon}`}
        alt="agile-icon"
        width={48}
        height={48}
      />
      <div className="flex flex-col items-start justify-center gap-2 flex-1">
        <h3 className="w-full h-auto text-zinc-800 text-lg font-bold font-proxima leading-[27px]">
          {heading}
        </h3>
        <p className="w-full h-auto text-zinc-600 text-base font-normal font-proxima leading-normal">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
