import Image from "next/image";
import React from "react";
import { ContentAcademy } from "../molecules/ContentAcademy";
import { Button } from "../ui/button";
import Link from "next/link";

export function Academy() {
  return (
    <div className="flex md:items-center w-full h-auto py-10 sm:py-20 px-4 sm:px-10 flex-col items-start  md:py-[144px] gap-20 bg-[#F9F9F9]">
     <div className="md:max-w-[1180px] flex flex-col gap-20 md:flex-row">
     <div className="md:order-2  w-full bg-center bg-no-repeat bg-cover bg-[url('/img/academy-img.webp')] h-[300px] sm:h-[466px] rounded-lg sm:items-stretch" />
      <div className="md:order-1 w-full h-auto flex flex-col justify-center items-start gap-6 sm:items-stretch">
        <ContentAcademy />
        <Link href={"/"}><Button variant={"outline"} size={"sm"} >Learn More</Button></Link>
      </div>
     </div>
    </div>
  );
}
