
import { Academy } from "@/components/organisms/Academy";
import { Hero } from "@/components/organisms/Hero";
import { OurStrength } from "@/components/organisms/OurStrength";
import { Portofolio } from "@/components/organisms/Portofolio";
import { Services } from "@/components/organisms/Services";
import { WhatWeDo } from "@/components/organisms/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero/>
      <WhatWeDo/>
      <OurStrength/>
      <Services/>
      <Academy/>
      <Portofolio/>
    </>
  );
}
