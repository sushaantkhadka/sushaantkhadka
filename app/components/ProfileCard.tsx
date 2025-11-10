import { Badge } from '@/components/ui/badge'
import { BookOpen, CirclePlay, Download, Figma, Globe, MapPin, Watch } from 'lucide-react'
import Image from 'next/image'
import { styles } from '../ui/styles';

export default function ProfileCard() {

    const tags = [
        {
            icon: MapPin,
            name: "Nepal",
            color: "bg-blue-500",
            text: "text-white"
        },
        {
            icon: Watch,
            name: "NPT",
            color: "bg-gray-200",
            text: "text-black"
        }, {
            icon: Globe,
            name: "Web Dev",
            color: "bg-black",
            text: "text-white"
        }, {
            icon: CirclePlay,
            name: "Game Dev",
            color: "bg-[#9E4042]",
            text: "text-white"
        }, {
            icon: Figma,
            name: "UI UX",
            color: "bg-amber-500",
            text: "text-white"
        }, {
            icon: BookOpen,
            name: "Sunway International Business School",
            color: "bg-red-500",
            text: "text-white"
        },
    ]

    return (
        <div className={`${styles.boxColor} w-[524px] flex flex-col gap-7`}>

            {/* details and download button  */}
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <Image src={"/profile.jpg"} alt='' width={150} height={150} className='w-24 h-24 rounded-lg object-cover' />
                    <div className='flex flex-col justify-between'>
                        <p className='text-[12px] px-3 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center gap-2'> <span className='bg-green-500 w-1.5 h-1.5 rounded-full' /> Available To Work</p>
                        <div>
                            <p className='font-bold text-2xl'>Sushant</p>
                            <p>i <span className={` text-blue-500`}>design</span> things</p>
                        </div>
                    </div>
                </div>
                <div className='text-gray-400 gap-1 h-fit flex items-center'>
                    <p className='text-sm'>Resume</p>
                    <div className='border w-8 h-8 flex justify-center items-center border-gray-400 rounded-lg'>
                        <Download strokeWidth={2} className='h-3 w-3' />
                    </div>
                </div>
            </div>

            {/* tags  */}
            <div className='flex flex-wrap gap-1'>
                {tags.map((tag, index) => {
                    const Icon = tag.icon;
                    return (
                        <Badge key={index} className={`${tag.color} ${tag.text} flex items-center gap-1`}>
                            <Icon /> {/* 👈 render the icon */}
                            <p>{tag.name}</p>
                        </Badge>
                    );
                })}
            </div>
        </div>
    );
}