"use client"
import React, { useState } from "react";
import { Logo } from "../atoms/Logo";
import { Hamburger } from "../atoms/Hamburger";
import { CloseButton } from "../atoms/CloseButton";

export function NavbarTabletMobile({openDropdown, setOpenDropdown}:{openDropdown:boolean, setOpenDropdown:(value:boolean)=>void}) {

  return (
    <>
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
    </>
  );
}
