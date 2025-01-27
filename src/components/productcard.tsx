import Image from "next/image";
import Link from "next/link";

interface Product {
    _id: string;
    title: string;
    productImage: {
        asset: {
            url: string;
        };
    };
    price: number;
    isNew: boolean;
};

interface ProductCardProps {
  product: Product;
  handleAdd: (product: Product) => void; // Type for handleAdd prop
}

const ProductCard = ( { product, handleAdd }: ProductCardProps ) => {
  return (
    <div className="sm:w-full w-[246px] h-[346px] sm:h-[406px] bg-[#F4F5F7] flex flex-col relative">
      {/* Image Section with Hover Effect */}
      <div className="w-full h-[301px] relative group">
        <Image
          src={product.productImage.asset.url}
          alt="Product Image"
          width={285}
          height={301}
          className="object-cover w-full h-full"
        />
        {/* New Product Tag */}
        {product.isNew && (
          <p className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-4 right-4 text-xs font-bold">
            New
          </p>
        )}
        {/* Overlay on hover only on image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        {/* Hover Content (Button & Icons) */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <div className="text-center">
            <button onClick={() => handleAdd(product)} className="bg-white sm:text-lg text-sm text-[#B88E2F] font-semibold py-2 px-8 rounded-md mb-4">
              Add to Cart
            </button>
            <div className="flex sm:gap-x-8 gap-x-6 justify-center">
              <div className="flex items-center gap-x-1">
                <i className="fas fa-share-alt text-white"></i>
                <p className="sm:text-sm text-xs text-white">Share</p>
              </div>
              <Link href={`/comparison`}>
                <div className="flex items-center gap-x-1">
                  <i className="fas fa-exchange-alt text-white"></i>
                  <p className="sm:text-sm text-xs text-white">Compare</p>
                </div>
              </Link>
              <div className="flex items-center gap-x-1">
                <i className="fas fa-heart text-white"></i>
                <p className="sm:text-sm text-xs text-white">Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:space-y-2 space-y-1 flex-grow">
        <Link href={`/shop/${product._id}`}>
          <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">
            {product.title}
          </h2>
        </Link>
        <p className="text-[#898989] font-poppins sm:text-sm text-xs"></p>
        <div className="flex items-center gap-x-4">
          <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">
            ${product.price}
          </h2>
          <p className="text-[#898989] font-poppins text-sm line-through"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
