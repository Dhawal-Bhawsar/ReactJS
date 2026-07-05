import { FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">

        {/* Badge */}

        <div
          className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full z-10
            ${
              product.badge === "NEW"
                ? "bg-green-500"
                : product.badge === "POPULAR"
                ? "bg-blue-500"
                : "bg-orange-500"
            }`}
        >
          {product.badge}
        </div>

        {/* Image */}

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">

        {/* Category */}

        <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
          {product.category}
        </p>

        {/* Title */}

        <h2 className="text-2xl font-bold mt-2 h-16 overflow-hidden">
          {product.title}
        </h2>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-3 text-yellow-500">

          <FaStar />

          <span className="text-gray-700">
            {product.rating}
          </span>

        </div>

        {/* Description */}

        <p className="text-gray-500 mt-4 leading-relaxed h-20 overflow-hidden">
          {product.description}
        </p>

        {/* Price */}

        <p className="text- 3xl font-bold text-blue-600 mt-5">
          {product.price}
        </p>

        {/* Button */}

        <button className="w-full mt-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          View Details →
        </button>

      </div>

    </div>
  );
}

export default ProductCard;