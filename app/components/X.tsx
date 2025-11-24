import React from "react";
import { styles } from "../ui/styles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function X() {
  function changeBackground() {
    console.log("Hello");
    ;
  }
  return (
    <div className={`${styles.boxColor} w-[342px] h-[342px]  `}>
      <div className="flex flex-col justify-between  h-full">
        <div className="flex flex-col gap-3.5">
          <Link href={"https://x.com/sushaant_khadka"} target="_blank">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <Image
                  src={
                    "https://pbs.twimg.com/profile_images/1988602630453772288/qcv7wHuU_400x400.png"
                  }
                  alt="sushant khadka"
                  className="rounded-full h-10 w-10"
                  width={150}
                  height={150}
                />
                <div>
                  <h1 className="font-bold text-md leading-[19px]">
                    Sushant Khadka
                  </h1>
                  <p className="text-gray-300 text-sm leading-[17px]">
                    @sushaant_khadka
                  </p>
                </div>
              </div>
              <Image
                src={"/x.png"}
                alt="x logo"
                className="w-11 h-11"
                width={150}
                height={150}
              />
            </div>
          </Link>

          <h1 className="text-2xl">
            Learning, Progressing{" "}
            <Link href={"https://x.com/byte_mango"} target="_blank" className="text-blue-500">
              @byte_mango
            </Link>
          </h1>
        </div>
        <Button className="w-full bg-gray-800 text-white py-3" onMouseOver={changeBackground} asChild>
          <Link href={"https://x.com/sushaant_khadka"} target="_blank">
            Reed More Tweets <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
