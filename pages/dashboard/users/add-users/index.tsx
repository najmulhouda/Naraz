import Head from "next/head";

import AddUser from "@/components/User/AddUser";
import DashboardLayout from "@/layouts/DashboardLayout";

const AddUserPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <AddUser />
    </DashboardLayout>
  );
};

export default AddUserPage;
