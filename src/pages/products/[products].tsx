import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fatcher";
import DetailProduct from "../DetailProduct";
import { ProductsType } from "@/Type/ProductsType.type";

const DetailProductPage = ({ product }: { product: ProductsType }) => {
  const { query } = useRouter();

  // client side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.products}`,
  //   fetcher
  // );

  return (
    <div>
      {/* client Side */}
      {/* <DetailProduct products={data ? data.data : isLoading} /> */}
      {/* server side */}
      <DetailProduct products={product} />
    </div>
  );
};

export default DetailProductPage;
// dipanggil menggunakan server-side rendering
// export async function getServerSideProps({params} : {params: {products: string}}) {
//   console.log(params.products);

//   // fetch data dari api
//   const res = await fetch(`http://localhost:3000/api/product/${params.products}`);
//   const response = await res.json();
//   console.log(response);

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// dipanggil menggunakan static generation
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  const paths = response.data.map((products: ProductsType) => ({
    params: {
      products: products.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { products: string };
}) {
  console.log(params.products);
  const res = await fetch(
    `http://localhost:3000/api/product/${params.products}`
  );
  const response = await res.json();
  console.log(response);

  return {
    props: {
      product: response.data,
    },
  };
}
