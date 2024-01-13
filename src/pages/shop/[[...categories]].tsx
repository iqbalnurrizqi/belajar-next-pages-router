import React from "react";
import { useRouter } from "next/router";

const CategoriesProductPage = () => {
    const { query }= useRouter();
   console.log(query.categories)
  return (
    <div>
      <div className="m-10 flex flex-col gap-2 ">
        <h1 className="text-4xl font-serif font-bold text-blue-500">Detail Product</h1>
        <p>Shop : {query.categories ? query.categories[0] : ''} - {query.categories ? query.categories[1] : ''} - {query.categories ? query.categories[2] : ''}  </p>
        <p>Shop : {query.categories ? `${query.categories[0]} - ${query.categories[1]}`: ''} </p>
      </div>
    </div>
  );
};

export default CategoriesProductPage;
