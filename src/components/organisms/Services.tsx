import React from "react";
import { ServicesList } from "../molecules/ServicesList";
import { HeadingServices } from "../molecules/HeadingServices";

export function Services() {
  return (
    <div
      id="#service"
      className="flex w-full h-auto py-20 px-4 sm:px-10 justify-center items-start md:items-center md:py-[144px] bg-top bg-no-repeat bg-auto bg-[url('/img/bg-services.webp')]"
    >
      <div className="md:max-w-[1180px] flex flex-col gap-20">
        <HeadingServices />
        <ServicesList />
      </div>
    </div>
  );
}
