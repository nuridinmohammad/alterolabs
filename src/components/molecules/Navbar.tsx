"use client";

import React, { useState } from "react";
import { Logo } from "../atoms/Logo";
import { Hamburger } from "../atoms/Hamburger";
import Image from "next/image";
import { CloseButton } from "../atoms/CloseButton";
import { Button } from "../ui/button";
import { DropdownMenu } from "./DropdownMenu";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <div className="flex w-full h-20 p-4 justify-center items-center ">
        <div className=" w-full h-auto flex justify-between items-center flex-1">
          <Logo />
          {!openDropdown ? (
            <Hamburger onClick={() => setOpenDropdown(!openDropdown)} />
          ) : (
            <CloseButton
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          )}
        </div>
      </div>
      {openDropdown ? <DropdownMenu /> : null}
    </>
  );
}
