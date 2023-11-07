import Head from "next/head";

import ContactPage from "@/components/Contact/ContactPage";
import Layout from "@/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>No.1 E-Commerce</title>
      </Head>

      {/* Main Start */}
      <ContactPage />

      {/*  Main End  */}
    </Layout>
  );
};

export default Contact;
