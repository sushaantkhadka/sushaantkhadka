import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer({theme}) {
  return (
    <footer className={`flex my-10 justify-center ${theme? "text-white" : "text-black"}`}>
        <div className='flex flex-col sm:flex-row md:w-[720px] lg:w-[1080px] justify-between'>
            <Link href={"#top"} className='flex gap-1 items-center'>
            <Image 
                    src={"/image/Logo/logo2.png"}
                    width={100}
                    height={100}
                    className='w-[20px] h-[20px]'
                    priority
                />
                <h1 className='text-xl font-semibold'>Sushant Khadka</h1>
            </Link>

            <div className='flex gap-5 font-semibold'>
                <Link href={"#"} className={`flex items-center ${theme? "hover:text-green-500" : "hover:text-orange-500"} transition-all duration-300 ease-in-out hover:scale-110`}>Github <MdOutlineArrowOutward /></Link>
                <Link href={"#"} className={`flex items-center ${theme? "hover:text-green-500" : "hover:text-orange-500"} transition-all duration-300 ease-in-out hover:scale-110`}>Linkedin <MdOutlineArrowOutward /></Link>
                <Link href={"#"} className={`flex items-center ${theme? "hover:text-green-500" : "hover:text-orange-500"} transition-all duration-300 ease-in-out hover:scale-110`}>behance <MdOutlineArrowOutward /></Link>
            </div>
        </div>
    </footer>
  )
}
