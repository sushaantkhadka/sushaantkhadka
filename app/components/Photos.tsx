import React from "react";
import { styles } from "../ui/styles";
import Image from "next/image";
import { Heart, LayoutDashboard, Map, Smile } from "lucide-react";

export default function () {
  return (
    <div className="relative">
      <div className="absolute px-9 py-8 w-full h-full flex flex-col  justify-between items-end" >
        <Image
          src="/Photos.png"
          alt="Photos icon" width={1080} height={1080} className="w-14 h-14 rounded-lg" />
        <div className=" px-3 py-3 gap-3 flex rounded-full glass-card h-fit fill-current text-[#49454F]">
        <span className="py-1.5 px-4 bg-white rounded-full"> <LayoutDashboard /></span>
        <Map />
        <Heart />
        <Smile />
      </div>
      </div>
      <Image
        src="/sky.jpg"
        alt="Photos"
        width={1600}
        height={900}
        className={`w-[524px] h-[350px] rounded-4xl`}
      />
    </div>
  );
}
