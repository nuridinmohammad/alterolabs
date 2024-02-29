import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface PortofolioCardCardProps extends React.ComponentProps<"div"> {
  icon?: boolean;
  heading: string;
  paragraph: string;
  link: string;
  img: string;
}

export function PortofolioCard({
  icon,
  heading,
  link,
  paragraph,
  img,
}: PortofolioCardCardProps) {
  console.log(img);
  
  return (
    <div className="flex w-full h-auto py-8 px-0 flex-col justify-center items-center gap-8 border-b border-neutral-300">
      {/* <Image
        src={`/img/${img}`}
        alt={`${img}`}
        height={261}
        width={372}
        className="rounded-lg"

      /> */}
      <div style={{ backgroundImage: `url(/img/${img})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-red-500 w-full h-[288px] rounded-lg"></div>

      <div className="w-full h-auto flex flex-col items-start gap-8">
        <div className="w-full h-auto flex flex-col items-start gap-4">
          <div className="w-full h-auto flex flex-col items-start gap-2">
            <h3 className="text-zinc-800 text-[26px] font-semibold font-proxima leading-[33.80px]">
              {heading}
            </h3>
            <p className="w-72 text-zinc-600 text-base font-normal font-proxima leading-normal">
              {paragraph}
            </p>
          </div>
          <div className="flex items-start gap-2">
            {icon ? (
              <>
                <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/logo/logo-gp.svg`}
                    alt={`ogo-gp.svg`}
                    height={40}
                    width={135}
                    className="rounded-lg"
                  />
                </a>
                <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/logo/logo-appstore.svg`}
                    alt={`ogo-appstore.svg`}
                    height={40}
                    width={120}
                    className="rounded-lg"
                  />
                </a>
              </>
            ) : null}
          </div>
        </div>
        <a
          href={`${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant={"outline"} size={"sm"} className="w-full">
            Learn more
          </Button>
        </a>
      </div>
    </div>
  );
}
