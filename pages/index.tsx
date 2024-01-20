import Head from "next/head";

import Categorys from "@/components/Home/Categorys";
import NewArrival from "@/components/Home/NewArrival";
import Offers from "@/components/Home/Offers";

import ForYou from "@/components/Home/ForYou";
import LoadMore from "@/components/Home/LoadMore";
import SellerCart from "@/components/Home/SellerCart";
import Slider from "@/components/Home/Slider";
import WebFetchers from "@/components/Home/WebFetchers";
import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Trusted online store | E-Commerce</title>
      </Head>
      {/* Top Banner */}
      <Slider />
      {/* Top Banner */}
      {/* Main Start */}
      <div className="w-full pt-5 ">
        <SellerCart />
      </div>

      <div className="w-full pt-10">
        <WebFetchers />
      </div>
      <Marquee className="w-full container sticky mt-10 text-2xl  bg-gray-200 dark:bg-slate-600">
        This site is under development. This site is under development. This
        site is under development.This site is under development. This site is
        under development. This site is under development. This site is under
        development.
      </Marquee>
      <div className="w-full pt-10">
        <NewArrival />
      </div>
      <div className="w-full pt-10">
        <Offers />
      </div>
      <div className="w-full pt-10">
        <Categorys />
      </div>
      <div className="w-full pt-10">
        <ForYou />
      </div>
      <div className="w-full pt-10">
        <LoadMore />
      </div>
      {/*  Main End  */}
      <div className=" w-full container-none md:container lg:container rounded-lg  justify-center pt-24">
        <picture>
          <img
            src={`${baseUrl}/img/offer.jpg`}
            className="w-full rounded-lg px-12"
            alt=""
          />
        </picture>
        <picture>
          <img
            src={`${baseUrl}/img/methods.png`}
            className="w-full px-12  mt-12"
            alt=""
          />
        </picture>
      </div>
    </Layout>
  );
};

export default HomePage;
