import React from 'react'
import Tophead from '../components/tophead'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import ProductCard from '../components/ProductCard';
import image1 from "../(public)/Rectangle 32.png"
import image2 from "../(public)/Rectangle 32 (5).png"
import image3 from "../(public)/Rectangle 32 (1).png"
import image4 from "../(public)/Rectangle 32 (2).png"
import image5 from "../(public)/Rectangle 32 (3).png"
import image6 from "../(public)/Rectangle 32 (4).png"
import image8 from "../(public)/Rectangle 32 (6).png"




const Pages = () => {
  return (
    <div>
                <Tophead page='Shop List' route='Shop List' />
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
        <div className='mb-10 gap-5 flex flex-col'>
            <ProductCard image={image1} description='Accumsan tincidunt'/>
            <ProductCard image={image2} description='In nulla'/>            <ProductCard image={image3} description='Vel sem'/> 
            <ProductCard image={image4} description='Porttitor cum'/>
            <ProductCard image={image5} description='Nunc in'/>
            <ProductCard image={image6} description='Vitae facilisis'/>
            <ProductCard image={image8} description='Curabitur lectus'/>
        </div>
    </div>
  )
}

export default Pages