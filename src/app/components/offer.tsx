import React from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image';
interface data{
    image:StaticImageData;
}
const Offer = ({image}:data) => {
  return (
    <div className='shadow-md shadow-gray-200 p-2 w-[230px] h-[280px] place-items-center text-center justify-center flex flex-col'>
        <Image src={image} alt='image' />
        <h2 className='text-[#151875] font-semibold text-lg'>
            24/7 Support
        </h2>
        <p className='text-gray-300 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eum porro cum voluptas dolor! Vero.</p>
    </div>
  )
}

export default Offer