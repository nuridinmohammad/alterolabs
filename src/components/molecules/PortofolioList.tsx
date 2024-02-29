import React from "react";
import { PortofolioCard } from "../atoms/PortofolioCard";

export function PortofolioList() {
  return (
    <div className="flex w-full h-auto flex-col items-start gap-8">
      <PortofolioCard
        icon={true}
        heading="Chaca Market"
        img="chaca-market.webp"
        link="https://www.google.com"
        paragraph="It’s an app that provides you about local service, around your neighbours and giving you benefit with less work while improving the quality of the neighbours. And don’t forget all of it free!"
      />
      <PortofolioCard
        heading="Data Cake"
        img="data-cake.webp"
        link="www.google.com"
        paragraph="Data Cake is an API Marketplace made by alterolabs company. Data Cake will provide the fintech data your company needs. In Data Cake all-in-all finance service for every of your financial needs will available here."
      />
      <PortofolioCard
        heading="Studio Neko"
        img="studio-neko.webp"
        link="www.google.com"
        paragraph="Studio Neko is a creative studio that offers a wide array of designed creative services. From CGI solutions and 3D design, we fulfill all your creative needs. Studio Neko's expertise includes 3D motion, visual effects, 3D Characters, etc. With a focus on delivering innovative and visually stunning solutions."
      />
    </div>
  );
}
