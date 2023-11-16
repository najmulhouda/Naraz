import Head from "next/head";

import UserList from "@/components/User/UserList";
import DashboardLayout from "@/layouts/DashboardLayout";

const UsersPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <UserList />
    </DashboardLayout>
  );
};

export default UsersPage;
