import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { DropdownLang } from "./DropdownLang";
import { MenuItem } from "../atoms/MenuItem";
import Link from "next/link";

export function DropdownMenu() {
  return (
    <div className="absolute w-full h-auto p-4 bg-white flex-col justify-center items-center gap-10 inline-flex">
      <div className="w-full h-auto flex-col justify-start items-start gap-10 inline-flex">
        <h2 className="w-full h-auto text-zinc-800 text-[26px] font-semibold font-proxima leading-[33.80px]">
          Menu
        </h2>
        <DropdownLang />
        <div className="w-full h-auto flex-col justify-start items-start inline-flex">
          <MenuItem link="#service" text={"Service"} is_target={false} />
          <MenuItem
            link="https://outsourcing.cakeplabs.com/"
            text={"Outsourcing"}
            is_target={true}
          />
          <MenuItem link="/about" text={"About Us"} is_target={false} />
          <MenuItem
            link="https://chaca-market.notion.site/CakepLabs-7c8ecdc1dc0047f58e4cd0f13867018f"
            text={"News"}
            is_target={true}
          />
          <MenuItem
            link="https://chaca-market.notion.site/CakepLabs-Recruitment-1d77ac63263d4b3d8cce717bd81fb768"
            text={"Career"}
            is_target={true}
          />
        </div>
      </div>
      <Link href={"#cta"} className="w-full">
        <Button
          variant={"default"}
          size={"default"}
          className="w-full h-auto text-white"
        >
          Get In Touch
        </Button>
      </Link>
    </div>
  );
}
