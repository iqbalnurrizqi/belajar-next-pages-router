import { ProductsType } from "@/Type/ProductsType.type";
import Image from "next/image";
import React from "react";

const DetailProduct = ({ products }: { products: ProductsType }) => {
  return (
    <>
      <div className="shadow-md bg-white h-screen p-5 m-auto text-center">
        <h1 className="text-4xl mb-4 font-serif font-bold text-black">
          Detail Product
        </h1>
        <div className="shadow-md w-[300px] m-auto p-3">
          <Image
            src={products?.image && products.image}
            alt={products?.name}
            className="m-auto"
            width={250}
            height={250}
          />

          <h4 className="font-bold text-black">{products?.name}</h4>
          <p className="text-gray-500 ">{products?.category}</p>
          <p className="font-bold text-gray-700">
            {products?.price &&
              products.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
          </p>
          <p className="text-black m-3 ">{products?.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
