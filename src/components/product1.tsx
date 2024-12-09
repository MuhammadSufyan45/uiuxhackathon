import Image from "next/image";
import { Data } from "../data/data";
import Link from "next/link";

export default function Product1() {
    const detail = Data[0]
    return (
        <div className="sm:w-full w-[246px] h-[346px] sm:h-[446px] bg-[#F4F5F7] flex flex-col relative group">
            {/* Image */}
            <div className="w-full h-[301px] relative">
                <Image
                    src={"/image 1.png"}
                    alt="Product Image"
                    width={285}
                    height={301}
                    className="object-cover w-full h-full"
                />
                <p className="bg-red-400 text-white rounded-full w-fit sm:p-2 p-1 text-center absolute top-4 right-4">{detail.tag}</p>


            </div>

            {/* Product Details */}
            <div className="p-4 sm:space-y-2 space-y-1 flex-grow relative">
                <Link href={`/shop/${detail.id}`}><h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.title}</h2></Link>
                <p className="text-[#898989] font-poppins sm:text-sm text-xs">{detail.Subtitle}</p>
                <div className="flex items-center gap-x-4">
                    <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.price}</h2>
                    <p className="text-[#898989] font-poppins text-sm line-through">{detail.discount}</p>
                </div>
            </div>

            {/* Hover Content (Button & Icons) */}
            <div className="flex-col absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button className="bg-white sm:text-lg text-sm text-[#B88E2F] font-semibold py-2 px-8 rounded-md mb-4">Add to Cart</button>
                <div className="flex sm:gap-x-8 gap-x-6">
                    <div className="flex items-center gap-x-1">
                        <i className="fas fa-share-alt text-white"></i>
                        <p className="sm:text-sm text-xs text-white">Share</p>
                    </div>
                    <Link href={`/cart`}>
                    <div className="flex items-center gap-x-1">
                        <i className="fas fa-exchange-alt text-white"></i>
                        <p className="sm:text-sm text-xs text-white">Compare</p>
                    </div>
                    </Link>
                    <div className="flex items-center gap-x-1">
                        <i className="fas fa-heart text-white"></i>
                        <p className="sm:text-sm text-xs text-white">Like</p>
                    </div>
                </div>
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
        </div>

    );
}