import React from "react";
import { HeadingPortofolio } from "../molecules/HeadingPortofolio";
import { PortofolioList } from "../molecules/PortofolioList";

export function Portofolio() {
  return (
    <div className="w-full h-auto flex py-10 px-4 flex-col justify-center items-center gap-10 bg-center bg-no-repeat bg-auto bg-[url('/img/bg-services.webp')]">
      <HeadingPortofolio />
      <PortofolioList/>
    </div>
  );
}
