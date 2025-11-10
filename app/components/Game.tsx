import React from 'react'
import { styles } from '../ui/styles'
import Image from 'next/image'

export default function Game() {
  return (
    <div className={` w-[700px]`}>
        <Image src={"/Game.png"} alt='game image temp' width={1600} height={900} className='h-full w-full' />
    </div>
  )
}
