import { FaHeart, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

// 1. Define the props interface
interface ProductCartProps {
  title: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  name?: string;
}

// 2. Destructure props in the function parameter
const ProductCart = ({
  title,
  category,
  price,
  image,
  rating,
}: ProductCartProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{category}</p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <span className="text-lg font-bold text-green-600">${price}</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-2">
          <button
            className="flex-1 text-sm bg-blue-600 text-white py-2 px-4 rounded-md
             hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-md transition-colors duration-300 ${
              isFavorite ? "text-red-500 bg-red-50" : "text-gray-400 bg-gray-50"
            }`}
          >
            <FaHeart />
          </button>
          <button className="p-2 text-gray-400 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-300">
            <FaInfoCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
