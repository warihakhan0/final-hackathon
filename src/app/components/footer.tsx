import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=''>
        <div className='pt-14 p-20 
        grid lg:h-[30rem] md:[40rem] sm:w-auto 
        lg:grid-cols-[20rem, 10rem, 10rem, 10rem] 
        lg:grid-rows-1 
        bg-[#EEEFFB] 
        text-[#a3a7ca] 
        text-sm
        md:grid-cols-[20rem, 20rem]
        md:grid-rows-[20rem, 10rem]
        sm: gird-cols-[10rem]'>
        
            <div className='flex-col flex gap-5 mb-10'>
                <h1 className='text-2xl text-black font-bold font-serif'>Hekto</h1>
                <div className='bg-white w-72 flex flex-row justify-between p-[2px] rounded-[2px]'>
                <input type="text" placeholder='Enter Email Address' className='p-2'/>
                <button className='p-2 w-24 bg-pink-600 text-white rounded-[2px]'>Sign Up</button>
                </div>
                <p>Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className='text-[#a3a7ca] md:col-start-2  text-sm flex flex-col gap-4 mb-7'>
                <h2 className='text-black font-semibold text-lg'>Catagories</h2>
                <p>Laptops & Computers</p>
                <p>Cameras & Photography</p>
                <p>Smart Phones & Tablets</p>
                <p>Video Games & Consoles</p>
                <p>Waterproof Headphones</p>
            </div>
            <div className='text-[#a3a7ca] lg:col-start-3 gap-3 text-sm flex flex-col mb-10'>
                <h2 className='text-black font-semibold text-lg'>Customer Care</h2>
                <p>My Account</p>
                <p>Discount</p>
                <p>Returns</p>
                <p>Orders History</p>
                <p>Order Tracking</p>
            </div>
            <div className='text-[#a3a7ca] lg:col-start-4 text-sm flex flex-col gap-4'>
                <h2 className='text-black font-semibold text-lg'>Pages</h2>
                <p>Blog</p>
                <p>Browse the Shop</p>
                <p>Category</p>
                <p>Pre-Built Pages</p>
                <p>Visual Composer Elements</p>
                <p>WooCommerce Pages</p>
            </div>
        </div>
        <div className='bg-[#e7e4f8] flex flex-row justify-center p-2'>
        <div className='flex flex-row justify-between w-3/4 place-items-center text-[#b2b3c3] text-xl'>
            <p className='text-sm'>&copy;Webecy-All Rights Reserved</p>
            <div className='flex flex-row gap-2'>
            <FaFacebookF  className='bg-blue-950 text-white p-1 rounded-full'/>
            <FaInstagram  className='bg-blue-950 text-white p-1 rounded-full'/>
            <FaTwitter  className='bg-blue-950 text-white p-1 rounded-full'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer