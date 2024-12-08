import React from 'react'
import Tophead from '../components/tophead'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Product from '../components/product';
 import image1 from "../(public)/image 9.png"
import image2 from "../(public)/image 1165.png"
import image3 from "../(public)/image 1173.png"
import image4 from "../(public)/10011 1.png"
import image5 from "../(public)/unnamed 1.png"
import image6 from "../(public)/1562173100-movado-connect-1562173094 2.png"
import image7 from "../(public)/purepng 1.png"
import image8 from "../(public)/image 1164.png"
import image9 from "../(public)/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png"
import image11 from "../(public)/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1.png"
import image10 from "../(public)/cam 2.png"


const Products = () => {
  return (
    <div>
        <Tophead page='Shop Grid Default' route='Shop Grid Default' />
        <div>
            <div className='m-10 flex flex-row justify-between place-items-center'>
             <div className=''>
             <h4 className="text-[#151875] font-bold text-xl">Ecommerce Acceories & Fashion item </h4>
             <p className='text-gray-400 text-sm'>About 9,620 results (0.62 seconds)</p>
             </div>
             <div className='flex md:flex-row flex-col m-2'>
                <p className='text-[#151875] text-sm'>Per Page: <input type="number" name="" id="" className='border-[1px] border-gray-200 w-2/4 mb-2 gap-2'/></p>
                <p className='flex md:flex-row text-[#151875] text-sm gap-2'>Sort By:<input type="text" placeholder='Best Match' name="" id="" className='border-[1px] border-gray-200 w-2/4 mb-2 '/></p>
                <p className='flex flex-row place-items-center text-[#151875] text-sm gap-2'>view: <IoGrid /><FaList /><input type="text" className='border-[1px] border-gray-200 w-2/4 mb-2 '/></p>
             </div>
            </div>
        </div>
        <div className='flex flex-col justify-between gap-10 mb-10 mx-10'>
            <div className='flex lg:flex-row flex-wrap justify-center gap-5'>
            <Product image = {image1} description='Vel elit euismod'/>
            <Product image = {image2} description='Ultricies condimentum imperdiet'/>
            <Product image = {image3} description='Vitae suspendisse sed'/>
            <Product image = {image4} description='Sed at fermentum'/>
            </div>
            <div className='flex lg:flex-row flex-wrap justify-center gap-5'>
            <Product image = {image5} description='Vel elit euismod'/>
            <Product image = {image6} description='Ultricies condimentum imperdiet'/>
            <Product image = {image7} description='Vitae suspendisse sed'/>
            <Product image = {image8} description='Sed at fermentum'/>
            </div>
            <div className='flex lg:flex-row flex-wrap justify-center gap-5'>
            <Product image = {image9} description='Vel elit euismod'/>
            <Product image = {image10} description='Ultricies condimentum imperdiet'/>
            <Product image = {image11} description='Vitae suspendisse sed'/>
            <Product image = {image4} description='Sed at fermentum'/>
            </div>
        </div>
    </div>
  )
}

export default Products