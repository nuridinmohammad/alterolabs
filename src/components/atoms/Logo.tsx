"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HamburgerProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export function Logo({ ...props }: HamburgerProps) {
  return (
    <Link href={"/"} {...props}>
      <Image
        src={"/logo/logo-altero.svg"}
        width={205}
        height={40}
        alt="logo-altero"
      />
    </Link>
  );
}
