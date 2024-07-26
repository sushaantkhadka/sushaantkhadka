import Link from "next/link";
import React, { useState } from "react";

const LandingNav = ({ theme }) => {
  const navList = [
    {
      menu: "Writing",
      link: "#",
    },
    {
      menu: "Shooting",
      link: "#",
    },
  ];

  return (
    <>
      <div className="hidden absolute right-0 md:flex justify-end align-top gap-10 mt-[2px] mr-10">
        {navList.map((nav) => (
          <Link href={nav.link}>
            <p
              className={`${
                theme
                  ? "text-white hover:text-green-300"
                  : "text-gray-500 hover:text-orange-500 "
              } transition duration-300 ease-in-out cursor-pointer`}
            >
              {nav.menu}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LandingNav;
