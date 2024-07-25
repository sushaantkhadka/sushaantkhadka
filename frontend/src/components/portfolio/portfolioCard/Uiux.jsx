import React from "react";
import Link from "next/link";

export default function Uiux() {
  return (
    <div className="flex justify-normal align-top h-[100vh]">
      <div className="m-5 w-[320px] md:w-[750px] md:h-[250px] flex flex-col md:flex-row gap-5 overflow-hidden">
        <div className="relative mx-auto h-auto overflow-hidden rounded-lg">
        <img
          src="/image/portfolio/akriti.png"
          alt="Akriti Portfolio"
          width={100}
          height={100}
          className="h-200px md:h-[250px] w-[400px] object-cover opacity-100 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-110"
        />
        </div>

        <div className="flex flex-col md:justify-between items-start md:h-full md:w-[320px] py-2 ">
          <div>
            <h2 className="font-bold text-2xl text-gray-800">Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem magni porro sit molestiae, aliquam sapiente. Similique,
              vel ex quaerat alias non animi dignissimos aut optio.
            </p>
          </div>
          <Link href="#" className="text-orange-500">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
