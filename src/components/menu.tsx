"use client";
import Link from "next/link";
import { useState } from "react";


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Hamburger Icon for small screens */}
            <button
                className="sm:hidden flex flex-col justify-center items-center space-y-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <>
                <i className="fas fa-bars text-xl"></i>
                </>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 backdrop-blur-sm z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-gray-600">
                    <Link href={"/"} className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href={"/shop"} className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>
                        Shop
                    </Link>
                    <Link href={"/blog"} className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link href={"/contact"} className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>
            </div>

            {/* Close Icon (on top of the menu when open) */}
            {isOpen && (
                <button
                    className="sm:hidden absolute top-5 right-5 z-30"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close Icon */}
                    <i className="fas fa-times text-black text-4xl"></i>
                </button>
            )}

</>
    )
}

