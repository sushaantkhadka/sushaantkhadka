import React from "react";
import Link from "next/link";

export default function Uiux(portfolio, index) {
  const data = portfolio;
  const filterClass = data.portfolio.catagories.join(" ")
  // console.log(filterClass)
  return (
    <div className={`flex flex-col justify-center align-top pb-5 ${filterClass}`} key={index}>
      <div className="m-5 w-[320px] md:w-[750px] md:h-[250px] flex flex-col md:flex-row gap-5">
        <div className=" relative mx-auto h-auto overflow-hidden rounded-lg shadow-md">
        <img
          src={data.portfolio.image}
          alt="Akriti Portfolio"
          width={100}
          height={100}
          className="h-200px md:h-[250px] w-[400px] object-cover opacity-100 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-110"
        />
        </div>

        <div className="flex flex-col md:justify-between items-start md:h-full md:w-[320px] py-2 ">
          <div>
            <div className="flex">{data.portfolio.catagories.map((catagory) => (<p className="text-purple-500 text-sm">{catagory}, &nbsp;</p>))}</div>
            <h2 className="font-bold text-2xl text-gray-800">{data.portfolio.title}</h2>
            <p>
              {data.portfolio.desc}
            </p>
          </div>
          <Link href={data.portfolio.link} className="text-orange-500 hover:text-orange-700">
            View Project
          </Link>
        </div>
      </div>
      
      <hr class="w-full h-px my-8 bg-gray-200 border-none"></hr>
    </div>
  );
}
