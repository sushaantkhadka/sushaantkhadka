"use client";
import React, { useState } from "react";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import MatrixEffect from "@/components/backgrounds/MatrixEffect";
// import darkModeAudio from "@/assets/audio/rock.mp3"
// import lightModeAudio from "@/assets/audio/soft.mp3"


export default function page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const darkModeMusic = new Audio(darkModeAudio);
  // const lightModeMusic = new Audio(lightModeAudio);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
    //   darkModeMusic.play();
    //   // console.log('Checkbox is checked');
    // } else {
    //   lightModeMusic.play();
    //   console.log('Checkbox is unchecked');
    }
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <>
      {isDarkMode && <MatrixEffect />}
      <div className="m-4 flex flex-col justify-center items-center">
        <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
        <ProfileCard theme={isDarkMode} />
      </div>
    </>
  );
}
