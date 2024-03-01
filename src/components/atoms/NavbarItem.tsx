import Link from "next/link";
import React from "react";

export function NavbarItem({text}:{text:string}) {
  return (
    <div className="w-[90px] h-auto px-2 py-4 justify-center items-center gap-2.5 inline-flex">
      <Link href={"/"} className="w-full text-zinc-500 text-base font-normal font-proxima leading-normal text-center">
       {text}
      </Link>
    </div>
  );
}
