import React from "react";
import Head from 'next/head'
import { baseUrl } from "@/config/appConfig";

import DashboardLayout from "@/layouts/DashboardLayout"
import UserList from "@/components/User/UserList";



const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
    <UserList/>
    </DashboardLayout>
  );
}

export default DashboardPage;