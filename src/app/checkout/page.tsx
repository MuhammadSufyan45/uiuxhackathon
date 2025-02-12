'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Feature from "@/components/features";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { clearCart } from "../redux/cartslice";


export default function Checkout() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state: RootState) => state.cart);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    // Billing Details State
    const [billingDetails, setBillingDetails] = useState({
        firstname: '',
        lastname: '',
        country: '',
        city: '',
        address: '',
        province: '',
        zipcode: '',
        phone: '',
        email: '',
        additionalInfo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setBillingDetails({
            ...billingDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form default submission
        console.log('place order clicked');
        

        const orderData = {
            firstname: billingDetails.firstname,
            lastname: billingDetails.lastname,
            country: billingDetails.country,
            streetAddress: billingDetails.address,
            city: billingDetails.city,
            province: billingDetails.province,
            zipCode: billingDetails.zipcode,
            phone: billingDetails.phone,
            email: billingDetails.email,
            additionalInfo: billingDetails.additionalInfo,
            cartproducts: cartItems.map(item => ({
                _type: 'reference',
                _ref: item._id, // Assuming you have the _id for each product in the cart
            })),
            subtotal: calculateTotal(),
            total: calculateTotal(), // If there's any additional charge, update here
            status: 'pending', // Or 'success', based on your logic
        };

        try {
            // Send the order data to Sanity
            const result = await client.create({
                _type: 'order',
                ...orderData,
            });

            console.log('Order placed successfully:', result);
            alert('Your order has been placed successfully!');
            
            dispatch(clearCart());

            setBillingDetails({
                firstname: '',
                lastname: '',
                country: '',
                address: '',
                city: '',
                province: '',
                zipcode: '',
                phone: '',
                email: '',
                additionalInfo: '',
            });
        } catch (error) {
            console.error('Error placing order:', error);
        
            if (error instanceof Error) {
                console.error('Error message:', error.message);
            } else {
                console.error('Unknown error:', error);
            }
        
            alert('There was an error processing your order. Please try again.');
        }
    };

    

    return (
        
        <div className="flex flex-col items-center">
            <div className="max-w-[1440px] h-auto">
            {/* Checkout hero */}
            <div className="text-center py-24 flex flex-col items-center space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <Image src={logo} alt="logo" />
                <h2 className="text-4xl font-semibold">Checkout</h2>
                <div className="text-sm space-x-2">
                    <Link href={"/"} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={"/Checkout"}>Checkout</Link>
                </div>
            </div>
            {/* Bill Section Checkout */}
            <div className="flex flex-col sm:flex-row sm:px-32 px-4 py-16 gap-x-32 gap-y-12">
                {/* Billing Details */}
                <div className="space-y-6">
                    <h2 className="font-poppins font-semibold sm:text-3xl text-xl">Billing details</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex gap-x-4">
                            <div className="sm:text-sm text-xs font-poppins space-y-4">
                                <h4 className="font-semibold">First Name</h4>
                                <input type="text" name="firstname" value={billingDetails.firstname} onChange={handleChange} required className="border-2 sm:w-[190px] px-2 py-4 focus:outline-none rounded-md" />
                            </div>
                            <div className="sm:text-sm text-xs font-poppins space-y-4">
                                <h4 className="font-semibold">Last Name</h4>
                                <input type="text" name="lastname" value={billingDetails.lastname} onChange={handleChange} required className="border-2 sm:w-[190px] px-2 py-4 focus:outline-none rounded-md" />
                            </div>
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <label className="block font-semibold">Country / Region</label>
                            <select
                            value={billingDetails.country}
                            name="country"
                            onChange={handleChange}
                                className="sm:w-[400px] w-[360px] px-2 py-4 border-2 rounded-md  focus:outline-none"
                            >
                                <option value=""></option>
                                <option value="Ontario">Ontario</option>
                                <option value="Quebec">Quebec</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Alberta">Alberta</option>
                            </select>
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Street address</h4>
                            <input type="text" name="address" value={billingDetails.address} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Town / City</h4>
                            <input type="text" name="city" value={billingDetails.city} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <label className="block font-semibold">Province</label>
                            <select
                                className="sm:w-[400px] w-[360px] px-2 py-4 border-2 rounded-md  focus:outline-none"
                            value={billingDetails.province}
                            onChange={handleChange} 
                            name="province"
                            >
                                <option value=""></option>
                                <option value="Ontario">Ontario</option>
                                <option value="Quebec">Quebec</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Alberta">Alberta</option>
                            </select>
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">ZIP code</h4>
                            <input type="number" name="zipcode" value={billingDetails.zipcode} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Phone</h4>
                            <input type="number" name="phone" value={billingDetails.phone} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Email address</h4>
                            <input type="text" name="email" value={billingDetails.email} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <textarea placeholder="Additional information" name="additionalInfo" rows={2} value={billingDetails.additionalInfo} onChange={handleChange} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                    </form>
                </div>
                {/* Product Subtotal */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Details */}
                    <div className="flex sm:gap-x-64 gap-x-32">
                        <div className="font-poppins text-xs space-y-6">
                            <h4 className="text-lg font-semibold">Product</h4>
                            {cartItems.map((item) => (
                                    <p key={item._id} className="text-[#9F9F9F]">{item.title}</p>
                                ))}
                            <p>Subtotal</p>
                            <p>Total</p>
                        </div>
                        <div className="font-poppins text-xs space-y-6 text-end">
                            <h4 className="text-lg font-semibold">Subtotal</h4>
                            {cartItems.map((item) => (
                                    <p key={item._id}>Rs. {item.price.toLocaleString()}</p>
                                ))}
                            <p>{calculateTotal().toLocaleString()}</p>
                            <h4 className="text-[#B88E2F] text-lg font-semibold">{calculateTotal().toLocaleString()}</h4>
                        </div>
                    </div>
                    {/* Line */}
                    <div className="sm:w-[470px] w-[370px] h-[1px] bg-[#D9D9D9]" />
                    {/* Further Details */}
                    <div className="space-y-6">
                        {/* Direct bank transfer */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-x-2">
                                <div className="bg-black rounded-full w-[12px] h-[12px]" />
                                <p className="sm:text-sm text-xs">Direct Bank Transfer</p>
                            </div>
                            <p className="text-[#9F9F9F] sm:w-[480px] w-[380px] sm:text-sm text-xs">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>
                        {/* Select option */}
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value="Option 1"                                   
                                    className="form-radio h-3 w-3 text-blue-500 border-[#9F9F9F]"
                                />
                                <label htmlFor="option1" className="ml-2 text-[#9F9F9F] sm:text-sm text-xs">
                                Direct Bank Transfer
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="options"
                                    value="Option 2"                                   
                                    className="form-radio h-3 w-3 text-blue-500 border-[#9F9F9F]"
                                />
                                <label htmlFor="option2" className="ml-2 text-[#9F9F9F] sm:text-sm text-xs">
                                Cash On Delivery
                                </label>
                            </div>
                        </div>
                        {/* Para */}
                        <p className="font-poppins sm:text-sm text-xs sm:w-[480px] w-[380px]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
                    </div>
                    {/* Button */}
                    <button type="button" className="font-poppins border-2 border-[#9F9F9F] rounded-md font-semibold sm:text-sm text-xs sm:px-20 px-12 py-3 hover:bg-[#9F9F9F] hover:text-white">Place order</button>
                </div>
            </div>
            {/* Feature */}
            <Feature />
        </div>
        </div>
    )
}