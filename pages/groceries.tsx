import Head from "next/head";

import Breadcrumb from "@/components/Shop/Breadcrumb";
import Product from "@/components/Shop/Product";
import Layout from "@/layouts/Layout";

const Shop = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Main Start */}
      <Breadcrumb />
      <Product />

      {/*  Main End  */}
    </Layout>
  );
};

export default Shop;
