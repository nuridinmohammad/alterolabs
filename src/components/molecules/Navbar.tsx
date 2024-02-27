import React from "react";
import { Logo } from "../atoms/Logo";
import { Hamburger } from "../atoms/Hamburger";

export function Navbar() {
  return (
    <div className="flex w-full h-20 p-4 justify-center items-center ">
      <div className="w-full flex justify-between items-center flex-1">
        <Logo />
        <Hamburger />
      </div>
    </div>
  );
}
