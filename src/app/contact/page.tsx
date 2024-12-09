import Link from "next/link";
import Feature from "@/components/features";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Contact() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* Contact */}
            <div className="text-center flex flex-col items-center py-24 space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <Image src={logo} alt="logo" />
                <h2 className="text-4xl font-semibold">Contact</h2>
                <div className="text-sm space-x-2">
                    <Link href={"/"} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={"/contact"}>Contact</Link>
                </div>
            </div>
            {/* Contact Details */}
            <div className="flex flex-col items-center py-14 px-48 space-y-20">
                {/* Heading */}
                <div className="flex flex-col items-center gap-y-2 text-center">
                    <h2 className="font-poppins font-semibold sm:text-2xl text-xl">Get In Touch With Us</h2>
                    <p className="text-[#9F9F9F] sm:text-sm text-xs sm:w-[540px] w-[300px] font-poppins">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                {/* Form and detail */}
                <div className="flex sm:flex-row flex-col gap-x-32">
                    {/* detail */}
                    <div className="flex flex-row gap-x-2 sm:flex-col gap-y-8">
                        <div className="flex sm:gap-x-4 gap-x-2">
                            <i className="fas fa-map-marker-alt text-black sm:text-xl text-sm"></i>
                            <div className="font-poppins">
                                <h4 className="sm:text-xl text-sm font-semibold">Address</h4>
                                <p className="sm:text-sm text-xs sm:w-[140px] w-[100px]">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="flex sm:gap-x-4 gap-x-2">
                            <i className="fas fa-phone text-black sm:text-xl text-sm"></i>
                            <div className="font-poppins">
                                <h4 className="sm:text-xl text-sm font-semibold">Phone</h4>
                                <p className="sm:text-sm text-xs sm:w-[140px] w-[100px]">Mobile: +(84) 546-6789</p>
                                <p className="sm:text-sm text-xs sm:w-[140px] w-[100px]">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="flex sm:gap-x-4 gap-x-2">
                            <i className="fas fa-clock text-black sm:text-xl text-sm"></i>
                            <div className="font-poppins">
                                <h4 className="sm:text-xl text-sm font-semibold">Working</h4>
                                <p className="sm:text-sm text-xs sm:w-[140px] w-[100px]">Monday-Friday: 9:00 - 22:00</p>
                                <p className="sm:text-sm text-xs sm:w-[140px] w-[100px]">Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-8">
                        <div className="font-semibold font-poppins text-xs space-y-4">
                            <h4>Your name</h4>
                            <input type="text" placeholder="abc" required className="focus:outline-none border-2 rounded-md p-4 w-[380px]" />
                        </div>
                        <div className="font-semibold font-poppins text-xs space-y-4">
                            <h4>Email address</h4>
                            <input type="text" placeholder="Abc@def.com" required className="focus:outline-none border-2 rounded-md p-4 w-[380px]" />
                        </div>
                        <div className="font-semibold font-poppins text-xs space-y-4">
                            <h4>Subject</h4>
                            <input type="text" placeholder="This is an optional" className="focus:outline-none border-2 rounded-md p-4 w-[380px]" />
                        </div>
                        <div className="font-semibold font-poppins text-xs space-y-4">
                            <h4>Message</h4>
                            <textarea placeholder="Hi! i’d like to ask about" rows={4} required className="focus:outline-none border-2 rounded-md p-4 w-[380px]"></textarea>
                        </div>
                        <button className="bg-[#B88E2F] text-sm px-16 py-2 rounded text-white hover:bg-[#cfa136]">Submit</button>
                    </div>
                </div>
            </div>
            {/* Features */}
            <Feature />
        </div>
    )
}