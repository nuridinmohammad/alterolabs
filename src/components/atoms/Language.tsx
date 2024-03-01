import React from "react";

interface LanguageProps extends React.ComponentProps<"div"> {
  text: string;
}

export function Language({ text }: LanguageProps) {
  return (
    <div className="self-stretch px-4 py-2 justify-start items-start inline-flex hover:bg-stone-200 hover:rounded-lg">
      <button className="text-zinc-800 text-lg font-normal font-proxima leading-[27px]">
        {text}
      </button>
    </div>
  );
}
