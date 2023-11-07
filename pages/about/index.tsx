import Head from "next/head";

import AboutPage from "@/components/About/AboutPage";
import Layout from "@/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Main Start */}
      <AboutPage />

      {/*  Main End  */}
    </Layout>
  );
};

export default About;
