import Image from "next/image";
import React from "react";

interface CloseButtonProps extends React.ComponentProps<"button"> {
  setOpenDropdown: (value: boolean) => void;
  openDropdown: boolean;
}

export function CloseButton({
  setOpenDropdown,
  openDropdown,
  ...props
}: CloseButtonProps) {
  return (
    <button {...props}>
      <Image
        src={"/icon/icon-close.svg"}
        height={24}
        width={24}
        alt="close"
        onClick={() => setOpenDropdown(!openDropdown)}
      />
    </button>
  );
}
