import Image from 'next/image';
import sofa from "../(public)/sofaset.png"
const DiscountBanner = () => {
  return (
    <div className="flex flex-col-reverse mb-10 lg:flex-row items-center justify-betweenp-10 lg:p-16">
      {/* Text Content */}
      <div className="lg:w-1/2 mx-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
          20% Discount Of All Products
        </h1>
        <h2 className="text-2xl font-semibold text-pink-500 mb-6">
          Eams Sofa Compact
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="text-gray-400">✔ Material expose like metals</li>
          <li className="text-gray-400">✔ Simple neutral colours</li>
          <li className="text-gray-400">✔ Clear lines and geometric figures</li>
        </ul>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-[4px] text-sm hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="w-80 h-80">
            <Image src={sofa} alt='sofa'/>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
