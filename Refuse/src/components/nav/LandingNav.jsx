import Link from "next/link";
import React from "react";
import { GoMute, GoUnmute } from "react-icons/go";;

const LandingNav = ({ theme, musicState, pause }) => {
  const navList = [
    {
      menu: "History",
      link: "",
    },
    {
      menu: "Writing",
      link: "/blog",
    },
    {
      menu: "Shooting",
      link: "#",
    },
  ];

  return (
    <>
      <div onClick={pause} className={`cursor-pointer absolute mx-5  ${theme? "text-white" : "text-gray-500"}`}>
        {musicState? <GoUnmute /> : <GoMute /> }
      </div>
      <div className="hidden absolute right-0 md:flex justify-end align-top gap-10 mt-[2px] mr-10">
        {navList.map((nav, index) => (
          <Link key={index} href={nav.link}>
            <p
              className={`${theme
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
