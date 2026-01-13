import React from 'react'
import { styles } from '../ui/styles';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Linkedin() {
  function changeBackground() {
    console.log("Hello");
    ;
  }
  return (
    <div className={`${styles.boxColor} w-[342px] h-[342px]  `}>
      <div className="flex flex-col justify-between  h-full">
        <div className="flex flex-col gap-3.5">
          <Link href={"https://www.linkedin.com/in/khadka-sushant/"} target="_blank">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D5603AQGsFxzeDj5giQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713280810633?e=1769644800&v=beta&t=7IuqEZVnvWThoiQRZ_ek1LZkp7wJLPq8rGdykcfgv9E"
                  }
                  alt="sushant khadka"
                  className="rounded-full h-10 w-10"
                  width={150}
                  height={150}
                />
                <div>
                  <h1 className="font-bold text-lg leading-[19px]">
                    Sushant Khadka
                  </h1>
                  <p className="text-gray-300 text-md font-medium leading-[17px]">
                    @khadka-sushant
                  </p>
                </div>
              </div>
              <Image
                src={"/linkedin.png"}
                alt="x logo"
                className="w-11 h-11 rounded-lg"
                width={150}
                height={150}
              />
            </div>
          </Link>

          <p className="text-[12px] px-3 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center gap-2 w-fit select-none" >
              {" "}
              <span className="bg-green-500 w-1.5 h-1.5 rounded-full" />{" "}
              Available To Work
            </p>

          <h1 className="text-2xl">
            UI UX | Web Dev |<br />
            Game Dev
          </h1>
        </div>
        <Button className="w-full bg-blue-500 text-white py-3" onMouseOver={changeBackground} asChild>
          <Link href={"https://x.com/sushaant_khadka"} target="_blank">
            Connect with me <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
