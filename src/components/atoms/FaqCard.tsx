import Image from "next/image";
import React, { useState } from "react";

interface FaqCardProps extends React.ComponentProps<"div"> {
  heading: string;
  paragraph: string;
}

export function FaqCard({ heading, paragraph }: FaqCardProps) {
  const [is_collapse, setIsCollapse] = useState(false);

  return (
    <div className="w-full h-auto px-4 sm:px-8 py-6 border-b border-neutral-300 justify-start items-start gap-6 inline-flex">
      <div className="w-full h-auto flex-col justify-start items-start gap-4 inline-flex sm:flex-1">
        <h3
          className="self-stretch text-zinc-800 text-[26px] font-semibold font-proxima leading-[33.80px]"
          onClick={() => setIsCollapse(!is_collapse)}
        >
          {heading}
        </h3>
        {is_collapse ? (
          <p className="self-stretch text-zinc-600 text-base font-normal font-proxima leading-normal sm:leading-6">
            {paragraph}
          </p>
        ) : null}
      </div>
      {is_collapse ? (
        <button onClick={() => setIsCollapse(!is_collapse)}>
          <Image
            src={"/icon/icon-dropdown.svg"}
            alt="icon-dropdown"
            width={20}
            height={20}
          />
        </button>
      ) : (
        <button
          className="rotate-180"
          onClick={() => setIsCollapse(!is_collapse)}
        >
          <Image
            src={"/icon/icon-dropdown.svg"}
            alt="icon-dropdown"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
}
