// components/ProductCard.js
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import  Image  from "next/image";
import { SlMagnifierAdd } from "react-icons/sl";
import { StaticImageData } from "next/image";
interface data{
    image:StaticImageData,
    description:string
}
export default function ProductCard({image, description}:data) {
    return (
      <div className="flex w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Left Side: Image */}
        <div className="w-1/3">
          <Image
            src={image} // Replace with the actual image path
            alt="Product"
            className="w-full h-auto rounded-lg"
          />
        </div>
  
        {/* Right Side: Content */}
        <div className="w-2/3 pl-6">
          {/* Title */}
          <h2 className="text-sm font-semibold text-[#151875]">{description}</h2>
  
          {/* Price */}
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-lg font-bold text-[#151875]">$26.00</span>
            <span className="text-sm text-gray-400 line-through">$52.00</span>
          </div>
  
          {/* Rating */}
          <div className="mt-2 flex items-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span> // Filled star
            ))}
            <span className="text-gray-400">★</span>
          </div>
  
          {/* Description */}
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
  
          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4 justify-center w-1/4">
            <button className="flex items-center bg-gray-200 text-gray-700 text-sm font-medium rounded-full h-6 w-6 hover:bg-gray-300 p-1">
            <FiShoppingCart />
            </button>
            <button className="flex items-center bg-gray-200 text-gray-700 text-sm font-medium rounded-full h-6 w-6 hover:bg-gray-300 p-1">
            <CiHeart />
            </button>
            <button className="flex items-center bg-gray-200 text-gray-700 text-sm font-medium rounded-full h-6 w-6 hover:bg-gray-300 p-1">
            <SlMagnifierAdd />
            </button>
          </div>
        </div>
      </div>
    );
  }
  