"use client";

import { Heart, LayoutDashboard, Map, Smile } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const selectedMenuStyle =
    "py-1.5 px-4 bg-white text-black rounded-full shadow-lg transition-all duration-300 ease-in-out";

  const images = [
    { src: "/img/1.jpg", alt: "Photos", tag: "smile" },
    { src: "/img/2.jpg", alt: "Photos", tag: "smile" },
    { src: "/img/3.jpg", alt: "Photos", tag: "map" },
    { src: "/img/4.jpg", alt: "Photos", tag: "smile" },
    { src: "/img/5.jpg", alt: "Photos", tag: "map" },
    { src: "/img/6.jpg", alt: "Photos", tag: "heart" },
    { src: "/img/7.jpg", alt: "Photos", tag: "home" },
    { src: "/img/8.jpg", alt: "Photos", tag: "home" },
    { src: "/img/9.jpg", alt: "Photos", tag: "map" },
    { src: "/img/10.jpg", alt: "Photos", tag: "heart" },
    { src: "/img/11.jpg", alt: "Photos", tag: "heart" },
    { src: "/img/12.jpg", alt: "Photos", tag: "home" },
  ];

  const [selectedTag, setSelectedTag] = useState("home");
  const [index, setIndex] = useState(0);

  const filteredImages = images.filter((img) => img.tag === selectedTag);
  const selectedImage = filteredImages[index % filteredImages.length];

  // Automatic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % filteredImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [filteredImages.length]);

  // Manual click to next image
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % filteredImages.length);
  };

  return (
    <div
      className="relative w-[524px] h-[350px] overflow-hidden rounded-3xl shadow-2xl select-none cursor-pointer"
      onClick={handleClick}
    >
      {/* Top-right controls */}
      <div className="absolute z-10 top-0 left-0 px-9 py-8 w-full h-full flex flex-col justify-between items-end pointer-events-none">
        <Image
          src="/Photos.png"
          alt="Photos icon"
          width={1080}
          height={1080}
          className="w-14 h-14 rounded-lg opacity-80 transition-opacity duration-500 ease-in-out pointer-events-auto"
        />

        <div className="px-2 pr-3 py-1 gap-3 flex justify-center items-center rounded-full glass-card h-fit fill-current text-white pointer-events-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
          <button
            className={`${
              selectedTag === "home" ? selectedMenuStyle : "p-1.5"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTag("home");
              setIndex(0);
            }}
          >
            <LayoutDashboard size={20} />
          </button>

          <button
            className={`${selectedTag === "map" ? selectedMenuStyle : "p-1.5"}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTag("map");
              setIndex(0);
            }}
          >
            <Map size={20} />
          </button>

          <button
            className={`${
              selectedTag === "heart" ? selectedMenuStyle : "p-1.5"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTag("heart");
              setIndex(0);
            }}
          >
            <Heart size={20} />
          </button>

          <button
            className={`${
              selectedTag === "smile" ? selectedMenuStyle : "p-1.5"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTag("smile");
              setIndex(0);
            }}
          >
            <Smile size={20} />
          </button>
        </div>
      </div>

      <Image
          key={selectedImage.src}
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={1600}
          height={900}
          priority
          className="w-full h-full object-cover rounded-3xl transition-shadow duration-1000 ease-in-out"
        />
    </div>
  );
}
