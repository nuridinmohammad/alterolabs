import { Navbar } from "@/components/molecules/Navbar";
import { Academy } from "@/components/organisms/Academy";
import { Hero } from "@/components/organisms/Hero";
import { OurStrength } from "@/components/organisms/OurStrength";
import { Portofolio } from "@/components/organisms/Portofolio";
import { Services } from "@/components/organisms/Services";
import { WhatWeDo } from "@/components/organisms/WhatWeDo";

export default function Home() {
  return (
    <main className="h-auto w-full">
      <Navbar />
      <Hero/>
      <WhatWeDo/>
      <OurStrength/>
      <Services/>
      <Academy/>
      <Portofolio/>
    </main>
  );
}
