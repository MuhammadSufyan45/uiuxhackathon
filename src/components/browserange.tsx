import Image from "next/image";
import Dining from "../../public/dining.png";
import Living from "../../public/living.png";
import Bedroom from "../../public/bedroom.png";

export default function Browse(){
    return(
        <div className="flex flex-col items-center gap-y-16">
            {/* Heading */}
            <div className="text-center">
                <h2 className="sm:text-3xl text-2xl font-poppins font-bold text-[#333333]">Browse The Range</h2>
                <p className="font-poppins text-[#333333] text-sm sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Images */}
            <div className="flex sm:flex-row flex-col items-center gap-x-6 gap-y-6 text-[#333333]">
                <div>
                <Image src={Dining} alt="dining" className="rounded-md sm:w-[381px] sm:h-[460px] w-[250px] h-[250px]"/>
                <h2 className="sm:text-2xl text-xl font-semibold text-center mt-4">Dining</h2>
                </div>
                <div>
                <Image src={Living} alt="living" className="rounded-md sm:w-[381px] sm:h-[460px] w-[250px] h-[250px]"/>
                <h2 className="sm:text-2xl text-xl font-semibold text-center mt-4">Living</h2>
                </div>
                <div>
                <Image src={Bedroom} alt="bedroom" className="rounded-md sm:w-[381px] sm:h-[460px] w-[250px] h-[250px]"/>
                <h2 className="sm:text-2xl text-xl font-semibold text-center mt-4">Bedroom</h2>
                </div>
            </div>
        </div>
    )
}