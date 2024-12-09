import Image from "next/image";
import desc1 from '../../public/desc1.png';
import desc2 from '../../public/desc2.png';

export default function Description() {
    return (
        <div className="max-w-[1440px] h-auto sm:px-16 px-8 py-12 border-t-2">
            <div className="flex flex-col items-center space-y-8">
                {/* Headings */}
                <div className="flex gap-x-8 items-center font-poppins sm:text-xl text-sm">
                    <h2 className="font-semibold">Description</h2>
                    <h2 className="text-[#9F9F9F] hover:text-[#767676]">Additional Information</h2>
                    <h2 className="text-[#9F9F9F] hover:text-[#767676]">Reviews [5]</h2>
                </div>
                {/* Para's */}
                <div className="text-xs text-[#9F9F9F] font-poppins space-y-6">
                    <p className="sm:w-[1000px] w-[300px]">Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="sm:w-[1000px] w-[300px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                {/* Images */}
                <div className="flex flex-col sm:flex-row gap-x-8 gap-y-6 sm:mr-0">
                    <Image src={desc1} alt="img1" className=""/>
                    <Image src={desc2} alt="img2" className=""/>
                </div>
            </div>
        </div>
    )
}