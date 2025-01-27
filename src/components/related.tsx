'use client';
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "./productcard";
import { useDispatch } from "react-redux";
import { add } from "../app/redux/cartslice";

interface Product {
  _id: string;
  title: string;
  price: number;
  isNew: boolean;
  productImage: {
    asset: {
      url: string;
    };
  };
}

export default function Related({ tags }: { tags: string[] }) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  // Handle Add to Cart
  const handleAdd = (product: Product) => {
    dispatch(add(product)); // Dispatch add action with product
  };

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      // Hardcoded query to fetch 4 products
      const query = `*[_type == "product"][0...4]{
        _id,
        title,
        price,
        productImage {
          asset -> { url }
        }
      }`;

      // Fetch the data from Sanity
      try {
        const products = await client.fetch(query);
        console.log("Fetched products:", products);  // Debugging line
        setRelatedProducts(products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelatedProducts();
  }, []);

  return (
    <div className="max-w-[1440px] flex flex-col items-center gap-y-8 border-t-2 sm:p-8 p-6">
      <h2 className="sm:text-4xl text-2xl font-bold text-[#333333] text-center">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} handleAdd={handleAdd} />
          ))
        ) : (
          <p>No related products found</p>
        )}
      </div>
      <button className="px-14 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold hover:bg-[#B88E2F] hover:text-white">
        Show More
      </button>
    </div>
  );
}
