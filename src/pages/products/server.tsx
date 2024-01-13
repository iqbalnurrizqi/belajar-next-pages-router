import ProductView from "@/components/product";
import React from "react";
import { ProductsType } from "../../Type/ProductsType.type";

const ServerPage = (props: { products: ProductsType }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ServerPage;

// dipanggil setiap melakukan request
export async function getServerSideProps() {
  // fetch data dari api
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
