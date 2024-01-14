import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import result from "postcss/lib/result";
import { useState } from "react";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };

  return (
    <>
      <Head>
        <title>LoginPage</title>
      </Head>
      <div className="items-center flex justify-center flex-wrap w-full h-screen ">
        <div className="m-5 items-center p-5 shadow-xl border-2 border-gray-300 rounded-md">
          <h1 className="text-4xl font-bold text-blue-500 ">Login </h1>

          <p>login to continue</p>
        
          <form
            onSubmit={handleSubmit}
            className="mt-5  flex flex-col  border-gray-300 rounded-md"
          >
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
              className="bg-blue-500 p-2 rounded-lg mt-5 w-full"
            />
          </form>
          <button
          className=" justify-center text-center bg-red-500 p-2 rounded-lg my-3 w-full"
            onClick={() =>
              signIn("google", {
                callbackUrl,
                redirect: false,
              })
            }
          >
            Sign In with Google
          </button>
          <p className="text-center">
              Dont have an account?<br /><span>
               Sign Up{" "}
              </span>
              <Link
                className="font-bold text-blue-500 hover:text-blue-400"
                href="/register"
              >
                Here
              </Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default login;
