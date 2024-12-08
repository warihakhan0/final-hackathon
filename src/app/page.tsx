import Image from "next/image";
import Button from "./components/button";
import heroSofa from "./(public)/hero-sofa.png";
import heroLamp from "./(public)/lamp.png";
import heroBtn from "./(public)/butons.png";
import Featured from "./components/featured";
import chair2 from "./(public)/image 1.png";
import chair1 from "./(public)/image 1168.png";
import chair3 from "./(public)/image 1169.png";
import chair4 from "./(public)/image 3.png";
import bar from "./(public)/Group 169.png";
import Link from "next/link";
import Latest from "./components/latest";
import sett1 from "./(public)/image 1166.png";
import sett2 from "./(public)/image 15.png";
import sett3 from "./(public)/image 23.png";
import sett4 from "./(public)/image 32.png";
import delivery from "./(public)/free-delivery 1.png";
import cashback from "./(public)/cashback 1.png";
import support from "./(public)/premium-quality 1.png";
import call from "./(public)/Group.png";
import Offer from "./components/offer";
import Trending from "./components/trending";
import sofa from "./(public)/Group 153.png";
import set1 from "./(public)/image 1171.png"
import set2 from "./(public)/image 1170.png"
import set3 from "./(public)/image 31.png"
import banner1 from "./(public)/Group 154.png"
import DiscountBanner from './components/DiscountBanner';
import banner2 from "./(public)/Group 155.png"
import side1 from "./(public)/Trnding products list.png"
import side2 from "./(public)/Trnding products list (1).png"
import side3 from "./(public)/Trnding products list (2).png"
import title from "./(public)/image 1174.png"
import MinimalChairCard from './components/minimalCard';
import chair from "./(public)/image 20.png"
import Blog from "./components/blog";
import frame1 from "./(public)/Frame 3.png"
import frame2 from "./(public)/Frame 4.png"
import frame3 from "./(public)/Frame 3 (1).png"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* hero section */}
      <div className="bg-[#f2f0ff] place-items-center mt-4 gap-10 flex flex-col">
        <div className="flex flex-row space-between mx-7">
          <div className="">
            <Image src={heroLamp} alt="lamp" />
          </div>
          <div className="place-items-center flex flex-row">
            <div className="p-2 flex flex-col justify-center md:mt-0 mt-10">
              <h4 className="text-sm text-pink-600 mb-2 font-semibold">
                Best Furniture For Your Castle......
              </h4>
              <div>
                <h1 className="font-serif md:text-3xl text-xl font-bold">
                  New Furniture Collection <br /> Trends in 2020
                </h1>
              </div>
              <p className="text-[#a0a4c8] text-sm mb-5 w-[86%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Button btn="Shop Now" />
            </div>
            <div className="place-items-center md:flex hidden flex-col justify-center">
              <Image src={heroSofa} alt="sofa" className="w-[20rem] mt-7" />
            </div>
          </div>
        </div>
        <Image src={heroBtn} alt="btn" className="m-4" />
      </div>
      {/* hero section ends here */}
      {/* featured section */}
      <div className="flex flex-col place-items-center font-serif mt-10">
        <div>
          <h3 className="text-[#1a0b5b] font-bold text-xl">
            Featured Products
          </h3>
        </div>
      </div>
      <div className="place-items-center flex flex-col">
        <div className="flex lg:flex-row flex-col justify-center gap-10 mb-10 mt-10">
          <Featured imageSource={chair1} />
          <Featured imageSource={chair2} />
          <Featured imageSource={chair3} />
          <Featured imageSource={chair4} />
        </div>
        <Image src={bar} alt="bars" className="mb-5" />
      </div>
      {/* featured section ends here */}
      {/* latest products */}
      <div>
        <div className="place-items-center ">
          <h3 className="text-[#1a0b5b] font-bold text-3xl">Latest Products</h3>
          <div className="flex flex-row gap-7 font-medium text-sm text-[#1a0b5b] mt-7 mb-10">
            <Link href={"/"} className="hover:text-pink-600">
              New Arrival
            </Link>
            <Link href={"/"} className="hover:text-pink-600">
              Best Sellers
            </Link>
            <Link href={"/"} className="hover:text-pink-600">
              Featured
            </Link>
            <Link href={"/"} className="hover:text-pink-600">
              Special Offer
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex lg:flex-row place-items-center flex-col justify-center gap-5 mb-10">
            <Latest imageSource={sett1} />
            <Latest imageSource={sett2} />
            <Latest imageSource={chair1} />
          </div>
          <div className="flex lg:flex-row place-items-center flex-col justify-center gap-5">
            <Latest imageSource={sett3} />
            <Latest imageSource={sett4} />
            <Latest imageSource={chair4} />
          </div>
        </div>
      </div>
      {/* latest products ends here */}
      {/* shopex */}
      <div className="place-items-center">
        <div>
          <h3 className="text-[#1a0b5b] font-bold text-xl">
            What Shopex offer!
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-5 mb-10">
          <Offer image={delivery} />
          <Offer image={cashback} />
          <Offer image={support} />
          <Offer image={call} />
        </div>
      </div>
      {/* shopex end */}
      <div className="bg-[#f1f0ff] place-items-center flex md:flex-row flex-col justify-between px-7">
        <div>
          <Image src={sofa} alt="sofa" />
        </div>
        <div className="flex flex-col place-items-start">
          <div className="flex flex-col text-[#bfbed4]">
            <h2 className="text-[#151875] font-bold text-3xl">
              Unique Features Of leatest & <br /> Trending Poducts
            </h2>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-row gap-2 place-items-center">
                <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                <p>All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className="flex flex-row gap-2 place-items-center">
                <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                <p>
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </div>
              <div className="flex flex-row gap-2 place-items-center">
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <p>Arms, backs and seats are structurally reinforced</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 mt-5 place-items-center">
            <Button btn="Add To Cart" />
            <div className="flex flex-col">
              <h3 className="text-[#151875] font-bold  text-sm">
                B&B Italian Sofa{" "}
              </h3>
              <p className="text-[#151875] font-light text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="place-items-center mt-5 mx-10">
      <h3 className="text-[#1a0b5b] font-bold text-2xl">
            Trending Products
          </h3>
          <div className="flex lg:flex-row flex-col gap-10 mx-10 mb-10 place-items-center">
            <Trending image={set1}/>
            <Trending image={set2}/>
            <Trending image={set3}/>
            <Trending image={sett4}/>
          </div>
      </div>
      <div className="md:flex md:flex-row flex-col gap-4 w-4/5 place-items-center p-2 mb-5 hidden">
        <div className="flex lg:flex-row flex-col justify-center gap-5">
          <Image src={banner1} alt="banner" />
          <Image src={banner2} alt="banner" />
        </div>
        <div className="flex flex-col justify-center gap-4">
        <Image src={side1} alt="banner" />
        <Image src={side2} alt="banner" />
        <Image src={side3} alt="banner" />
        </div>
      </div>
      <div className="place-items-center">
        <h3 className="text-[#1a0b5b] font-bold text-2xl">Discount Item</h3>
        <div className="flex flex-row gap-7 font-medium text-sm text-[#1a0b5b] mt-7 mb-10">
            <Link href={"/"} className="hover:text-pink-600">
            Wood Chair
            </Link>
            <Link href={"/"} className="hover:text-pink-600">
              Plastic Chair
            </Link>
            <Link href={"/"} className="hover:text-pink-600">
              Sofa Collection
            </Link>
          </div>
          {/* banner */}
          <DiscountBanner />
      </div>
      <div>
        <div className="place-items-center">
        <h3 className="text-[#1a0b5b] font-bold text-2xl mt-5">Top Categories</h3>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-5 mb-10 place-items-center p-2">
          < MinimalChairCard image={chair} />
          < MinimalChairCard image={chair1} />
          < MinimalChairCard image={set1} />
          < MinimalChairCard image={chair} />
        </div>
      </div>
      <div id="container" className="place-items-center align-middle flex flex-col justify-center">
      <h3 className="text-[#1a0b5b] font-bold md:text-xl text-lg text-center mb-2">Get Leatest Update By Subscribe <br /> Our Newslater</h3>
      <Button btn= "Shop Now" />
      </div>
      <div className="place-items-center m-5">
        <Image src={title} alt="ban" />
      </div>
      <div className="place-items-center p-10">
        <h3 className="text-[#1a0b5b] font-bold text-2xl mb-10">Latest Blog</h3>
        <div className="flex lg:flex-row flex-col justify-center gap-5 mb-10 place-items-center">
          <Blog image={frame1}/>
          <Blog image={frame2}/>
          <Blog image={frame3}/>
        </div>

      </div>
    </div>
  );
}
