import Image from 'next/image';

import { StaticImageData } from 'next/image';
interface image{
    image:StaticImageData
}
const MinimalChairCard = ({image}:image) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 p-2 w-[240px] h-[330px] ">
      {/* Outer Glow */}
      <div className="inset-0 bg-gradient-to-br from-purpleGlow to-transparent rounded-full blur-xl opacity-30 pointer-events-none"></div>

      {/* Chair Image */}
      <div className='rounded-full bg-gray-200 p-6'>
        <Image
          src={image}
          alt="Minimal Chair"
        />
      </div>

      {/* Button */}
      <button className="px-6 py-2 bg-green text-white rounded-[4px] font-semibold hover:bg-green-700 transition duration-300">
        View Shop
      </button>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a0b5b] text-semibold">Minimal Chair</h3>
        <p className="text-[#1a0b5b]">$56.00</p>
      </div>
    </div>
  );
};

export default MinimalChairCard;
