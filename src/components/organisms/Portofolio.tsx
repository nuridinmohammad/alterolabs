import React from "react";
import { HeadingPortofolio } from "../molecules/HeadingPortofolio";
import { PortofolioList } from "../molecules/PortofolioList";

export function Portofolio() {
  return (
    <div className="flex w-full h-auto py-20 sm:p-10 px-4 flex-col md:items-center md:py-[144px] justify-center items-start gap-10 bg-top bg-no-repeat bg-auto bg-[url('/img/bg-services.webp')] sm:items-stretch">
      <div className="md:max-w-[1180px] flex flex-col gap-10">
        <HeadingPortofolio />
        <PortofolioList />
      </div>
    </div>
  );
}
