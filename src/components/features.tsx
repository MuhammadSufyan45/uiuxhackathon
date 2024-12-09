import Image from "next/image";
import f1 from "../../public/Frame 1.png";
import f2 from "../../public/Frame 2.png";
import f3 from "../../public/Frame 3.png";
import f4 from "../../public/Frame 4.png";

export default function Feature(){
    return(
        <div className="max-w-[1440px] h-auto bg-[#FAF3EA] flex justify-center">
            <div className="flex sm:flex-row flex-col gap-y-16 gap-x-16 px-8 py-28">
                <Image src={f1} alt="f1" width={260}/>
                <Image src={f2} alt="f1" width={260}/>
                <Image src={f3} alt="f1" width={200}/>
                <Image src={f4} alt="f1" width={200}/>
            </div>
        </div>
    )
}