import React from "react";
import { ServicesCard } from "../atoms/ServicesCard";

export function ServicesList() {
  return (
    <div className="flex w-full h-auto flex-col items-start gap-8">
      <ServicesCard
        heading="AI Integration"
        paragraph="We unlock the full potential of your business with our expert AI integrations, delivering intelligent automation and data-driven insights for optimal efficiency."
        icon="ai-intergration.svg"
      />
      <ServicesCard
        heading="Web 3.0"
        paragraph="We craft futuristic web experiences, enhancing your online presence with innovative Web 3.0 design and technologies."
        icon="web3-icon.svg"
      />
      <ServicesCard
        heading="3D Design"
        paragraph="We create 3D motion, visual effects, 3D Characters, etc. With a focus on delivering innovative and visually stunning solutions."
        icon="3D-web.svg"
      />
    </div>
  );
}
