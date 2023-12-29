import Head from "next/head";

import NewArrival from "@/components/Home/NewArrival";

import Layout from "@/layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Trusted online store | E-Commerce</title>
      </Head>

      <div className="w-full pt-10">
        <NewArrival />
      </div>
    </Layout>
  );
};

export default HomePage;
