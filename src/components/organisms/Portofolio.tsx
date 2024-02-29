import React from "react";
import { HeadingPortofolio } from "../molecules/HeadingPortofolio";
import { PortofolioList } from "../molecules/PortofolioList";

export function Portofolio() {
  return (
    <div className="flex w-full h-auto py-20 px-4 flex-col justify-center items-start gap-10 bg-top bg-no-repeat bg-auto bg-[url('/img/bg-services.webp')]">
      <HeadingPortofolio />
      <PortofolioList />
    </div>
  );
}
