import Product1 from "./product1";
import Product2 from "./product2";
import Product3 from "./product3";
import Product4 from "./product4";

export default function Related() {
    return (
        <div className="max-w-[1440px] flex flex-col items-center gap-y-8 border-t-2 sm:p-8 p-6">
            <h2 className="sm:text-4xl text-2xl font-bold text-[#333333] text-center">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
            </div>
            <button className="px-14 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold hover:bg-[#B88E2F] hover:text-white">Show More</button>
        </div>
    );
}
