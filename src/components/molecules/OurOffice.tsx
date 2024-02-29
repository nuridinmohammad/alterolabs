import Image from "next/image";
import React from "react";

export function OurOffice() {
  return (
    <div className="w-full h-auto px-4 py-20 flex-col justify-start items-start gap-20 inline-flex">
      <Image
        src={"/img/office-img.webp"}
        alt="about-img"
        height={550}
        width={288}
      />
      <div className="w-full h-auto flex-col justify-start items-start gap-20 inline-flex">
        <div className="w-full h-auto flex-col justify-center items-start gap-6 inline-flex">
          <div className="self-stretch h-auto  flex-col justify-center items-start gap-2 flex">
            <h2 className="text-zinc-600 text-xl font-semibold font-proxima leading-relaxed">
              Our Office
            </h2>
            <h3 className="self-stretch text-zinc-800 text-[26px] font-bold font-parabolica leading-[33.80px]">
              Discover our office <br />
              Plan your visit
            </h3>
          </div>
          <p className="self-stretch text-zinc-600 text-base font-normal font-proxima leading-normal">
            Step into our city-based innovation hub. Our workplace is more than
            an office – {`it's`} a place where creative ideas turn into reality.
            Experience the enthusiasm, passion, and dedication that drive us to
            create outstanding digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
