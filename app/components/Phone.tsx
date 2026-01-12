'ues client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { styles } from '../ui/styles'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Phone() {

    const [dots, setDots] = useState(0);
  const maxDots = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % (maxDots + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

    const apps = [
      {
        icon: '/behance.jpg',
        name: 'Behance',
        link: 'https://www.behance.net/sushaantkhadka'
      },
      {
        icon: '/github.png',
        name: 'GitHub',
        link: 'https://github.com/sushaantkhadka'
      },      
    ]


  return (
    <div className={`${styles.boxColor} w-[342px] h-[700px] flex flex-col items-center justify-center gap-4`}>
        <h1 className='font-bold text-[28px] uppercase'>
            Cooking{".".repeat(dots)}
        </h1>

        <div className='relative flex items-center justify-center'>

          <div className='absolute z-20 w-[250px] h-[520px] px-4 pt-10 pb-4 flex flex-col justify-between '>

            <div className='grid grid-cols-4 grid-rows-5 gap-3 overflow-y-auto'>
              {apps.map((app, index) => (
                <Link key={index} href={app.link} target='_blank' className='flex flex-col items-center w-fit'>
              <Image src={app.icon} width={80} height={80} alt='behance' className='rounded-xl w-11 shadow-md'/>
              <p className='text-[10px] text-shadow-md font-medium text-white'>{app.name}</p>
              </Link>
              ))}
            </div>

            <div className='grid grid-cols-4 grid-rows-1 h-auto overflow-hidden '>
              {apps.map((app, index) => (
                <Link key={index} href={app.link} target='_blank' className='flex flex-col items-center w-fit'>
              <Image src={app.icon} width={80} height={80} alt='behance' className='rounded-xl w-11 shadow-md'/>
              <p className='text-[10px] text-shadow-md font-medium text-white'>{app.name}</p>
              </Link>
              ))}
            </div>
          </div>

            <Image src="/iPhone 16.png" width={500} height={500} alt="phone" className='pointer-events-auto z-10'/>
            <Image src="/Wallpaper.jpg" width={500} height={500} alt="wallpaper" className='absolute w-[250px] rounded-4xl pointer-events-none'/>
        </div>
    </div>
  )
}
