import Image from 'next/image'

export default function Game() {
  return (
    <div className={`w-[700px] rounded-4xl overflow-hidden`}>
        <iframe src='/game/index.html' allowFullScreen className='w-full h-full'> </iframe>
    </div>
  )
}
