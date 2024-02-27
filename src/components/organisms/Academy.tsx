import Image from "next/image";
import React from "react";
import { ContentAcademy } from "../molecules/ContentAcademy";
import { Button } from "../ui/button";
import Link from "next/link";

export function Academy() {
  return (
    <div className="flex w-full h-auto p-10 px-4 flex-col items-start gap-20 bg-[#F9F9F9]">
      <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('/img/academy-img.webp')] h-[300px] rounded-lg" />
      <div className="w-full h-auto flex flex-col justify-center items-start gap-6">
        <ContentAcademy />
        <Link href={"/"}><Button variant={"outline"} size={"sm"}>Learn More</Button></Link>
      </div>
    </div>
  );
}
