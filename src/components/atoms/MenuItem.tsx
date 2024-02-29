import Link from "next/link";
import React from "react";

interface MenuItemProps extends React.ComponentProps<"a"> {
  text: string;
  link: string;
  is_target?: boolean;
}
export function MenuItem({ text, link, is_target }: MenuItemProps) {
  return (
    <div className="w-full h-auto py-4 border-b border-neutral-300 justify-start items-start inline-flex">
      <Link
        href={link}
        target={is_target ? "_blank" : ""}
        className="text-zinc-700 text-2xl font-medium font-proxima leading-[31.20px] hover:text-zinc-950"
      >
        {text}
      </Link>
    </div>
  );
}
