import React from "react";
import { Button } from "./Button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative pb-[100%]">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1D2939] mb-1">{name}</h3>
        <p className="text-[#667085] text-sm mb-2 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[#1A432E] font-bold">${price.toFixed(2)}</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
