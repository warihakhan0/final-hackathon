import React from 'react'
import Tophead from '../components/tophead'
import { IoGrid } from "react-icons/io5";
import ProductCard from '../components/ProductCard';
import { FaList } from "react-icons/fa";
import pr1 from "../(public)/pr1.png"
import pr2 from "../(public)/pr2.png"
import pr3 from "../(public)/pr3.png"
import pr4 from "../(public)/pr4.png"
import pr5 from "../(public)/pr5.png"
import pr6 from "../(public)/pr6.png"
import pr7 from "../(public)/pr7.png"

const Shop = () => {
  return (
    <div>
        <div>
            <Tophead route='Shop Left Sidebar' page='Shop Left Sidebar' />
        </div>
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
        {/* shop */}
       <div className='flex md:flex-row gap-10 mx-10 flex-col-reverse mb-10'>
        <div>
            <div>
                <h3 className='font-bold text-lg text-[#151875] underline'>Product Brand</h3>
                <p className='text-gray-500 underline text-[14px] font-medium'>Coaster Furniture</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Fusion Dot High Fashion</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Unique Furnitture Restor</p> 
                <p className='text-gray-500 underline text-[14px] font-medium'>Dream Furnitture Flipping</p>
                 <p className='text-gray-500 underline text-[14px] font-medium'>Young Repurposed</p> 
                 <p className='text-gray-500 underline text-[14px] font-medium'>Green DIY furniture</p>
            </div>
            <div>
                <h3 className='font-bold text-lg text-[#151875] underline'>Discount Offer</h3>
                <p className='text-gray-500 underline text-[14px] font-medium'>20% Cashback</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>5% Cashback Offer</p> <p className='text-gray-500 underline text-[14px] font-medium'>25% Discount Offer</p>
            </div>
            <div>
                <h3 className='font-bold text-lg text-[#151875] underline'></h3>
                <p className='text-gray-500 underline text-[14px] font-medium'></p>
            </div>
            <div>
                <h3 className='font-bold text-lg text-[#151875] underline'>Categories</h3>
                <p className='text-gray-500 underline text-[14px] font-medium'>Prestashop</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Magento</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Bigcommerce</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>osCommerce</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>3dcart</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Bags</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Accessories</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Jewellery</p>
                <p className='text-gray-500 underline text-[14px] font-medium'>Watches</p>
            </div>
        </div>
       <div className='flex flex-col gap-5'>
            <ProductCard image={pr1}
            description='Dictum morbi'/>
            <ProductCard image={pr2}
            description='Sodales sit'/>
             <ProductCard image={pr3}
            description='Nibh varius'/>
             <ProductCard image={pr4}
            description='Mauris quis'/>
             <ProductCard image={pr5}
            description='Morbi sagittis'/>
             <ProductCard image={pr6}
            description='Ultricies venenatis'/>
             <ProductCard image={pr7}
            description='Scelerisque dignissim'/>
        </div>
       </div>
        {/* shop ends */}
    </div>
  )
}

export default Shop