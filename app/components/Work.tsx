import React from "react";
import { styles } from "../ui/styles";
import Image from "next/image";

export default function Work({ children }: { children?: React.ReactNode }) {
  return (
    <div className={`${styles.boxColor} w-[524px] flex flex-col gap-4`}>
      <h1 className="font-bold text-[40px] uppercase">
        They say <span className="text-blue-500">creating</span> is an{" "}
        <span className="text-blue-500">addiction —</span> the{" "}
        <span className="text-blue-500">beautiful kind</span> that{" "}
        <span className="text-blue-500">ruins you</span> for anything{" "}
        <span className="text-blue-500">ordinary.</span>
      </h1>

      <div className="relative flex justify-center items-center  overflow-hidden">
        <Image src={"/iPad mini.png"} alt="ipad mini" width={1080} height={753} className="w-[410px] h-[286px] select-none" />
        <div className="absolute w-[366px] h-60 rounded-md overflow-auto scrollbar-hide">
            {children ?? <MiniScreen />}
        </div>
        
      </div>
      
    </div>
  );
}

function MiniScreen() {
    return(
        <div className="p-2 bg-amber-400">
      <div className="space-y-6 text-gray-800">
        <div className="mt-4 space-y-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <article key={i} className="p-4 bg-gray-50 rounded-md border">
              <h5 className="font-semibold">Item {i + 1}</h5>
              <p className="text-sm text-gray-600 mt-1">
                Short description for this item so you can see the scroll
                behavior.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
    )
}
