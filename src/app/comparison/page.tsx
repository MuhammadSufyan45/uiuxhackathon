import Link from "next/link";
import Feature from "@/components/features";
import Image from "next/image";
import logo from "../../../public/logo.png";
import comp from '../../../public/comp.png';
import main from '../../../public/main.png';

export default function Compare() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* Comparison */}
            <div className="text-center flex flex-col items-center py-24 space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <Image src={logo} alt="logo" />
                <h2 className="text-4xl font-semibold">Product Comparison</h2>
                <div className="text-sm space-x-2">
                    <Link href={"/"} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={"/contact"}>Comparison</Link>
                </div>
            </div>
            {/* First sect */}
            <div className="flex flex-col sm:flex-row gap-y-8 items-center justify-center gap-x-16 py-6">
                <div className="font-poppins flex flex-col gap-y-4">
                    <h2 className="text-xl font-semibold w-[180px]">Go to Product page for more
                        Products</h2>
                    <Link href={"/"} className="border-b-2 w-fit">View More</Link>
                </div>
                <div className="font-medium font-poppins">
                    <Image src={main} alt="comp" className="bg-[#F9F1E7] w-[180px] h-[140px] rounded-md" />
                    <h2 className="text-lg">Asgaard Sofa</h2>
                    <h4 className="text-sm">Rs. 250,000.00</h4>
                    <div className="flex items-center gap-x-2">
                        <h4 className="text-xs">4.7</h4>
                        <div className="text-xs space-x-1">
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-gray-400"></i>
                        </div>
                        <div className="w-[1px] h-[22px] bg-[#9F9F9F]" />
                        <p className="text-[#9F9F9F] text-xs">204 Review</p>
                    </div>
                </div>
                <div className="font-medium font-poppins">
                    <Image src={comp} alt="comp" className="bg-[#F9F1E7] w-[180px] h-[140px] rounded-md" />
                    <h2 className="text-lg">Outdoor Sofa Set</h2>
                    <h4 className="text-sm">Rs. 224,000.00</h4>
                    <div className="flex items-center gap-x-2">
                        <h4 className="text-xs">4.2</h4>
                        <div className="text-xs space-x-1">
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-yellow-400"></i>
                            <i className="fa fa-star text-gray-400"></i>
                        </div>
                        <div className="w-[1px] h-[22px] bg-[#9F9F9F]" />
                        <p className="text-[#9F9F9F] text-xs">145 Review</p>
                    </div>
                </div>
                <div className="font-poppins">
                    <h2 className="font-semibold">Add A Product</h2>
                    <div className="text-xs text-white bg-[#B88E2F] px-4 py-2 rounded flex items-center gap-x-8">Choose a Product<i className="fas fa-chevron-down text-lg"></i></div>
                </div>
            </div>

            {/* Line */}
            <div className="flex items-center justify-center">
                <div className="h-[1px] sm:w-[1040px] bg-[#E8E8E8]" />
            </div>
            {/* Comparison */}
            <div className="sm:px-[250px] space-y-6 px-4 py-6">
                {/* General  */}
                <div className="flex sm:gap-x-28 gap-x-6 items-end font-poppins">
                    <div className="space-y-5">
                        <h2 className="font-semibold text-sm sm:text-lg">General</h2>
                        <div className="sm:text-sm text-xs space-y-5">
                            <p>Sales Package</p>
                            <p>Model Number</p>
                            <p>Secondary Material</p>
                            <p>Configuration</p>
                            <p>Upholstery Material</p>
                            <p>Upholstery Color</p>
                        </div>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>1 sectional sofa</p>
                        <p>TFCBLIGRBL6SRHS</p>
                        <p>Solid Wood</p>
                        <p>L-shaped</p>
                        <p>Fabric + Cotton</p>
                        <p>Bright Grey & Lion</p>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>1 sectional sofa</p>
                        <p>TFCBLIGRBL6SRHS</p>
                        <p>Solid Wood</p>
                        <p>L-shaped</p>
                        <p>Fabric + Cotton</p>
                        <p>Bright Grey & Lion</p>
                    </div>
                </div>

                {/* Product   */}
                <div className="flex sm:gap-x-20 gap-x-6 items-end font-poppins">
                    <div className="space-y-5">
                        <h2 className="font-semibold text-sm sm:text-lg">Product </h2>
                        <div className="sm:text-sm text-xs space-y-5">
                            <p>Filling Material</p>
                            <p>Finish Type</p>
                            <p>Adjustable Headrest</p>
                            <p>Maximum Load Capacity</p>
                            <p>Origin of Manufacture</p>
                        </div>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>Foam</p>
                        <p>Bright Grey & Lion</p>
                        <p>No</p>
                        <p>280 KG</p>
                        <p>India</p>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>Matte</p>
                        <p>Bright Grey & Lion</p>
                        <p>yes</p>
                        <p>300 KG</p>
                        <p>India</p>
                    </div>
                </div>

                {/* Dimensions  */}
                <div className="flex sm:gap-x-32 gap-x-6 items-end font-poppins">
                    <div className="space-y-5">
                        <h2 className="font-semibold text-sm sm:text-lg">Dimensions</h2>
                        <div className="sm:text-sm text-xs space-y-5">
                            <p>Width</p>
                            <p>Height</p>
                            <p>Depth</p>
                            <p>Weight</p>
                            <p>Seat Height</p>
                            <p>Leg Height</p>
                        </div>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>265.32 cm</p>
                        <p>76 cm</p>
                        <p>167.76 cm</p>
                        <p>45 KG</p>
                        <p>41.52 cm</p>
                        <p>5.46 cm</p>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>265.32 cm</p>
                        <p>76 cm</p>
                        <p>167.76 cm</p>
                        <p>65 KG</p>
                        <p>41.52 cm</p>
                        <p>5.46 cm</p>
                    </div>
                </div>

                {/* Warranty  */}
                <div className="flex sm:gap-x-32 gap-x-2 items-end font-poppins">
                    <div className="space-y-5">
                        <h2 className="font-semibold text-sm sm:text-lg">Warranty</h2>
                        <div className="sm:text-sm text-xs space-y-5">
                            <p>Warranty Summary</p>
                            <p>Warranty Service
                                Type</p>
                            <p>Covered in Warranty</p>
                            <p>Not Covered in Warranty</p>
                            <p>Domestic Warranty</p>
                        </div>
                    </div>
                    <div className="sm:text-sm text-xs space-y-5">
                        <p>1 Year Manufacturing Warranty</p>
                        <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                        <p>Warranty Against Manufacturing Defect</p>
                        <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                        <p>1 Year</p>
                    </div>
                    <div className="sm:text-sm text-xs sm:space-y-5 space-y-1">
                        <p>1.2 Year Manufacturing Warranty</p>
                        <p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                        <p>Warranty of the product is limited to manufacturing defects only.</p>
                        <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                        <p>3 Months</p>
                    </div>
                </div>
            </div>
            <Feature />
        </div>
    )
}