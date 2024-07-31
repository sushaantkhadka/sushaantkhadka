"use client";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ThemeToggle from "@/components/themetoggle/ThemeToggle";
import MatrixEffect from "@/components/backgrounds/MatrixEffect";
import LightMode from "@/components/portfolio/LightMode";
import DarkMode from "@/components/portfolio/DarkMode";
import LandingNav from "@/components/nav/LandingNav";
import darkModeAudio from "../../public/audio/rock.mp3";
import lightModeAudio from "../../public/audio/soft.mp3";
import Footer from "@/components/footer/Footer";
import FloatingLetter from "@/components/backgrounds/FloatingLetter";

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
      lightModeMusic.current.pause();
      darkModeMusic.current.play();
    } else {
      darkModeMusic.current.pause();
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
        {isDarkMode? <MatrixEffect /> : <FloatingLetter />}
        <LandingNav theme={isDarkMode} />
        <div className="m-4 flex flex-col justify-center items-center" id="top">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
          <ProfileCard theme={isDarkMode} />
          {isDarkMode ? <DarkMode /> : <LightMode theme={isDarkMode} />}
        </div>
      </div>
      <Footer theme={isDarkMode} />
    </>
  );
}
