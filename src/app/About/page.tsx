import React from 'react'
import Image from 'next/image'
import team from "../(public)/Rectangle 56.png"
import Offer from '../components/offer'
import Button from '../components/button'
import delivery from "../(public)/free-delivery 1.png";
import cashback from "../(public)/cashback 1.png";
import support from "../(public)/premium-quality 1.png";
import call from "../(public)/Group.png";
import client from "../(public)/Group 200.png"
const About = () => {
  return (
    <div>
        <div className='bg-[#d5d2ff] p-10 py-20'>
            <h1 className='text-[#151875] font-bold text-2xl'>About Us</h1>
            <div className='flex flex-row font-semibold text-sm'><p className='text[#151875]'>Home.Page.</p><p className='text-pink-600'>About Us</p></div>
        </div>
        <div className='place-items-center'>
        <div className='m-16 flex md:flex-row flex-col gap-4 space-x-9 w-3/4 place-items-center justify-center'>
            <Image src={team} alt='team' className='w-[15rem] shadow-md shadow-blue-700'/>
            <div>
                <h1 className='text-[#151875] text-lg font-bold'>
                Know About Our Ecomerce <br />
                Business, History 
                </h1>
                <p className='text-gray-400 w-3/4 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
               <div className='mt-10'>
               <Button btn="Contact Us" />
               </div>
        </div>
            </div>
        </div>
<div className='place-items-center'>
    <div>
        <h2 className='font-bold text-lg font-serif'>Our Features</h2>
    </div>
    <div className="flex lg:flex-row flex-wrap place-items-center justify-center gap-5 mb-10 mt-5">
          <Offer image={delivery} />
          <Offer image={cashback} />
          <Offer image={support} />
          <Offer image={call} />
</div>
        </div>
        <div className='bg-[#dddced] place-items-center text-center justify-center p-10 mb-20'>
            <h2 className='text-3xl font-bold mb-7'>Our Client Say!</h2>
            <Image src={client} alt='client' />
            <h3 className='mt-4 font-semibold text-xl'>Selina Gomez</h3>
            <p className='text-sm text-gray-500'>Ceo At Webecy Digital</p>
            <p className='w-2/4 mt-5 text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            <div className='flex flex-row gap-2'>
                <div className='w-7 h-1 bg-pink-700 rounded-[3px] mt-6'></div>
                <div className='w-7 h-1 bg-pink-700 rounded-[3px] mt-6'></div>
                <div className='w-7 h-1 bg-pink-700 rounded-[3px] mt-6'></div>
            </div>
        </div>
    </div>
  )
}

export default About