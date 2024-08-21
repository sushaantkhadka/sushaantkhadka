import Image from "next/image";
import React from "react";

export default function DarkMode() {
  return (
    <div className="mb-20">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white font-bold">Github Contributions</h1>
        
        <img src="https://raw.githubusercontent.com/sushaantkhadka/sushaantkhadka/output/snake.svg" />

        <a href="https://github.com/sushaantkhadka" target="_blank">
          <button className="mt-2 rounded-full px-4 resume-dark border-green-500 border-2 text-sm text-green-500">
            VISIT MY GITHUB
          </button>
        </a>
      </div>
    </div>
  );
}
