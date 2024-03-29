import React from "react";
import { ServicesList } from "../molecules/ServicesList";
import { HeadingServices } from "../molecules/HeadingServices";

export function Services() {
  return (
    <div className="flex w-full h-auto py-20 px-4 flex-col justify-center items-start gap-10 bg-center bg-no-repeat bg-auto bg-[url('/img/bg-services.webp')]">
      <HeadingServices />
      <ServicesList />
    </div>
  );
}
