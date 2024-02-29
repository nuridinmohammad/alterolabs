import Image from 'next/image'
import React from 'react'

export function HeadingAbout() {
  return (
    <div className="w-full h-auto px-4 py-20 flex-col justify-center items-center gap-10 inline-flex">
    <div className="w-full h-auto  flex-col justify-start items-center gap-4 inline-flex">
      <h2 className="self-stretch text-center text-zinc-800 text-[42px] font-bold font-parabolica leading-[50.40px]">
        Get to know us further
      </h2>
      <p className="self-stretch text-center text-zinc-600 text-base font-normal font-proxima leading-normal">
        Explore the vision, office location, and frequently asked questions
        (FAQ) to discover why AlteroLabs is your ideal partner for creating
        exceptional digital experiences.
      </p>
    </div>
    <Image
      src={"/img/about-img.webp"}
      alt="about-img"
      height={550}
      width={288}
    />
  </div>
  )
}
