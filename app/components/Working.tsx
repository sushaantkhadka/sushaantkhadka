import React from "react";
import { styles } from "../ui/styles";

export default function Working() {
  return (
    <div className={`${styles.boxColor} w-[524px]`}>
      <h1 className="text-4xl text-gray-400 font-bold">
        <span className="text-black">Sushant</span> is working on{" "}
        <span className="underline text-blue-500">The Last Maze</span>
      </h1>
    </div>
  );
}
