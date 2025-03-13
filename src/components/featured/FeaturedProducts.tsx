import React from "react";
import ProductCard from "../ui/ProductCard";

// Sample product data
const products = [
  {
    id: "1",
    name: "Hemp Tote Bag",
    price: 39.99,
    image: "URL_4",
    description:
      "Durable and eco-friendly hemp tote bag, perfect for everyday use.",
  },
  {
    id: "2",
    name: "Organic Hemp T-Shirt",
    price: 29.99,
    image: "URL_5",
    description:
      "Breathable and comfortable hemp t-shirt made from 100% organic materials.",
  },
  {
    id: "3",
    name: "Hemp Face Mask",
    price: 12.99,
    image: "URL_6",
    description: "Reusable face mask made from sustainable hemp fabric.",
  },
  {
    id: "4",
    name: "Hemp Oil",
    price: 24.99,
    image: "URL_7",
    description: "Pure hemp oil for skincare and wellness.",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#F9FAF8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#01330A] text-2xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
