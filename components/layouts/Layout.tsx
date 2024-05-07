import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>CookieMaster</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
