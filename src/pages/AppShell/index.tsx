
import { useRouter } from "next/router";
import React from "react";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/navbar"))

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
})

const disableNavbar = ["/login", "/register", "/404"]

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  console.log(pathname)
  return (
    <main className={roboto.className}>
     {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
