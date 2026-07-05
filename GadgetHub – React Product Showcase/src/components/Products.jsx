import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <div className="text-center mb-14">

        <p className="text-blue-600 uppercase tracking-[0.3em] font-bold">
          Collection
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-5 max-w-xl mx-auto">
          Explore a carefully curated collection of premium gadgets
          designed for work, entertainment, and everyday life.
        </p>

      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[320px] max-w-[320px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Products;