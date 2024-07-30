import Link from "next/link";
import React from "react";

const LandingNav = ({ theme }) => {
  const navList = [
    {
      id: 1,
      menu: "Writing",
      link: "/blog",
    },
    {
      id: 2,
      menu: "Shooting",
      link: "#",
    },
  ];

  return (
    <>
      <div className="hidden absolute right-0 md:flex justify-end align-top gap-10 mt-[2px] mr-10">
        {navList.map((nav) => (
          <Link key={nav.id} href={nav.link}>
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
