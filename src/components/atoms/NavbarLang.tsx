"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Language } from "./Language";

export function NavbarLang() {
  const [openLang, setOpenlang] = useState(false);
  const langRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langRef.current &&
        event.target instanceof Node &&
        !langRef.current.contains(event.target)
      ) {
        setOpenlang(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [langRef]);

  return (
    <div className="flex gap-6 relative" ref={langRef}>
      <button
        className="flex gap-2 items-center"
        onClick={() => setOpenlang(!openLang)}
      >
        <Image
          src={"/icon/icon-lang.svg"}
          alt="dropdown"
          height={16}
          width={16}
        />
        <span>EN</span>
        {openLang ? (
          <Image
            src={"/icon/icon-dropdown.svg"}
            alt="dropdown"
            height={16}
            width={16}
          />
        ) : (
          <Image
            src={"/icon/icon-dropdown.svg"}
            alt="dropdown"
            height={16}
            width={16}
            className="rotate-180"
          />
        )}
      </button>
      <Link href={"#cta"} className="max-w-[120px]">
        <Button
          variant={"default"}
          size={"sm"}
          className="w-full h-auto text-white"
        >
          Get In Touch
        </Button>
      </Link>
      {openLang ? (
        <div className="absolute top-14 right-[50%]">
          <div className="w-full h-auto py-2 bg-stone-50 rounded-lg flex-col justify-start items-start gap-4 inline-flex">
            <Language text="English" role="button" />
            <Language text="Indonesia" role="button" />
            <Language text="한국인" role="button" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
