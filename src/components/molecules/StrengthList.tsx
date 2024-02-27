import React from "react";
import { StrengthCard } from "../atoms/StrengthCard";

export function StrengthList() {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-start gap-6 ">
      <StrengthCard heading="AGILE DEVELOPMENT" paragraph={"With agile development we can deliver value to our customers faster and with fewer headaches."} icon="agile-icon.svg"/>
      <StrengthCard heading="USER-CENTRIC SERVICE" paragraph={"Our goal is to create services which focused on the satisfaction and growth of our user."} icon="user-centric.svg"/>
      <StrengthCard heading="EXPERT LEVEL CEO & CTO" paragraph={"With having more than 20 years experience as a senior developer and project manager, the CEO and CTO can stably start customers project with great vision and leadership."} icon="ceo-cto-icon.svg"/>
    </div>
  );
}
