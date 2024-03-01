import React from "react";
import { Logo } from "../atoms/Logo";
import { NavbarItem } from "../atoms/NavbarItem";
import { NavbarLang } from "../atoms/NavbarLang";

export function NavbarDesktop() {
  return (
    <>
      <div className="max-w-[1180px] h-auto flex justify-between items-center flex-1">
        <div className="w-full h-auto pr-[66px] justify-start items-center flex">
          <Logo />
        </div>
        <div className="w-full h-auto rounded-full justify-center items-center gap-6 flex">
          <NavbarItem text="Service" />
          <NavbarItem text="Outsourcing" />
          <NavbarItem text="About Us" />
          <NavbarItem text="News" />
          <NavbarItem text="Career" />
        </div>
        <div className="w-full h-auto justify-end items-center gap-6 inline-flex">
          <NavbarLang />
        </div>
      </div>
    </>
  );
}
