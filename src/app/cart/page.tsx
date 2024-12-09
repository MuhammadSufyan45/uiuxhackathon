import Image from "next/image";
import Link from "next/link";
import cartsofa from "../../../public/cartsofa.png";
import bin from "../../../public/dustbin.png";
import Feature from "@/components/features";
import logo from "../../../public/logo.png";
import Buttonbord from "@/components/buttonbord";

export default function Cart() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* Cart hero */}
            <div className="text-center flex flex-col items-center py-24 space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <Image src={logo} alt="logo" />
                <h2 className="text-4xl font-semibold">Cart</h2>
                <div className="text-sm space-x-2">
                    <Link href={"/"} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={"/cart"}>Cart</Link>
                </div>
            </div>
            {/* Cart */}
            <div className="flex flex-col sm:flex-row gap-y-16 gap-x-8 sm:p-16 p-8 sm:ml-44">
                {/* Product */}
                <div className="sm:space-y-10 space-y-4">
                    <div className="flex sm:gap-x-24 gap-x-6 bg-[#F9F1E7] sm:w-[700px] h-auto font-poppins font-semibold sm:text-sm text-xs sm:px-28 px-7 py-4">
                        <h4>Product</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Subtotal</h4>
                    </div>
                    <div className="flex sm:gap-x-6 gap-x-2 items-center font-poppins">
                        <Image src={cartsofa} alt="Cartsofa" className="sm:w-[70px] w-[35px]" />
                        <div className="flex items-center sm:gap-x-12 gap-x-2 sm:text-sm text-xs">
                            <h4 className="text-[#9F9F9F]">Asgard sofa</h4>
                            <h4 className="text-[#9F9F9F]">Rs. 250,000.00</h4>
                            <p className="border-2 sm:px-4 px-2 py-1 rounded text-sm">1</p>
                            <h4>Rs. 250,000.00</h4>
                            <Image src={bin} alt="bin" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]" />
                        </div>
                    </div>
                </div>
                {/* Cart total */}
                <div className="flex flex-col items-center h-[300px] bg-[#F9F1E7] space-y-12 py-4 px-12">
                    <h2 className="text-2xl font-bold font-poppins">Cart Totals</h2>
                    <div className="space-y-4">
                        <div className="flex gap-x-12 font-poppins text-sm">
                            <p className="font-semibold">Subtotal</p>
                            <p className="text-xs text-[#9F9F9F]">Rs. 250,000.00</p>
                        </div>
                        <div className="flex gap-x-12 font-poppins text-sm">
                            <p className="font-semibold">Total</p>
                            <p className="text-[#B88E2F] font-semibold">Rs. 250,000.00</p>
                        </div>
                    </div>
                    <Buttonbord item="Check Out"/>
                </div>
            </div>
            {/* Features */}
            <Feature />
        </div>
    )
}