import React from 'react'
import  Image  from 'next/image'
import { StaticImageData } from 'next/image'
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { SlMagnifierAdd } from "react-icons/sl";

interface data {
  imageSource : StaticImageData,
}
const Featured = ({imageSource}:data) => {
  return (
    <div className='w-[240px] flex flex-col justify-center shadow-gray-500 shadow-md'>
    <div className='p-2 bg-[#f6f7fb] flex flex-col justify-center w-[240px] h-[236px]'>
      <div className='flex flex-row mt-4 gap-1 text-[#41abf6]'>
      <FiShoppingCart className='hover:text-[#4735cb] hover:bg-[#eeeffb] rounded-full text-lg p-1'/>
      <CiHeart className='hover:text-[#4735cb] hover:bg-[#eeeffb] rounded-full text-lg p-1'/>
      <SlMagnifierAdd className='hover:text-[#4735cb] hover:bg-[#eeeffb] rounded-full text-lg p-1'/>
      </div>
      <div id='visible' className='place-items-center'>
      <Image src ={imageSource} id='product' alt="image"/>
 <div>
 <button id='btn' type="button" className='bg-green-400 text-white text-sm font-semibold rounded-[4px] p-2 mb-6'>View Details </button>
 </div>
      </div>
    </div>
    <div id='content' className='bg-white place-items-center p-2'>
      <h2 className='font-semibold text-xl text-[#fb2e86]'>Cantilever chair</h2>
      {/* colors */}
      <div className='flex flex-row gap-3'>
      <div className='w-6 h-[3px] rounded-[4px] bg-[#05e6b7]'></div>
      <div className='w-6 h-[3px] rounded-[4px] bg-[#f701a8]'></div>
      <div id='color' className='w-6 h-[3px] rounded-[4px] bg-[#00009d]'></div>
      </div>
      {/* colors */}
      <h2 className='text-[#151875] font-semibold text-sm'>Code - Y523201</h2>
      <h2 className='text-[#151875] font-semibold text-sm'>$42.00</h2>
    </div>
    </div>
  )
}

export default Featured