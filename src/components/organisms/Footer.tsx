import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <div className="w-full h-auto px-4 pt-20 pb-10 bg-neutral-900 flex-col justify-start items-start gap-20 inline-flex">
      <div className="w-full h-auto flex-col justify-start items-center gap-20 inline-flex">
        <div className="w-full h-auto flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full h-auto flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-center text-neutral-200 text-base font-normal font-proxima leading-normal">
              Phone Number
            </p>
            <p className="text-white text-xl font-semibold font-proxima leading-relaxed">
              (+62) 813-3341-1786
            </p>
          </div>
          <div className="w-full h-auto flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-center text-neutral-200 text-base font-normal font-proxima leading-normal">
              Email
            </p>
            <p className="text-white text-xl font-semibold font-proxima leading-relaxed">
              info@cakeplabs.com
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full h-auto flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-center text-neutral-200 text-base font-normal font-proxima leading-normal">
              Korea Office
            </p>
            <p className="self-stretch text-white text-xl font-semibold font-proxima leading-relaxed">
              17F, O2 Tower, 83 Uisadang-daero, Yeongdeungpo-gu, Seoul, South
              Korea (07325)
            </p>
          </div>
          <div className="w-full h-auto flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-center text-neutral-200 text-base font-normal font-proxima leading-normal">
              Singapore Office
            </p>
            <p className="self-stretch text-white text-xl font-semibold font-proxima leading-relaxed">
              Cakeplabs 5F, 9 Straits View, Marina One West Tower #05-07
              Singapore
            </p>
          </div>
          <div className="w-full h-auto flex-col justify-start items-start gap-1 inline-flex">
            <p className="text-center text-neutral-200 text-base font-normal font-proxima leading-normal">
              Bali Office
            </p>
            <p className="self-stretch text-white text-xl font-semibold font-proxima leading-relaxed">
              Veteran Street, Jempinis No.17, Buduk, Mengwi, Bali, Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-8 border-t border-zinc-700 flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-full h-auto justify-center items-center inline-flex">
          <div className="w-full h-auto pr-[54px] justify-start items-center inline-flex">
            <Image
              src={"/logo/logo-alteroLabs.svg"}
              alt="logo alteroLbas"
              height={64}
              width={90}
            />
          </div>
          <div className="w-full h-auto justify-end items-start gap-4 inline-flex">
            <div className="w-10 h-10 p-2 rounded-[999px] border border-white justify-start items-start inline-flex">
              <Image
                src={"/icon/icon-ig.svg"}
                alt="logo alteroLbas"
                height={24}
                width={24}
              />
            </div>
            <div className="w-10 h-10 p-2 rounded-[999px] border border-white justify-start items-start inline-flex">
              <Image
                src={"/icon/icon-linkedin.svg"}
                alt="logo alteroLbas"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        <span className="w-full h-auto text-center text-zinc-400 text-base font-normal font-proxima leading-normal">
          © Alterolabs 2024 All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
