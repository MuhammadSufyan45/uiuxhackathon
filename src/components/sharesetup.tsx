import Image from "next/image";
import share1 from "../../public/share/share1.png";
import share2 from "../../public/share/share3.png";
import share3 from "../../public/share/share2.png";
import share4 from "../../public/share/share4.png";
import share5 from "../../public/share/share5.png";
import share7 from "../../public/share/share7.png";
import share9 from "../../public/share/share9.png";
import share6 from "../../public/share/share6.png";
import share8 from "../../public/share/share8.png";

export default function Share() {
    return (
        <div>
            {/* Writings */}
            <div className="text-center">
                <p className="text-[#616161] sm:text-sm font-poppins">Share your setup with</p>
                <h2 className="text-[#3A3A3A] sm:text-4xl text-2xl font-bold font-poppins">#FuniroFurniture</h2>
            </div>
            {/* Images */}
            <div className="flex sm:gap-x-4 gap-x-1">
                {/* Left Images */}
                <div className="sm:space-y-4 space-y-1">
                    <div className="flex sm:gap-x-4 gap-x-1">
                    <Image src={share1} alt="img1" className="sm:w-[60px] sm:h-[392px] w-[30px] h-[188px]"/>    
                    <Image src={share2} alt="img2"className="sm:w-[411px] sm:h-[300px] w-[201px] h-[80px] sm:mt-[88px] mt-[108px]"/> 
                    </div>
                    <div className="flex sm:gap-x-4 gap-x-1">
                    <Image src={share3} alt="img1" className="sm:w-[184px] sm:h-[280px] w-[44px] h-[100px]"/>    
                    <Image src={share4} alt="img2"className="sm:w-[288px] sm:h-[200px] w-[102px] h-[80px] mb-16"/> 
                    </div>
                </div>
                {/*Middle one */}
                <div>
                    <Image src={share5} alt="img5" className="sm:w-[294px] sm:h-[362px] w-[94px] h-[60px] mt-36"/>
                </div>
                {/* Right Images */}
                <div>
                <div className="sm:space-y-4 space-y-1">
                    <div className="flex sm:gap-x-4 gap-x-1">
                    <Image src={share7} alt="img1" className="sm:w-[274px] sm:h-[300px] w-[180px] h-[100px] mt-24"/>    
                    <Image src={share9} alt="img2"className="sm:w-[241px] sm:h-[398px] w-[68px]"/> 
                    </div>
                    <div className="flex sm:gap-x-4 gap-x-1">
                    <Image src={share6} alt="img1" className="sm:w-[184px] sm:h-[254px] w-[84px] h-[74px] mb-16"/>    
                    <Image src={share8} alt="img2"className="sm:w-[282px] sm:h-[180px] w-[182px] h-[60px] mb-32"/> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}