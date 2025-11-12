"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathName = usePathname();

  const navLists = [
    { name: "Casa", link: "/" },
    { name: "Memoir", link: "/memoir" },
    { name: "Pen", link: "/pen" },
    { name: "Crafts", link: "/crafts" },
    { name: "Reach", link: "/reach" },
  ];

  const handleClick = (link: string) => {
    // Handle navigation logic here
    console.log(`Clicked ${link}`);
  };

  return (
    <div className="bg-[#F7F7F9] select-none w-fit p-2 flex gap-3 rounded-full border-[0.5px] border-gray-200 shadow-2xl text-gray-300 ">
      {navLists.map((navList, index) => (
        <Link
          onClick={() => handleClick(navList.name)}
          href={navList.link}
          key={index}
          className={`${
            pathName === navList.link
              ? "bg-white text-black rounded-full hover:text-black"
              : ""
          } hover:text-amber-500 px-6 py-1`}
        >
          {navList.name}
        </Link>
      ))}
    </div>
  );
}
