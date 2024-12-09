import Hero from "@/components/hero";
import Browse from "@/components/browserange";
import Products from "@/components/ourproducts";
import Share from "@/components/sharesetup";
import Image from "next/image";
import slider from '../../public/slider.png';

export default function Home() {
  return (
   <div>
    <Hero />
    <div className="max-w-[1440px] p-10">
      <Browse/>
    </div>
    <div className="max-w-[1440px] p-10">
      <Products />
    </div>
    <div className="max-w-[1440px] py-6">
      <Image src={slider} alt="slider"/>
    </div>
    <div className="max-w-[1440px]">
      <Share />
    </div>
   </div>
  );
}
