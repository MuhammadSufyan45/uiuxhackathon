"use client";
import Image from "next/image";
import Link from "next/link";
import filter from "../../../public/filter.png";
import dots from "../../../public/dots.png";
import icon from "../../../public/icon.png";
import ProductCard from "@/components/productcard";
import Features from "@/components/features";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslice";
import { useSearch } from "../search/searchcontext"; // Import the search context

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

export default function Shop() {
  const dispatch = useDispatch();
  const [product, setProducts] = useState<Product[]>([]);

  // Access the search term from the SearchContext
  const { searchTerm } = useSearch(); 

  // Fetching products from Sanity
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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally set an error state to show a message in the UI
      }
    }
  
    fetchProducts();
  }, []);

  // Handle Add to Cart
  const handleAdd = (product: Product) => {
    dispatch(add(product)); // Dispatch add action with product
  };

  // Filter products based on the search term
  const filteredProducts = product.filter((detail) =>
    detail.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          <p className="sm:text-sm text-xs font-semibold">Showing {filteredProducts.length} results</p>
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
        {filteredProducts.map((detail) => (
          <ProductCard key={detail._id} product={detail} handleAdd={handleAdd} />
        ))}
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
  );
}
