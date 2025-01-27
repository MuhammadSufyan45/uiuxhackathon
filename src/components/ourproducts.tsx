"use client";
import { client } from "@/sanity/lib/client";
import ProductCard from "./productcard";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/redux/cartslice";
import { useSearch } from "@/app/search/searchcontext"; // Import the search context

export const revalidate = 10;

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

export default function Products() {

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
            const data = await client.fetch(query);
            setProducts(data);
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
        <div className="flex flex-col items-center gap-y-8">
            <h2 className="text-4xl font-bold text-[#333333] text-center">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {filteredProducts.map((detail) => (
                    <ProductCard key={detail._id} product={detail} handleAdd={handleAdd} />
                ))}

            </div>
            <button className="px-14 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold hover:bg-[#B88E2F] hover:text-white">
                Show More
            </button>
        </div>
    );
}
