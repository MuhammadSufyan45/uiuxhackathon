import Link from "next/link";

export default function Footer() {
    return (
        <div className="max-w-[1440px] h-auto border-t-2 border-gray-200 px-14 py-7">
            <div className="flex sm:flex-row flex-col gap-y-24 gap-x-44">
                {/* Logo */}
                <div className="flex flex-col gap-y-12">
                    <h2 className="font-bold sm:text-2xl text-xl font-poppins">Furniro.</h2>
                    <div className="text-[#9F9F9F] text-sm">
                        <p>400 University Drive Suite 200 Coral</p>
                        <p>Gables,</p>
                        <p>FL 33134 USA</p>
                    </div>
                </div>
                {/* Links */}
                <div className="space-y-12 font-poppins">
                    <p className="text-[#9F9F9F]">Links</p>
                    <div className="flex flex-col space-y-8 font-semibold text-sm">
                        <Link href={""}>Home</Link>
                        <Link href={""}>Shop</Link>
                        <Link href={""}>About</Link>
                        <Link href={""}>Contact</Link>
                    </div>
                </div>
                {/* Help */}
                <div className="space-y-12 font-poppins">
                    <p className="text-[#9F9F9F]">Help</p>
                    <div className="flex flex-col space-y-8 font-semibold text-sm">
                        <Link href={""}>Payment Options</Link>
                        <Link href={""}>Returns</Link>
                        <Link href={""}>Privacy Policies</Link>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="space-y-12">
                    <p className="text-[#9F9F9F]">Newsleter</p>
                    <div className="space-x-2">
                        <input type="text" placeholder="Enter Your Email Address" className="text-[#9F9F9F] border-b-2 border-gray-600 pb-1 focus:outline-none text-sm" />
                        <button className="font-semibold border-b-2 border-gray-600 pb-1 text-sm">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            {/* Line */}
            <div className="sm:w-[1240px] h-[1px] bg-gray-200 mt-6"/>

            {/* All Right Reserved */}
            <p className="font-semibold mt-6 text-sm">2023 furino. All rights reverved</p>
        </div>
    )
}