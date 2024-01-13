import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col  text-center justify-center w-full h-screen items-center gap-3">
        <Image src="/notFoundImage.svg" alt="not found" width={300} height={300} />
        <div className="flex p-5 justify-center text-center ">
          <h1 className="text-4xl text-red-600 font-bold">Sorry <span className="text-white">|</span></h1>
          <p className="p-3 text-xl"> Page not found</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
