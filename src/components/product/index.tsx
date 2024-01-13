import { ProductsType } from "@/Type/ProductsType.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductView = ({ products }: { products: ProductsType }) => {
  return (
    <div className="bg-white w-full h-screen">
      <div className="text-black">
        <h1 className="flex justify-center font-sans font-bold text-4xl p-5 ">
          Products
        </h1>
        <div className="flex justify-center items-center gap-5 font-thin">
          {products.length > 0 ? (
            <>
              {products.map((product: ProductsType) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="shadow-md p-5"
                >
                  <div>
                    <Image
                      src={product.image}
                      alt={product.name}
                    width={250}
                    height={250}
                    />
                  </div>
                  <h4 className="font-bold">{product.name}</h4>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="font-bold">
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </Link>
              ))}
            </>
          ) : (
            <div className="shadow-md p-5 bg-gray-300 animate-pulse">
              <div>
                <div className="w-[250px] h-[250px] aspect-square bg-gray-200" />
              </div>
              <div className="w-100% h-[20px] bg-gray-200 mt-2" />
              <div className="w-100% h-[20px] bg-gray-200 mt-2" />
              <div className="w-100% h-[20px] bg-gray-200 mt-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
