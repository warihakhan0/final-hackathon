import React from "react";
import Button from "../components/button";
import boy from "../(public)/Group 124.png"
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <div className="bg-[#d5d2ff] p-10 py-20">
        <h1 className="text-[#151875] font-bold text-2xl">Contact Us</h1>
        <div className="flex flex-row font-semibold text-sm">
          <p className="text-[#151875]">Home.Page.</p>
          <p className="text-pink-600">Contact Us</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-5 mt-20 p-10">
        <div className="w-2/4">
          <h2 className="font-bold text-[#151875] text-2xl mb-5">
            Information About us
          </h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex flex-row gap-5 mt-5">
            <div className="w-5 h-5 rounded-full bg-blue-800"></div>
            <div className="w-5 h-5 rounded-full bg-pink-600"></div>
            <div className="w-5 h-5 rounded-full bg-cyan-400"></div>
          </div>
        </div>
        <div className="flex flex-col text-left place-items-start">
          <h2 className="font-bold text-[#151875] text-2xl mb-5">
            Contact Way
          </h2>
          <div className="flex flex-row justify-center gap-10">
            <div className="flex flex-row gap-5">
              <div className="w-6 h-6 rounded-full bg-purple-700"></div>
              <div>
                <p className="text-sm text-gray-500">Tel: 877-67-88-99</p>
                <p className="text-sm text-gray-500">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-5">
                <div className="w-6 h-6 rounded-full bg-pink-600"></div>
                <div>
                  <p className="text-sm text-gray-500">Support Forum</p>
                  <p className="text-sm text-gray-500">For over 24hr</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <div className="flex flex-row gap-5">
              <div className="w-6 h-6 rounded-full bg-orange-400"></div>
              <div>
                <p className="text-sm text-gray-500">20 Margaret st, London</p>
                <p className="text-sm text-gray-500">Great britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm text-gray-500">Free standard shipping</p>
                <p className="text-sm text-gray-500">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-items-center lg:flex-row flex-col-reverse mx-10">
      <div className="m-10 p-10 lg:w-2/4">
        <h1 className="text-[#151875] font-bold text-2xl mb-5">Get In Touch</h1>
        <p className="text-[10px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        <div className="flex flex-col w-3/4 justify-between gap-10 mt-5 text-sm">
            <div className="flex lg:flex-row flex-col justify-between gap-4">
                <input type="text" name="" id="" placeholder="Your Name*" className="outline-none border-gray-400 border-[1px] text-[14px] px-2"/>
                <input type="email" name="" id="" placeholder="Your Email" className="outline-none border-gray-400 border-[1px] text-[14px] px-2"/>
            </div>
            <input type="text" name="" id="" placeholder="Subject*" className="outline-none border-gray-400 border-[1px] text-[14px] px-2"/>
            <textarea name="" rows={10} id="" placeholder="Type Your Message*" className="outline-none border-gray-400 border-[1px] text-[14px] px-2"></textarea>
            <Button btn="Send Mail"/>
        </div>
      </div>
      <Image src={boy} alt="boy" className="w-[35rem]"/>
      </div>
    </div>
  );
};

export default Contact;
