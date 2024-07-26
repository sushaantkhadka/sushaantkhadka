"use client";
import React, { useState } from "react";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import MatrixEffect from "@/components/backgrounds/MatrixEffect";
import LightMode from "@/components/portfolio/LightMode";
import Loop from "@/components/Loop";
// import darkModeAudio from "@/assets/audio/rock.mp3"
// import lightModeAudio from "@/assets/audio/soft.mp3"

export default function page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mouseState,setMouseState] = useState(false);
  // let darkModeMusic = new Audio(darkModeAudio);
  // let lightModeMusic = new Audio(lightModeAudio);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      // darkModeMusic.play();
      // console.log('Checkbox is checked');
    } else {
      // lightModeMusic.play();
      console.log("Checkbox is unchecked");
    }
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };


  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

  const mouseEffect= async () => {
    setMouseState(true)
    await delay(150);
    setMouseState(false)


  }

  return (
    <>
      <div className={`${!mouseState? "cursor-grab" : "cursor-grabbing"}`} onClick={mouseEffect}>
        {isDarkMode && <MatrixEffect />}
        <div className="m-4 flex flex-col justify-center items-center">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
          <ProfileCard theme={isDarkMode} />
          <Loop />
          <LightMode theme={isDarkMode} />
        </div>
      </div>
    </>
  );
}
