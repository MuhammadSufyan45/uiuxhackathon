import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Feature from "@/components/features";

export default function Checkout() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* Cart hero */}
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
                    <form className="space-y-4">
                        <div className="flex gap-x-4">
                            <div className="sm:text-sm text-xs font-poppins space-y-4">
                                <h4 className="font-semibold">First Name</h4>
                                <input type="text" name="name" required className="border-2 sm:w-[190px] px-2 py-4 focus:outline-none rounded-md" />
                            </div>
                            <div className="sm:text-sm text-xs font-poppins space-y-4">
                                <h4 className="font-semibold">Last Name</h4>
                                <input type="text" name="name" required className="border-2 sm:w-[190px] px-2 py-4 focus:outline-none rounded-md" />
                            </div>
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Company Name (Optional)</h4>
                            <input type="text" name="name" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <label className="block font-semibold">Country / Region</label>
                            <select
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
                            <input type="text" name="name" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Town / City</h4>
                            <input type="text" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <label className="block font-semibold">Province</label>
                            <select
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
                            <h4 className="font-semibold">ZIP code</h4>
                            <input type="number" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Phone</h4>
                            <input type="number" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <div className="sm:text-sm text-xs font-poppins space-y-4">
                            <h4 className="font-semibold">Email address</h4>
                            <input type="text" required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                        </div>
                        <textarea placeholder="Additional information" rows={2} required className="border-2 sm:w-[400px] w-[360px] px-2 py-4 focus:outline-none rounded-md" />
                    </form>
                </div>
                {/* Product Subtotal */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Details */}
                    <div className="flex sm:gap-x-64 gap-x-32">
                        <div className="font-poppins text-xs space-y-6">
                            <h4 className="text-lg font-semibold">Product</h4>
                            <p className="text-[#9F9F9F]">Asgaard sofa</p>
                            <p>Subtotal</p>
                            <p>Total</p>
                        </div>
                        <div className="font-poppins text-xs space-y-6 text-end">
                            <h4 className="text-lg font-semibold">Subtotal</h4>
                            <p>Rs. 250,000.00</p>
                            <p>Rs. 250,000.00</p>
                            <h4 className="text-[#B88E2F] text-lg font-semibold">Rs. 250,000.00</h4>
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
                    <button className="font-poppins border-2 border-[#9F9F9F] rounded-md font-semibold sm:text-sm text-xs sm:px-20 px-12 py-3 hover:bg-[#9F9F9F] hover:text-white">Place order</button>
                </div>
            </div>
            {/* Feature */}
            <Feature />
        </div>
    )
}