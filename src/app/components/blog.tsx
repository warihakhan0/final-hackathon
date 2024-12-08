import React from 'react'
import { StaticImageData } from 'next/image'
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import Image  from 'next/image'
interface details{
    image : StaticImageData
}
const Blog = ({image}:details) => {
  return (
    <div className='h-[430px] w-[300px] bg-white shadow-md shadow-gray-200 rounded-[3px]'>
        <div>
            <Image src={image} className='rounded-[3px] w-[300px]' alt='blog'/>
        </div>
        <div className='flex flex-row gap-5 mt-5 p-2'>
       <p className='text-[#1a0b5b] flex flex-row gap-2 text-sm font-semibold'> <FaPenNib className='text-xl text-pink-500'/> Saber Ali</p>
       <p className='text-[#1a0b5b] flex flex-row gap-2 text-sm font-semibold'> <FaRegCalendarAlt className='text-xl text-yellow-400'/> 21 August, 2020</p>
        </div>
        <div className='p-2'>
            <h1 className='text-[#1a0b5b] font-bold font-serif hover:text-pink-600'>Top esssential Trends in 2021</h1>
            <p className='text-sm text-gray-400'>More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <p className='text-[#1a0b5b] font-light underline'>Read More</p>
        </div>
    </div>
  )
}

export default Blog