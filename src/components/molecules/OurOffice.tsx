import Image from "next/image";
import React from "react";

export function OurOffice() {
  return (
    <div className="md:items-center md:py-[144px] w-full h-auto px-4 sm:px-10 py-20 flex-col justify-start items-start gap-20 inline-flex">
      {/* <Image
        src={"/img/office-img.webp"}
        alt="about-img"
        height={550}
        width={288}
      /> */}
      <div className="md:max-w-[1180px] flex flex-col gap-20 md:gap-14">
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="md:order-2 w-full bg-center bg-no-repeat bg-cover bg-[url('/img/office-img.webp')] h-[466px] rounded-lg" />

          <div className="md:order-1 w-full h-auto flex-col justify-start md:justify-center items-center gap-20 inline-flex">
            <div className="w-full h-auto flex-col justify-center items-start gap-6 inline-flex">
              <div className="self-stretch h-auto  flex-col justify-center items-start gap-2 flex">
                <h2 className="text-zinc-600 text-xl font-semibold font-proxima leading-relaxed sm:leading-7">
                  Our Office
                </h2>
                <h3 className="self-stretch text-zinc-800 text-[26px] sm:text-[42px] font-bold font-parabolica leading-[33.80px] sm:leading-[50.5px]">
                  Discover our office <br />
                  Plan your visit
                </h3>
              </div>
              <p className="self-stretch text-zinc-600 text-base sm:text-lg font-normal font-proxima leading-normal sm:leading-7">
                Step into our city-based innovation hub. Our workplace is more
                than an office – {`it's`} a place where creative ideas turn into
                reality. Experience the enthusiasm, passion, and dedication that
                drive us to create outstanding digital solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex-col justify-center items-start gap-8 inline-flex md:flex-row">
          <div className="self-stretch w-full h-auto flex-col justify-start items-start gap-1 flex">
            <div className="text-center text-zinc-800 text-base font-normal font-['Proxima Nova'] leading-normal">
              Korea Office
            </div>
            <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Proxima Nova'] leading-relaxed">
              17F, O2 Tower, 83 Uisadang-daero, Yeongdeungpo-gu, Seoul, South
              Korea (07325)
            </div>
          </div>
          <div className="self-stretch w-full h-auto flex-col justify-start items-start gap-1 flex">
            <div className="text-center text-zinc-800 text-base font-normal font-['Proxima Nova'] leading-normal">
              Singapore Office
            </div>
            <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Proxima Nova'] leading-relaxed">
              Cakeplabs 5F, 9 Straits View, Marina One West Tower #05-07
              Singapore
            </div>
          </div>
          <div className="self-stretch w-full h-auto flex-col justify-start items-start gap-1 flex">
            <div className="text-center text-zinc-800 text-base font-normal font-['Proxima Nova'] leading-normal">
              Bali Office
            </div>
            <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Proxima Nova'] leading-relaxed">
              Veteran Street, Jempinis No.17, Buduk, Mengwi, Bali, Indonesia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
