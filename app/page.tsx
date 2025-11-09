import React from 'react'
import { inter } from './ui/fonts'
import ProfileCard from './component/home/ProfileCard'

export default function Home() {
  return (
    <div className='flex gap-2'>
      <ProfileCard />
      <ProfileCard />

    </div>
  )
}
