import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export function PortofolioCard() {
  return (
    <div className="flex w-full h-auto py-8 px-0 flex-col justify-center items-start gap-8">
      <Image
        src={"/img/chaca-market.webp"}
        alt="chaca-market"
        height={261}
        width={372}
        className="rounded-lg"
      />
      <div className="w-full h-auto flex flex-col items-start gap-8">
        <div>
          <div>TExt</div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Button variant={"outline"} size={"sm"} className="w-full">
          Learn more
        </Button>
      </div>
    </div>
  );
}
