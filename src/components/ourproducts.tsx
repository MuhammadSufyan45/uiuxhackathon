import Image from "next/image";
import Product1 from "./product1";
import Product2 from "./product2";
import Product3 from "./product3";
import Product4 from "./product4";
import Product5 from "./product5";
import Product6 from "./product6";
import Product7 from "./product7";
import Product8 from "./product8";
import { Data } from "@/data/data";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";



export const revalidate = 10;

export default async function Products() {

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

    const query = `*[_type == "product"][0...8]{
  title,
  _id,
  isNew,
  productImage {
    asset -> {
      url
    }
  },
  price
}
`
    const product: Product[] = await client.fetch(query);

    return (
        <div className="flex flex-col items-center gap-y-8">
            <h2 className="text-4xl font-bold text-[#333333] text-center">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


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
                <Product5 />
                <Product6 />
                <Product7 />
                <Product8 /> */}
            </div>
            <button className="px-14 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold hover:bg-[#B88E2F] hover:text-white">Show More</button>
        </div>
    );
}
