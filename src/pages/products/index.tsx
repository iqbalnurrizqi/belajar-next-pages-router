import ProductView from "@/components/product";
import { fetcher } from "@/lib/swr/fatcher";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";



const ProductsPage = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  console.log(products);

  // useEffect(() => {
  //   if(!isLogin) {
  //     push('/login')
  //   }
  // }, [])

  const { data, error, isLoading } = useSWR("/api/product", fetcher);


  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data));
  // }, []);

  return (
    <div className="bg-white w-full h-screen">
      <ProductView products={data ? data.data : isLoading} />
    </div>
  );
};

export default ProductsPage;
