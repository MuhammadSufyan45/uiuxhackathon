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
import { client } from "@/sanity/lib/client";

export default async function Shop() {

    interface Product {
        _id: string;
        title: string;
        productImage: {
            asset: {
                url: string;
            };
        };
        price: number;
        isNew: boolean;
    };

    const query = `*[_type == "product"][0...16]{
        title,
        _id,
        isNew,
        productImage {
          asset -> {
            url
          }
        },
        price
      }`;


    const product: Product[] = await client.fetch(query);


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


                {product.map((detail) => (
                    <div className="sm:w-full w-[246px] h-[346px] sm:h-[406px] bg-[#F4F5F7] flex flex-col relative">
                        {/* Image Section with Hover Effect */}
                        <div className="w-full h-[301px] relative group">
                            <Image
                                src={detail.productImage.asset.url}
                                alt="Product Image"
                                width={285}
                                height={301}
                                className="object-cover w-full h-full"
                            />
                            {/* New Product Tag */}
                            {detail.isNew && (
                                <p className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-4 right-4 text-xs font-bold">
                                    New
                                </p>
                            )}
                            {/* Overlay on hover only on image */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            {/* Hover Content (Button & Icons) */}
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <div className="text-center">
                                    <button className="bg-white sm:text-lg text-sm text-[#B88E2F] font-semibold py-2 px-8 rounded-md mb-4">Add to Cart</button>
                                    <div className="flex sm:gap-x-8 gap-x-6 justify-center">
                                        <div className="flex items-center gap-x-1">
                                            <i className="fas fa-share-alt text-white"></i>
                                            <p className="sm:text-sm text-xs text-white">Share</p>
                                        </div>
                                        <Link href={`/comparison`}>
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
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-4 sm:space-y-2 space-y-1 flex-grow">
                            <Link href={`/shop/${detail._id}`}>
                                <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.title}</h2>
                            </Link>
                            <p className="text-[#898989] font-poppins sm:text-sm text-xs"></p>
                            <div className="flex items-center gap-x-4">
                                <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">${detail.price}</h2>
                                <p className="text-[#898989] font-poppins text-sm line-through"></p>
                            </div>
                        </div>
                    </div>
                ))}



                {/* <Product1 />
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
                <Product4 /> */}

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