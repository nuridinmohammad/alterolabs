import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Language } from "../atoms/Language";
import LangButton from "../atoms/LangButton";

export function DropdownLang() {
  const [openLang, setOpenLang] = useState(false);
  return (
    <div className="w-full h-auto flex-col justify-start items-start gap-4 inline-flex">
      <LangButton onClick={() => setOpenLang(!openLang)} openLange={openLang} />
      {openLang ? (
        <div className="w-full h-auto bg-stone-50 rounded-lg flex-col justify-start items-start inline-flex">
          <Language text="English" />
          <Language text="Indonesia" />
          <Language text="한국인" />
        </div>
      ) : null}
    </div>
  );
}
