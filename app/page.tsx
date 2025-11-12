"use client";
import ProfileCard from "./components/ProfileCard";
import Working from "./components/Working";
import Game from "./components/Game";
import X from "./components/X";
import Spotify from "./components/Spotify";
import Photos from "./components/Photos";
import Work from "./components/Work";
import Test from "./components/Test";
import Phone from "./components/Phone";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 mx-auto gap-4">
      {/* section 1 */}
      <div className="flex gap-4">
        {/* left section  */}
        <div className="flex flex-col gap-4">
          <ProfileCard />
          <Working />
        </div>
        {/* right section  */}
        <Game />
      </div>

      {/* section 2 */}
      <div className="flex gap-4">
        {/* left section  */}
        <div className="flex flex-col gap-4">
          <Photos />
          <Work />
        </div>

        {/* right section  */}
        <div className="flex flex-col gap-4">
          {/* right top section  */}
          <div className="flex gap-4">
            <Phone />
            <div className="flex flex-col gap-4">
              <Spotify />
              <X />
            </div>
          </div>

          {/* right bottom section  */}
          <Connect />
        </div>
      </div>

      {/* text  */}
      {/* <Test /> */}
    </div>
  );
}
