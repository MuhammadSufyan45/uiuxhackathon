import Product1 from "./product1";
import Product2 from "./product2";
import Product3 from "./product3";
import Product4 from "./product4";
import Product5 from "./product5";
import Product6 from "./product6";
import Product7 from "./product7";
import Product8 from "./product8";

export default function Products() {
    return (
        <div className="flex flex-col items-center gap-y-8">
            <h2 className="text-4xl font-bold text-[#333333] text-center">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product5 />
                <Product6 />
                <Product7 />
                <Product8 />
            </div>
            <button className="px-14 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold hover:bg-[#B88E2F] hover:text-white">Show More</button>
        </div>
    );
}
