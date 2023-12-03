import Head from "next/head";

import Categorys from "@/components/Home/Categorys";
import NewArrival from "@/components/Home/NewArrival";
import Offers from "@/components/Home/Offers";

import ForYou from "@/components/Home/ForYou";
import LoadMore from "@/components/Home/LoadMore";
import Slider from "@/components/Home/Slider";
import WebFetchers from "@/components/Home/WebFetchers";
import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Top Banner */}
      <Slider />
      {/* Top Banner */}

      {/* Main Start */}
      <div className="w-full  ">{/* <SellerCart /> */}</div>

      <div className="w-full pt-5">
        <WebFetchers />
      </div>

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
      <div className="container w-full rounded-lg  justify-center pt-24">
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
            className="w-full px-12  container mt-12"
            alt=""
          />
        </picture>
      </div>
    </Layout>
  );
};

export default HomePage;
