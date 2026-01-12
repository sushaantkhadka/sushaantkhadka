import React from 'react'
import { styles } from '../ui/styles'

export default function Spotify() {
  return (
    <div className={`${styles.boxColor} w-[342px] h-[342px]  `}>
      <div className="relative min-w-[250px] min-h-[120px] rounded-lg bg-[#191414] p-3 flex flex-col gap-2 shadow-[0_10px_40px_-25px_rgba(100,100,100,0.5)]">
  
  {/* Top */}
  <div className="flex items-center gap-2 mb-2">
    <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center">
      🎵
    </div>

    <div className="flex flex-col">
      <span className="text-white text-xl font-black">Song Title</span>
      <span className="text-white text-xs opacity-80">Artist Name</span>
    </div>
  </div>

  {/* Time */}
  <div className="flex items-center gap-2 w-full">
    <span className="text-white text-xs bg-black/40 px-2 py-1 rounded-md">
      1:23
    </span>

    <div className="relative w-full h-1 bg-[#5e5e5e] rounded">
      <div className="absolute left-0 top-0 h-full w-[42%] bg-[#1db954] rounded" />
    </div>

    <span className="text-white text-xs bg-black/40 px-2 py-1 rounded-md">
      3:45
    </span>
  </div>

  {/* Controls */}
  <div className="flex justify-evenly items-center text-white mt-2">
    <button className="hover:text-[#1db954] transition">⏮</button>
    <button className="hover:text-[#1db954] transition">▶</button>
    <button className="hover:text-[#1db954] transition">⏭</button>

    {/* Volume */}
    <div className="group relative">
      <button className="hover:text-[#1db954] transition">🔊</button>

      <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition">
        <div className="relative w-20 h-1 bg-[#5e5e5e] rounded">
          <div className="h-full w-4/5 bg-[#1db954] rounded" />
          <div className="absolute right-[20%] top-1/2 -translate-y-1/2 h-2 w-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
