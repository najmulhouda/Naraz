import Head from "next/head";
import { ReactNode, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { baseUrl } from "@/config/appConfig";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props): JSX.Element => {
  useEffect(() => {
    document.body.classList.add("w-screen");
    document.body.classList.add("h-screen");
    document.body.classList.add("bg-gray-100");
    document.body.classList.add("dark:bg-gray-900");
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href={`${baseUrl}/img/shopping.png`}
          type="image/x-icon"
        />
      </Head>
      <ToastContainer />
      <Header />

      <div className="full">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
