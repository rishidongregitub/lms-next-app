import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const SideNav = () => {
    const menu =[
        {
            id:1,
            name:'All Courses',
            icon : BookOpen
        },
        {
            id:2,
            name:'Membership',
            icon : BadgeIcon
        },
        {
            id:3,
            name:'Be Instructor',
            icon : GraduationCap
        },
    ]
  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
        {/* <Image src='/logo-i.svg' alt='logo' width={170} height={80} /> */}
        <h1 className='text-gray-600 font-bold'>LOGO</h1>
        <div>
            {menu.map((item,index)=>(
                <div key={item.id} className='flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white'>
                    <item.icon />
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav; 