import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Uiux(portfolio, index) {
  const data = portfolio.portfolio;
  const filterClass = data.categories.join(" ");

  return (
    <div
      className={`flex flex-col justify-center align-top pb-5 ${filterClass}`}
    >
      <div className="m-5 w-[320px] md:w-[750px] md:h-[250px] flex flex-col md:flex-row gap-5">
        <div className=" relative mx-auto h-auto overflow-hidden rounded-lg shadow-md">
          <Image
            src={data.image}
            alt="Akriti Portfolio"
            width={400}
            height={250}
            priority
            className="h-200px md:h-[250px] w-[400px] object-cover opacity-100 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-110"
          />
        </div>

        <div className="flex flex-col md:justify-between items-start md:h-full md:w-[320px] py-2 ">
          <div className="">
            <div className="flex">
              {data.categories.map((category, categoryIndex) => (
                <p key={categoryIndex} className="text-purple-500 text-sm">
                  {category}
                  {categoryIndex < data.categories.length - 1
                    ? ","
                    : ""}{" "}
                  &nbsp;
                </p>
              ))}
            </div>
            <h2 className="font-bold text-2xl text-gray-800">
              {data.title}
            </h2>
            <p>{data.desc}</p>
          </div>
          <Link
            href={data.link}
            target="_blank"
            className={`text-orange-500 hover:text-orange-700 flex items-center`}
          >
            {data.categories.includes("Web")
              ? "Visit Site"
              : "View Project"}{" "}
            &nbsp; <FaExternalLinkAlt />
          </Link>
        </div>
      </div>

      <hr className="w-full h-px my-8 bg-gray-200 border-none" />
    </div>
  );
}
