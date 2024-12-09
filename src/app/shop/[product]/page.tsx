import Image from "next/image";
import Link from "next/link";
import det1 from "../../../../public/det1.png";
import det2 from "../../../../public/det2.png";
import det3 from "../../../../public/det3.png";
import det4 from "../../../../public/det4.png";
import main from "../../../../public/main.png";
import Buttonbord from "@/components/buttonbord";
import Description from "@/components/description";
import Related from "@/components/related";

export default function Prod() {
    return (
        <div>
            <div className="max-w-[1440px] h-[80px] sm:px-16 px-6 bg-[#F9F1E7] flex items-center justify-between">
                {/* Product detail */}
                <div className="flex flex-row items-center sm:gap-x-4 gap-x-4 gap-y-2">
                    <div className="flex flex-row items-center gap-x-4 font-poppins">
                        <Link href={"/"} className="text-[#9F9F9F] sm:text-sm text-xs">Home</Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                        <Link href={"/shop"} className="text-[#9F9F9F] sm:text-sm text-xs">Shop</Link>
                        <i className="fas fa-chevron-right text-xs"></i>
                    </div>

                    <div className="h-[26px] w-[1px] bg-gray-600 hidden sm:block" />

                    <p className="text-xs font-semibold font-poppins">Asgard sofa</p>
                </div>
            </div>
            {/* Product Detail */}
            <div className="flex flex-col space-y-8 sm:flex-row gap-x-24 sm:px-16 px-8 py-6">
                {/* images */}
                <div className="flex gap-x-4">
                    <div className="sm:space-y-6 space-y-2">
                        <Image src={det1} alt="1" className="bg-[#F9F1E7] py-3 rounded-md sm:w-[60px] w-[50px]" />
                        <Image src={det2} alt="2" className="bg-[#F9F1E7] py-3 rounded-md sm:w-[60px] w-[50px]" />
                        <Image src={det3} alt="3" className="bg-[#F9F1E7] py-3 rounded-md sm:w-[60px] w-[50px]" />
                        <Image src={det4} alt="4" className="bg-[#F9F1E7] py-3 rounded-md sm:w-[60px] w-[50px]" />
                    </div>
                    <div className="bg-[#F9F1E7] sm:h-[420px] sm:w-[400px] w-[280px] h-[280px] py-3 rounded-md flex justify-center">
                        <Image src={main} alt="main" />
                    </div>
                </div>
                {/* details */}
                <div className="space-y-12">
                    <div className="sm:space-y-4 space-y-8">
                        <div className="sm:space-y-2 space-y-4 font-poppins">
                            <div className="font-poppins">
                                <h2 className="text-2xl font-medium">Asgaard sofa</h2>
                                <h2 className="text-md text-[#9F9F9F]">Rs. 250,000.00</h2>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <div className="text-xs space-x-1">
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-gray-400"></i>
                                </div>
                                <div className="w-[1px] h-[26px] bg-[#9F9F9F]" />
                                <p className="text-[#9F9F9F] text-xs">5 Customer Review</p>
                            </div>
                            <p className="text-xs sm:w-[400px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        </div>
                        {/* colors */}
                        <div>
                            <div className="space-y-2">
                                <p className="text-[#9F9F9F]">size</p>
                                <div className="flex items-center gap-x-4">
                                    <div className="bg-[#B88E2F] text-white text-xs w-fit px-3 py-2 rounded">L</div>
                                    <div className="bg-[#F9F1E7] text-black text-xs w-fit px-3 py-2 rounded hover:bg-[#B88E2F]">XL</div>
                                    <div className="bg-[#F9F1E7] text-black text-xs w-fit px-3 py-2 rounded hover:bg-[#B88E2F]">XS</div>
                                </div>

                                <p className="text-[#9F9F9F]">colors</p>
                                <div className="flex items-center gap-x-4">
                                    <div className="bg-[#816DFA] text-white text-xs w-[20px] h-[20px] rounded-full" />
                                    <div className="bg-black text-black text-xs w-[20px] h-[20px] rounded-full" />
                                    <div className="bg-[#B88E2F] text-black text-xs w-[20px] h-[20px] rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* Quantity */}
                        <div className="flex space-x-2 font-poppins">
                            <div className="border-2 border-[#9F9F9F] py-2 px-2 w-[100px] rounded-lg text-sm flex items-center justify-between">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <Buttonbord item="Add To Cart" />
                            <Link href={"/comparison"}><Buttonbord item="+ Compare" /></Link>
                        </div>
                    </div>
                    {/* Line */}
                    <div className="h-[1px] sm:w-[400px] bg-[#D9D9D9] mt-8" />
                    {/* Info */}
                    <div className="flex gap-x-4">
                        <div className="flex flex-col gap-y-3 text-xs font-poppins text-[#9F9F9F]">
                            <p>SKU</p>
                            <p>Category</p>
                            <p>Tags</p>
                            <p>Share</p>
                        </div>
                        <div className="flex flex-col gap-y-3 text-xs  font-poppins text-[#9F9F9F]">
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className="flex flex-col gap-y-3 text-xs font-poppins text-[#9F9F9F]">
                            <p>SS001</p>
                            <p>Sofas</p>
                            <p>Sofa, Chair, Home, Shop</p>
                            <div className="space-x-2 text-black">
                                <i className="fab fa-facebook-f text-md"></i>
                                <i className="fab fa-linkedin-in text-md"></i>
                                <i className="fab fa-twitter text-md"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Description />
            <Related />
        </div>
    )
}