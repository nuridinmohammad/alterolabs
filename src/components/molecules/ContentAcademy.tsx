import React from "react";
import { HeadingAcademy } from "./HeadingAcademy";

export function ContentAcademy() {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-start gap-4">
      <HeadingAcademy/>
      <p className="w-full h-auto text-zinc-600 text-base font-normal font-proxima leading-normal">Join a team of young programmers and discover the power of AI and automation. Work on real-world projects and elevate your skills effortlessly while AI tools simplify your learning journey.</p>
    </div>
  );
}
