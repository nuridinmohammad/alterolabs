import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface LangButtonProps extends React.ComponentProps<"div"> {
  openLange: boolean;
}

export default function LangButton({ openLange, ...props }: LangButtonProps) {
  return (
    <Button variant={"outline"} size={"sm"} className="w-full">
      <div
        className="w-full h-auto justify-start items-center gap-4 inline-flex"
        {...props}
      >
        <span>
          <Image
            src={"/icon/icon-lang.svg"}
            alt="dropdown"
            height={24}
            width={24}
          />
        </span>
        <span>English</span>
      </div>
      {openLange ? (
        <Image
          src={"/icon/icon-dropdown.svg"}
          alt="dropdown"
          height={24}
          width={24}
        />
      ) : (
        <Image
          src={"/icon/icon-dropdown.svg"}
          alt="dropdown"
          height={24}
          width={24}
          className="rotate-180"
        />
      )}
    </Button>
  );
}
