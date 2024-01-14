import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {push} = useRouter()
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value, 
      fullname: event.target.fullname.value, 
      password: event.target.password.value, 
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(result.status === 200) {
      event.target.reset()
      setIsLoading(false)
      push("/login")
    } else {
      setIsLoading(false)
      setError(result.status === 400 ? "Something went wrong" : "Email already exist")
    }
  }
  return (
    <>
      <Head>
        <title>RegisterPage</title>
      </Head>
      <div className="items-center flex justify-center flex-wrap w-full h-screen ">
        <div className="m-5 items-center p-5 shadow-xl border-2 border-gray-300 rounded-md" >
          <h1 className="text-4xl font-bold text-blue-500 ">Register </h1>
          
          <p>Register to continue</p>
          <form onSubmit={handleSubmit} className="mt-5  flex flex-col p-5 shadow-xl border-2 border-gray-300 rounded-md">
          {error && <p className="text-red-500">{error}</p>}
            <label htmlFor="email" className="font-bold py-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-[300px] p-2  rounded-md text-black border-2 bg-gray-300 border-gray-300"
            />

            <label htmlFor="text" className="font-bold py-2">
              Name:
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="jhon doe"
              className="w-[300px]  p-2 rounded-md text-black border-2 bg-gray-300 border-gray-300"
            />

            <label htmlFor="password" className="font-bold py-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-[300px] p-2 rounded-md text-black border-2 bg-gray-300 border-gray-300"
            />

            <input
              type="submit"
              value="Login"
              className="bg-blue-500 p-2 rounded-lg my-5 w-full"
            />
            <p>
              have an account?
              <button type="submit" className="text-blue-500 hover:text-blue-400" disabled={isLoading}>
                {isLoading ? "Loading..." : "Register"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default register;
