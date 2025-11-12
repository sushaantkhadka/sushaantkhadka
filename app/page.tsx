"use client";
import Connect from "./components/Connect";
import Game from "./components/Game";
import Phone from "./components/Phone";
import Photos from "./components/Photos";
import ProfileCard from "./components/ProfileCard";
import Spotify from "./components/Spotify";
import Work from "./components/Work";
import Working from "./components/Working";
import X from "./components/X";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto gap-4">
      

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
