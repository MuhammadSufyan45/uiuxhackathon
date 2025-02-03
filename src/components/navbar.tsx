'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import "tailwindcss/tailwind.css";
import { RootState } from '../app/redux/store';
import { useSelector, useDispatch } from "react-redux";
import { remove } from '../app/redux/cartslice'; // Import the remove action
import Link from "next/link";
import { useSearch } from "@/app/search/searchcontext";
import Menu from '../components/menu'; // Import Menu component

export default function Navbar() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart);
  const { searchTerm, setSearchTerm } = useSearch();

  // State to toggle the cart modal
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle cart visibility
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Handle removing item from cart
  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
  };

  // Calculate subtotal (price is already a number)
  const subtotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-full h-auto sm:px-8 sm:py-4 px-4 py-2 relative">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto sm:space-x-16">
        {/* Logo */}
        <div className="flex items-center gap-x-1">
          <Image src={Logo} alt="Logo" width={38} height={15} />
          <h2 className="font-bold text-2xl">Furniro</h2>
        </div>

        {/* Links for Desktop */}
        <div className="sm:flex hidden font-semibold text-xs gap-x-16">
          <Link href={"/"}> Home</Link>
          <Link href={"/shop"}> Shop </Link>
          <Link href={"/blog"}> Blog</Link>
          <Link href={"/contact"}> Contact </Link>
        </div>

        {/* Mobile Menu and Icons */}
        <div className="flex items-center sm:gap-x-4 gap-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for products"
            className="px-4 py-2 border rounded-md sm:text-sm text-xs sm:w-[180px] w-[100px]"
          />
          {/* <Image src='/profile.png' alt="profile" width={20} height={0} className="sm:w-[20px] w-[16px]"/>
          <Image src='/heart.png' alt="heart" width={20} height={0} className="sm:w-[20px] w-[16px]"/> */}
          <button onClick={toggleCart} className="relative flex items-center gap-2">
            <Image src='/cart.png' alt="cart" width={20} height={0} className="sm:w-[20px] w-[16px]" />
            <p className="text-xs">{items.length}</p>
          </button>
           {/* Mobile Menu Component */}
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
              <button onClick={toggleCart} className="text-xl font-semibold">
                <Image src='/cartclose.png' width={20} height={0} alt="cartclose" />
              </button>
            </div>
            <div className="w-[200px] h-[1px] bg-gray-200" />
            <div className="space-y-4 mt-4">
              {/* Loop through cart items */}
              {items.map((item) => (
                <div key={item._id} className="flex gap-x-6 items-center font-poppins">
                  <Image
                    src={item.productImage.asset.url}
                    alt={item.title}
                    className="w-[70px] bg-[#F9F1E7]"
                    width={70}
                    height={70}
                  />
                  <div className="space-y-2 text-xs">
                    <h4>{item.title}</h4>
                    <div className="flex gap-x-4">
                      <p>1</p>
                      <p>x</p>
                      <p className="text-[#B88E2F]">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)} // Ensure id is a number
                    className="text-red-500 hover:text-red-700"
                  >
                    <Image src='/cut.png' width={20} height={0} alt="remove" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">Subtotal</h3>
              <h3 className="text-sm text-[#B88E2F]">$ {subtotal}</h3>
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
