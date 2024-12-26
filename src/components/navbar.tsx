'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import heart from "../../public/heart.png";
import cart from "../../public/cart.png";
import profile from "../../public/profile.png";
import search from "../../public/search.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Menu from "./menu";
import cartclose from '../../public/cartclose.png';
import main from '../../public/main.png';
import cut from '../../public/cut.png';
import cart2 from '../../public/cart2.png';

export default function Navbar() {
    // State to toggle the cart modal
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Toggle cart visibility
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    return (
            <div className="max-w-[1440px] h-auto sm:px-8 sm:py-4 px-4 py-2 relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-x-1">
                        <Image src={Logo} alt="Logo" width={38} height={15} />
                        <h2 className="font-bold text-2xl">Furniro</h2>
                    </div>
                    {/* Links */}
                    <div className="sm:flex hidden font-semibold text-xs gap-x-16">
                        <Link href={"/"}> Home</Link>
                        <Link href={"/shop"}> Shop </Link>
                        <Link href={"/blog"}> Blog</Link>
                        <Link href={"/contact"}> Contact </Link>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-x-4">
                        <Image src={profile} alt="profile" width={20} />
                        <Image src={search} alt="search" width={20} />
                        <Image src={heart} alt="heart" width={20} />
                        <button onClick={toggleCart} className="relative">
                            <Image src={cart} alt="cart" width={20} />
                        </button>
                        <Menu />
                    </div>
                </div>

                {/* Backdrop Overlay */}
                {isCartOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-20"
                        onClick={toggleCart} // Close on backdrop click
                    />
                )}

                {/* Cart Modal as a Dropdown */}
                {isCartOpen && (
                    <div className="absolute space-y-24 right-0 top-12 bg-white p-6 rounded-lg shadow-lg w-80 max-w-xs z-30">
                        {/* Top */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Shopping Cart</h3>
                                <button onClick={toggleCart} className="text-xl font-semibold"><Image src={cartclose} alt="cartclose" /></button>
                            </div>
                            <div className="w-[200px] h-[1px] bg-gray-200" />
                            <div className="space-y-4 mt-4">
                                <div className="flex gap-x-6 items-center font-poppins">
                                    <Image src={main} alt="sofa" className="w-[70px] bg-[#F9F1E7]" />
                                    <div className="space-y-2 text-xs">
                                        <h4>Asgaard sofa</h4>
                                        <div className="flex gap-x-4">
                                            <p>1</p>
                                            <p>x</p>
                                            <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                                        </div>
                                    </div>
                                    <Image src={cut} alt="cut" className="w-[18px] h-[18px]" />
                                </div>
                                <div className="flex gap-x-6 items-center font-poppins">
                                    <Image src={cart2} alt="sofa" className="w-[70px] bg-[#F9F1E7]" />
                                    <div className="space-y-2 text-xs">
                                        <h4>Casaliving Wood</h4>
                                        <div className="flex gap-x-4">
                                            <p>1</p>
                                            <p>x</p>
                                            <p className="text-[#B88E2F]">Rs. 270,000.00</p>
                                        </div>
                                    </div>
                                    <Image src={cut} alt="cut" className="w-[18px] h-[18px]" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold">Subtotal</h3>
                                <h3 className="text-sm text-[#B88E2F]">Rs. 520,000.00</h3>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200" />
                            <div className="flex gap-x-4">
                                <Link href={'/cart'}><button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Cart</button></Link>
                                <Link href={'/checkout'}><button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Checkout</button></Link>
                                <Link href={'/comparison'}><button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Comparison</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    );
}
