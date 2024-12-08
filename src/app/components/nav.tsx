import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { Sheet,SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  return (
    <div className='place-items-center mt-2 flex flex-row justify-center'>
        <div className='flex flex-row justify-between w-3/4 place-items-center'>
        <div id="logo">
            <h1 className='text-2xl'>Hekto</h1>
        </div>
       <div className='lg:flex hidden lg:flex-row gap-4 justify-between mx-7 md:w-3/4'>
       <div className='flex flex-row gap-7 font-medium text-sm mx-4'>
            <Link href={"/"} className='hover:text-pink-600'>Home</Link>
            <Link href={"/Pages"} className='hover:text-pink-600'>Pages</Link>
            <Link href={"/products"} className='hover:text-pink-600'>Products</Link>
            <Link href={"/About"} className='hover:text-pink-600'>Blog</Link>
            <Link href={"/Shop"} className='hover:text-pink-600'>Shop</Link>
            <Link href={"/contact"} className='hover:text-pink-600'>Contact</Link>
        </div>
        <div>
            <div className='flex flex-row place-items-center mx-4'>
                <input type="text" className='border-gray-300 border-[1.5px]'/> 
                <CiSearch className='bg-pink-600 p-1 text-white text-2xl h-7'/>
            </div>
        </div>
       </div>
        </div>
        <Sheet>
            <SheetTrigger className='lg:hidden flex'><GiHamburgerMenu /></SheetTrigger>
            <SheetContent>
            <div className='flex flex-col gap-7 font-medium text-sm text-white mt-7 mb-4'>
            <Link href={"/"} className='hover:text-pink-600'>Home</Link>
            <Link href={"/Pages"} className='hover:text-pink-600'>Pages</Link>
            <Link href={"/products"} className='hover:text-pink-600'>Products</Link>
            <Link href={"/About"} className='hover:text-pink-600'>Blog</Link>
            <Link href={"/Shop"} className='hover:text-pink-600'>Shop</Link>
            <Link href={"/contact"} className='hover:text-pink-600'>Contact</Link>
        </div>
        <div>
            <div className='flex flex-row place-items-center'>
                <input type="text" className='border-gray-300 border-[1.5px] outline-none'/> 
                <CiSearch className='bg-pink-600 p-1 text-white text-2xl h-7'/>
            </div>
        </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Nav