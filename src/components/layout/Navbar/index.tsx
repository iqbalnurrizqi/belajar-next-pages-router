import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className="flex w-full h-[70px] bg-violet-500 items-center text-xl font-bold ">
      <nav className="flex flex-row gap-5 text-center w-full mx-10">
        <Link href="/" className=" hover:text-fuchsia-500 hover:border-b-2">
          Home
        </Link>
        <Link href="/about" className="hover:text-fuchsia-500 hover:border-b-2">
          About
        </Link>
        <Link
          href="/products"
          className="hover:text-fuchsia-500 hover:border-b-2"
        >
          Products
        </Link>
        <button className="hover:text-fuchsia-500 hover:border-b-2">
          Shop
        </button>
      </nav>
      <div className="flex p-2 items-center m-10">
        <p className=" text-center text-black w-[170px]">
          {data && data.user.fullname}
        
        </p>
         {data && data.user.image && (
          <Image
            src={data.user.image}
            alt="profile"
            className=" rounded-full mr-6"
            width={40}
            height={40}
          />
         )}
        {data ? (
          <button
            className="bg-white text-black w-[150px] p-2  hover:bg-black hover:text-white rounded"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="bg-white text-black w-[100px] p-2 hover:bg-black hover:text-white rounded"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
