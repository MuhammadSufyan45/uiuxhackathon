export default function Hero() {
    return (
        <div className="sm:w-[1440px] h-[716px] flex  items-center justify-end" style={{ backgroundImage: "url('/hero.png')" }}>
            <div className="bg-[#FFF3E3] sm:w-[643px] w-[343px] sm:h-[400px] sm:mr-14 mr-6 px-8 py-14">
                <div className="space-y-4">
                    <h4 className="font-poppins text-sm sm:text-lg">New Arrival</h4>
                    <h2 className="font-poppins font-bold text-[#B88E2F] sm:text-5xl text-3xl sm:w-[383px]">Discover Our New Collection</h2>
                    <p className="font-poppins text-sm sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </div>
                <button className="bg-[#B88E2F] hover:bg-[#c69a34] sm:px-12 sm:py-4 px-6 py-2 text-white font-semibold mt-8 text-sm">BUY NOW</button>
            </div>
        </div>
    )
}