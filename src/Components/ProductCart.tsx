import { FaHeart, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import Demo from "../assets/ChatGPT Image May 30, 2025, 10_57_05 PM.png";
import { useState } from "react";
const ProductCart = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        {/* Discount Badge */}

        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md z-10">
          10 % OFF
        </div>

        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={Demo}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            Tile
          </h3>
          <p className="text-sm text-gray-600 mb-2">category</p>

          {/* Price and Rating */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="text-lg font-bold text-green-600">$100</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">4.5</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-2">
            <button
              className="flex-1 text-sm  bg-blue-600 text-white py-2 px-4 rounded-md
             hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isFavorite
                  ? "text-red-500 bg-red-50"
                  : "text-gray-400 bg-gray-50"
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
    </>
  );
};

export default ProductCart;
