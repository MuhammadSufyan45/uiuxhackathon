import Image from "next/image";
import Link from "next/link";
import filter from "../../../public/filter.png";
import dots from "../../../public/dots.png";
import icon from "../../../public/icon.png";
import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";
import Product4 from "@/components/product4";
import Features from "@/components/features";

export default function Shop() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* shop */}
            <div className="text-center py-24 space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <h2 className="text-4xl font-semibold">Shop</h2>
                <div className="text-sm space-x-2">
                    <Link href={""} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={""}>Shop</Link>
                </div>
            </div>
            {/* Filter */}
            <div className="max-w-[1440px] h-[80px] sm:px-16 px-6 bg-[#F9F1E7] flex items-center justify-between">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-center sm:gap-x-4 gap-x-2 gap-y-2">
                    <div className="flex items-center sm:gap-x-4 gap-x-2">
                        <Image src={filter} alt="filter" className="sm:w-[14px] sm:h-[14px] w-[12px] h-[12px]" />
                        <p className="text-sm sm:text-lg">Filter</p>
                        <Image src={dots} alt="dots" className="sm:w-[14px] sm:h-[14px] w-[12px] h-[12px]" />
                        <Image src={icon} alt="icon" className="sm:w-[14px] sm:h-[14px] w-[12px] h-[12px]" />
                    </div>

                    <div className="h-[26px] w-[1px] bg-gray-600 hidden sm:block" />

                    <p className="sm:text-sm text-xs font-semibold">Showing 1–16 of 32 results</p>
                </div>
                {/* Inputs */}
                <div className="flex items-center sm:gap-x-4 gap-x-2">
                    <p className="text-xs sm:text-sm">Show</p>
                    <div className="sm:px-3 sm:py-3 px-1 py-1 text-sm bg-white text-gray-500">16</div>
                    <p className="text-xs sm:text-sm">Sort by</p>
                    <div className="sm:px-6 sm:py-3 px-3 py-3 text-sm bg-white text-gray-500">Default</div>
                </div>
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-16 py-12">
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />

            </div>
            {/* Next Buttons */}
            <div className="w-[200px] h-[100px] flex items-center gap-x-6 sm:ml-[600px] ml-16">
                <div className="bg-[#B88E2F] w-fit px-4 py-2 rounded">1</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">2</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">3</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">Next</div>
            </div>
            {/* Features */}
            <Features />
        </div>
    )
}