import React from "react";
import ProfileCard from "./components/ProfileCard";
import Working from "./components/Working";
import Game from "./components/Game";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <ProfileCard />
        <Working />
      </div>
      <Game />
    </div>
    </div>
  );
}
