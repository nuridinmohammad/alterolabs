"use client";

import React, { useEffect, useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
import { useMediaQuery } from "@react-hook/media-query";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarTabletMobile } from "./NavbarTabletMobile";

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setOpenDropdown(false)
  }, [isDesktop]);

  return (
    <>
      <div className="flex w-full h-20 p-4 justify-center items-center ">
        {isDesktop ? (
          <NavbarDesktop />
        ) : (
          <NavbarTabletMobile
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        )}
      </div>
      <div className="md:hidden">{openDropdown ? <DropdownMenu /> : null}</div>
    </>
  );
}
