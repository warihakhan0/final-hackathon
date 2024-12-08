import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { SlMagnifierAdd } from "react-icons/sl";

interface data {
  imageSource: StaticImageData;
}
const Latest = ({ imageSource }: data) => {
  return (
    <div className="w-[300px] h-[306px] flex flex-col justify-center">
      <div id="box" className="p-2 bg-[#F7F7F7] flex flex-row justify-center w-[300px] h-[269px] place-items-end gap-10">
        <div id="icons" className="flex flex-col gap-1 text-[#151875]">
          <FiShoppingCart className=" hover:bg-[#eeeffb] rounded-full text-2xl p-1" />
          <CiHeart className=" hover:bg-[#eeeffb] rounded-full text-2xl p-1" />
          <SlMagnifierAdd className="hover:bg-[#eeeffb] rounded-full text-2xl p-1" />
        </div>
        <div className="place-items-center">
          <Image src={imageSource} id="product" alt="image" />
          <div></div>
        </div>
      </div>
      <div
        className="bg-white place-items-center p-2 flex flex-row justify-between"
      >
        <h2 className="font-semibold text-sm underline text-[#151875]">
          Comfort Handy Craft
        </h2>
        <div className="flex-row flex gap-5">
          <h2 className="text-[#151875] font-semibold text-sm">$4200</h2>
          <h2 className="textred font-semibold text-sm text-red-600">
            <del>$65.00</del>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Latest;
