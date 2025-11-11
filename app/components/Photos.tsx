import React from "react";
import { styles } from "../ui/styles";
import Image from "next/image";
import { Heart, LayoutDashboard, Map, Smile } from "lucide-react";

export default function () {
  return (
    <div className="relative">
      <div className="absolute px-3 py-3 flex gap-1 rounded-full glass-card h-fit">
        <LayoutDashboard />
        <Map />
        <Heart />
        <Smile />
      </div>
      <Image
        src="/sky.jpg"
        alt="Photos"
        width={800}
        height={600}
        className={`w-[524px] h-[350px] rounded-4xl`}
      />
    </div>
  );
}
