import React from 'react'
import  Image from 'next/image'
import { StaticImageData } from 'next/image'
interface image{
    image:StaticImageData
}
const Trending = ({image}:image) => {
  return (
    <div className='w-[220px] h-[330px] bg-white p-2 place-items-center shadow-md shadow-gray-200'>
        <Image src={image} alt='image' className='w-[230px] h-[244px] bg-[#f5f6f8] m-2 p-4'/>
        <h4 className='text-[#1a0b5b] font-semibold'>Cantilever chair</h4>
        <div className='flex flex-row gap-5'>
            <p className='text-[#1a0b5b] font-semibold text-sm'>$26.00</p>
            <p className='text-gray-300 font-semibold text-sm'><del>$42.00</del></p>
        </div>

    </div>
  )
}

export default Trending