import Link from "next/link";
import Feature from "@/components/features";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Blog1 from '../../../public/blog1.png';
import Blog2 from '../../../public/blog2.png';
import Blog3 from '../../../public/blog3.png';
import post1 from '../../../public/post1.png';
import post2 from '../../../public/post2.png';
import post3 from '../../../public/post3.png';
import post4 from '../../../public/post4.png';
import post5 from '../../../public/post5.png';

export default function Blog() {
    return (
        <div className="max-w-[1440px] h-auto">
            {/* Blog */}
            <div className="text-center flex flex-col items-center py-24 space-y-4" style={{ backgroundImage: "url('/shop.png')" }}>
                <Image src={logo} alt="logo" />
                <h2 className="text-4xl font-semibold">Blog</h2>
                <div className="text-sm space-x-2">
                    <Link href={"/"} className="font-semibold">Home</Link>
                    <i className="fas fa-chevron-right text-xs"></i>
                    <Link href={"/contact"}>Blog</Link>
                </div>
            </div>
            {/* Blogs */}
            <div className="flex flex-col sm:flex-row gap-x-24 gap-y-24 sm:px-24 px-6 py-24">
                <div className="space-y-14">
                    {/* Blog 1*/}
                    <div className="font-poppins text-[#9F9F9F] space-y-4">
                        <Image src={Blog1} alt='blog1' />

                        {/* Icons */}
                        <div className="flex gap-x-4 text-xs">
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-user"></i>
                                <p>Admin</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-calendar"></i>
                                <p>14 Oct 2022</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-tag"></i>
                                <p>Wood</p>
                            </div>
                        </div>

                        <h4 className="text-2xl font-semibold text-black">Going all-in with millennial design</h4>
                        <p className="sm:w-[818px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <div><Link href={"/blog"} className="border-b-2 border-black text-black text-sm">Read More</Link></div>
                    </div>

                    {/* Blog 2 */}
                    <div className="font-poppins text-[#9F9F9F] space-y-4">
                        <Image src={Blog2} alt='blog1' />

                        {/* Icons */}
                        <div className="flex gap-x-4 text-xs">
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-user"></i>
                                <p>Admin</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-calendar"></i>
                                <p>14 Oct 2022</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-tag"></i>
                                <p>Wood</p>
                            </div>
                        </div>

                        <h4 className="text-2xl font-semibold text-black">Going all-in with millennial design</h4>
                        <p className="sm:w-[818px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <div><Link href={"/blog"} className="border-b-2 border-black text-black text-sm">Read More</Link></div>
                    </div>

                    {/* Blog 3 */}
                    <div className="font-poppins text-[#9F9F9F] space-y-4">
                        <Image src={Blog3} alt='blog1' />

                        {/* Icons */}
                        <div className="flex gap-x-4 text-xs">
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-user"></i>
                                <p>Admin</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-calendar"></i>
                                <p>14 Oct 2022</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <i className="fas fa-tag"></i>
                                <p>Wood</p>
                            </div>
                        </div>

                        <h4 className="text-2xl font-semibold text-black">Going all-in with millennial design</h4>
                        <p className="sm:w-[818px] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <div><Link href={"/blog"} className="border-b-2 border-black text-black text-sm">Read More</Link></div>
                    </div>
                </div>
                {/* Fields */}
                <div className="space-y-24 sm:mr-0 mr-24">
                    {/* Input, categories */}
                    <div className="flex flex-col items-center space-y-8">
                        <div className="flex border-2 border-[#9F9F9F] px-4 py-2 w-[240px] rounded-md items-center">
                            <input type="text" className="focus:outline-none" />
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="font-poppins space-y-8">
                            <h2 className="font-semibold text-lg">Categories</h2>
                            <div className="flex gap-x-24 text-[#9F9F9F] text-xs">
                                <div className="flex flex-col gap-y-8">
                                    <p>Crafts</p>
                                    <p>Design</p>
                                    <p>Handmade</p>
                                    <p>Interior</p>
                                    <p>Wood</p>
                                </div>
                                <div className="flex flex-col gap-y-8">
                                    <p>2</p>
                                    <p>8</p>
                                    <p>7</p>
                                    <p>1</p>
                                    <p>6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent posts */}
                    <div className="flex flex-col items-center space-y-8">
                        <div className="font-poppins space-y-8">
                            <h2 className="font-semibold text-lg">Recent Posts</h2>
                            <div className="flex gap-x-4 text-[#9F9F9F] text-xs">
                                <div className="flex flex-col gap-y-8">
                                    <div className="flex items-center gap-x-2">
                                        <Image src={post1} alt="post1" className="w-[60px]" />
                                        <div className="flex-col space-y-1">
                                            <p className="text-black w-[120px]">Going all-in with millennial design</p>
                                            <p className="text-[#9F9F9F]">03 Aug 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={post2} alt="post2" className="w-[60px]" />
                                        <div className="flex-col space-y-1">
                                            <p className="text-black w-[120px]">Exploring new ways of decorating</p>
                                            <p className="text-[#9F9F9F]">03 Aug 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={post3} alt="post3" className="w-[60px]" />
                                        <div className="flex-col space-y-1">
                                            <p className="text-black w-[120px]">Handmade pieces that took time to make</p>
                                            <p className="text-[#9F9F9F]">03 Aug 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={post4} alt="post4" className="w-[60px]" />
                                        <div className="flex-col space-y-1">
                                            <p className="text-black w-[120px]">Modern home in Milan</p>
                                            <p className="text-[#9F9F9F]">03 Aug 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={post5} alt="post5" className="w-[60px]" />
                                        <div className="flex-col space-y-1">
                                            <p className="text-black w-[120px]">Colorful office redesign</p>
                                            <p className="text-[#9F9F9F]">03 Aug 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Next Buttons */}
            <div className="w-[200px] h-[100px] flex items-center gap-x-6 sm:ml-[600px] ml-16">
                <div className="bg-[#B88E2F] w-fit px-4 py-2 rounded">1</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">2</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">3</div>
                <div className="bg-[#F9F1E7] text-black w-fit px-4 py-2 rounded hover:bg-[#B88E2F]">Next</div>
            </div>
            {/* Features */}
            <Feature />
        </div>
    )
}