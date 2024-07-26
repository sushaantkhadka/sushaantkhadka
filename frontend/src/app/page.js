"use client";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ThemeToggle from "@/components/themetoggle/ThemeToggle";
import MatrixEffect from "@/components/backgrounds/MatrixEffect";
import LightMode from "@/components/portfolio/LightMode";
import DarkMode from "@/components/portfolio/DarkMode";
import LandingNav from "@/components/nav/LandingNav";
import darkModeAudio from "@/assets/audio/rock.mp3";
import lightModeAudio from "@/assets/audio/soft.mp3";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mouseState, setMouseState] = useState(false);
  const darkModeMusic = useRef(null);
  const lightModeMusic = useRef(null);

  useEffect(() => {
    darkModeMusic.current = new Audio(darkModeAudio);
    lightModeMusic.current = new Audio(lightModeAudio);
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      darkModeMusic.current.play();
    } else {
      lightModeMusic.current.play();
    }
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  const mouseEffect = async () => {
    setMouseState(true);
    await delay(150);
    setMouseState(false);
  };

  return (
    <>
      <div
        className={`${!mouseState ? "cursor-grab" : "cursor-grabbing"}`}
        onClick={mouseEffect}
      >
        {isDarkMode && <MatrixEffect />}
        <LandingNav theme={isDarkMode} />
        <div className="m-4 flex flex-col justify-center items-center">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
          <ProfileCard theme={isDarkMode} />
          {isDarkMode ? <DarkMode /> : <LightMode theme={isDarkMode} />}
        </div>
      </div>
    </>
  );
}
