import Head from "next/head";

import Categorys from "@/components/Home/Categorys";
import NewArrival from "@/components/Home/NewArrival";
import Offers from "@/components/Home/Offers";

import SellerCart from "@/components/Home/SellerCart";
import TopSlider from "@/components/Home/TopSlider";
import WebFetchers from "@/components/Home/WebFetchers";
import Layout from "@/layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Top Banner */}
      <TopSlider />
      {/* Top Banner */}

      {/* Main Start */}
      <div className="w-full py-5 border-b-4 ">
        <SellerCart />
      </div>

      <div className="w-full pt-5">
        <WebFetchers />
      </div>

      <div className="w-full pt-24">
        <NewArrival />
      </div>

      <div className="w-full pt-24">
        <Offers />
      </div>

      <div className="w-full pt-24">
        <Categorys />
      </div>

      {/*  Main End  */}
    </Layout>
  );
};

export default HomePage;
