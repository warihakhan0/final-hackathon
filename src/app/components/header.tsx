import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-[#7e33e0] text-white w-full place-items-center text-sm p-1">
      <div className="flex md:flex-row flex-col gap-3 place-items-center justify-between mx-10 w-3/4 ">
        <div className="flex flex-row gap-7">
        <div className="flex flex-row  place-items-center gap-3">
          <FaRegEnvelope />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex flex-row place-items-center gap-3">
          <MdOutlinePhoneInTalk />
          <p>(12345)67890</p>
        </div>
        </div>
     <div className="flex flex-row gap-4">
     <div className="flex flex-row place-items-center">
          <p>English</p>
          <IoIosArrowDown />
        </div>
        <div className="flex flex-row place-items-center">
          <p>USD</p>
          <IoIosArrowDown />
        </div>
        <div className="flex flex-row place-items-center">
          <Link href={"/Login"}>Login</Link>
          <AiOutlineUser />
        </div>
        <div className="flex flex-row place-items-center">
          <Link href={"/wishList"}>Wishlist</Link>
          <CiHeart />
        </div>
        <div className="flex flex-row place-items-center">
       <Link href={"/"}><FiShoppingCart /></Link> 
        </div>
     </div>
      </div>
    </div>
  );
};

export default Header;
