import Image from 'next/image'
import React from 'react'
import { styles } from '../ui/styles'

export default function Phone() {
    const handleClick = () => {
        console.log("Button clicked!");
    }
  return (
    <div className={`${styles.boxColor} w-[342px] h-[700px] flex flex-col items-center justify-center gap-4`}>
        <h1 className='font-bold text-[28px] uppercase'>
            Cooking...
        </h1>
        <div className='relative flex items-center justify-center'>
            <Image src="/iPhone 16.png" width={500} height={500} alt="phone" className='pointer-events-auto'/>
            <button className='absolute bg-black text-white' onClick={handleClick}> hello</button>
        </div>
    </div>
  )
}
