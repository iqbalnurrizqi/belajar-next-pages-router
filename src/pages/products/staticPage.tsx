import { ProductsType } from "@/Type/ProductsType.type";
import ProductView from "@/components/product";
import React from "react";

const StaticPage = (props: { products: ProductsType }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default StaticPage;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
