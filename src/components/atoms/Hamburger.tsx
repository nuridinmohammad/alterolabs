import Image from "next/image";
import React from "react";

interface HamburgerProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Hamburger({ ...props }: HamburgerProps) {
  return (
    <button {...props} role="button">
      <Image src={"/hamburger.svg"} width={24} height={24} alt="hamburger" />
    </button>
  );
}
