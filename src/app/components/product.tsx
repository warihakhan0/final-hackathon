import React from 'react'
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'
interface product{
    image:StaticImageData,
    description:string
}
const product = ({image, description}:product) => {
  return (
    <div className='w-[260px] flex flex-col justify-center place-items-center'>
        <div className='w-[260px] h-[280px] bg-gray-200 place-items-center flex flex-col justify-center'>
            <Image src={image} alt='image'/>
        </div>
        <h4 className='font-bold text-sm text-[#151875]'>{description}</h4>
        <div className='flex flex-row justify-center gap-3'>
            <div className='h-3 w-3 rounded-full bg-yellow-600'></div>
            <div className='h-3 w-3 rounded-full bg-pink-600'></div>
            <div className='h-3 w-3 rounded-full bg-cyan-600'></div>
        </div>
        <div className='flex flex-row justify-center gap-3'>
            <p className='text-[#151875] font-semibold'>$26.00</p>
            <p className='text-pink-600 font-semibold'><del>$42.00</del></p>
        </div>
    </div>
  )
}

export default product