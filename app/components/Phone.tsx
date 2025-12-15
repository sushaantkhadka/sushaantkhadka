'ues client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { styles } from '../ui/styles'

export default function Phone() {

    const [dots, setDots] = useState(0);
  const maxDots = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % (maxDots + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);
    const handleClick = () => {
        console.log("Button clicked!");
    }


  return (
    <div className={`${styles.boxColor} w-[342px] h-[700px] flex flex-col items-center justify-center gap-4`}>
        <h1 className='font-bold text-[28px] uppercase'>
            Cooking{".".repeat(dots)}
        </h1>
        <div className='relative flex items-center justify-center'>
            <Image src="/iPhone 16.png" width={500} height={500} alt="phone" className='pointer-events-auto'/>
            <button className='absolute bg-black text-white' onClick={handleClick}> hello</button>
        </div>
    </div>
  )
}
